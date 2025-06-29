import { frameImages, stickerImages } from "../utilities/Assets";
import { getCapturedImages } from "../utilities/CaptureImages";
import { useState } from "react";
import "./Editor.css";
function Editor() {
  const capturedImages = getCapturedImages();
  const defaultFrame = frameImages[0];
  const [selectedFrame, setSelectedFrame] = useState(defaultFrame);
  const [selectedSticker, setSelectedSticker] = useState(null);
  const handleStickerChange = (sticker) => {
    setSelectedSticker(sticker);
  };
  const handleFrameChange = (frame) => {
    setSelectedFrame(frame);
  };
  return (
    <div className="editor">
      <div className="polaroid">
        <img className="frame" src={selectedFrame.image} alt="Purple Frame" />{" "}
        <div className="capturedImages">
          {capturedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Captured ${index + 1}`}
              className="capturedImage"
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
          <button>NATURAL</button>
          <button>BLACK AND WHITE</button>
          <button>VINTAGE</button>
        </div>
        <button class="download">DOWNLOAD</button>
      </div>
    </div>
  );
}
export default Editor;
