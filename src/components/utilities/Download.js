import html2canvas from "html2canvas";

export const Download = async (polaroidRef) => {
  const canvas = await html2canvas(polaroidRef.current, {
    backgroundColor: "#fff", // optional
    useCORS: true, // handles cross-origin images
  });

  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/png")
  );
  const file = new File([blob], "polaroid.png", { type: "image/png" });

  // iOS Safari doesn't reliably support the <a download> trick below; it
  // has no general downloads folder, so images have to go through the
  // native share sheet's "Save Image" option to reach Photos.
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      return;
    } catch (error) {
      if (error.name === "AbortError") return; // user cancelled the share sheet
    }
  }

  const link = document.createElement("a");
  link.download = "polaroid.png";
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
};
