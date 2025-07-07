import Webcam from "react-webcam";
import { useCallback, useRef, useEffect, useState, use } from "react";
import { setCapturedImages } from "./CaptureImages";
import "./Webcam.css";
import { isMobile } from "react-device-detect";

const WebCamera = ({ captureRequest, onLoaded }) => {
  const webCameraRef = useRef(null);
  const [imgList, setImgList] = useState([]);
  const videoConstraints = isMobile
    ? { width: 700, height: 1028, facingMode: "user" }
    : { width: 1028, height: 700, facingMode: "user" };

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
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default WebCamera;
