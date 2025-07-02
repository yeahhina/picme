import html2canvas from "html2canvas";

export const Download = (polaroidRef) => {
  html2canvas(polaroidRef.current, {
    backgroundColor: "#fff", // optional
    useCORS: true, // handles cross-origin images
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "polaroid.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};
