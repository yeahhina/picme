import Webcam from "react-webcam";
import { useCallback, useRef, useEffect, useState, use } from "react";
import { setCapturedImages } from "./CaptureImages";
import "./Webcam.css";

const WebCamera = ({ captureRequest, onLoaded }) => {
  const webCameraRef = useRef(null);
  const [imgList, setImgList] = useState([]);

  const capture = useCallback(() => {
    const imageSrc = webCameraRef.current.getScreenshot({
      mimeType: "image/png",
    });
    setImgList((prevList) => [...prevList, imageSrc]);
  }, [webCameraRef]);

  useEffect(() => {
    captureRequest ? capture() : console.log("failed");
    if (imgList.length === 4) {
      setCapturedImages(imgList);
    }
  }, [captureRequest, capture]);
  return (
    <div className="webCameraAndTimer">
      <Webcam
        className="webcamView"
        ref={webCameraRef}
        onUserMedia={() => onLoaded(true)}
        screenshotFormat="image/png"
      />
    </div>
  );
};

export default WebCamera;
