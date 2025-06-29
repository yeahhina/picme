import { frameImages, stickerImages } from "../utilities/Assets";
import { getCapturedImages } from "../utilities/CaptureImages";
import { useState, useRef } from "react";
import "./Editor.css";
import html2canvas from "html2canvas";
function Editor() {
  const capturedImages = getCapturedImages();
  const defaultFrame = frameImages[0];
  const [selectedFrame, setSelectedFrame] = useState(defaultFrame);
  const [selectedSticker, setSelectedSticker] = useState(null);
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);
  const [isVintage, setIsVintage] = useState(false);
  const polaroidRef = useRef(null);
  const handleFilterChange = (filter) => {
    if (filter === "blackAndWhite") {
      setIsBlackAndWhite(true);
      setIsVintage(false);
    } else if (filter === "vintage") {
      setIsVintage(true);
      setIsBlackAndWhite(false);
    } else {
      setIsBlackAndWhite(false);
      setIsVintage(false);
    }
  };
  const handleStickerChange = (sticker) => {
    setSelectedSticker(sticker);
  };
  const handleFrameChange = (frame) => {
    setSelectedFrame(frame);
  };
  const takeScreenshot = () => {
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

  return (
    <div className="editor">
      <div className="polaroid" ref={polaroidRef}>
        <img className="frame" src={selectedFrame.image} alt="Purple Frame" />{" "}
        <div className="capturedImages">
          {capturedImages.map((image) => (
            <img
              src={image}
              className={`capturedImage ${
                isBlackAndWhite ? "blackAndWhite" : ""
              } ${isVintage ? "vintage" : ""}`}
            />
          ))}
        </div>
        {selectedSticker ? (
          <img className="sticker" src={selectedSticker.image} />
        ) : null}
      </div>
      <div className="rightPanel">
        <div className="editBox">
          <p>FRAME</p>
          {frameImages.map((frame) => (
            <button key={frame.name} onClick={() => handleFrameChange(frame)}>
              {frame.name.toUpperCase()}
            </button>
          ))}
          <p>STICKERS</p>
          {stickerImages.map((sticker) => (
            <button
              key={sticker.name}
              onClick={() => handleStickerChange(sticker)}
            >
              {sticker.name.toUpperCase()}
            </button>
          ))}

          <p>FILTER</p>
          <button onClick={() => handleFilterChange("")}>NATURAL</button>
          <button onClick={() => handleFilterChange("blackAndWhite")}>
            BLACK AND WHITE
          </button>
          <button onClick={() => handleFilterChange("vintage")}>VINTAGE</button>
        </div>
        <button class="download" onClick={takeScreenshot}>
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}
export default Editor;
