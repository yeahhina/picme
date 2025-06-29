import Webcam from "react-webcam";
import { useCallback, useRef, useEffect, useState, use } from "react";
import { setCapturedImages } from "./CaptureImages";

const WebCamera = ({ captureRequest, onLoaded }) => {
  const webCameraRef = useRef(null);
  const [imgList, setImgList] = useState([]);

  const capture = useCallback(() => {
    const imageSrc = webCameraRef.current.getScreenshot({
      width: 256,
      height: 173,
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
      <Webcam ref={webCameraRef} onUserMedia={() => onLoaded(true)} />
    </div>
  );
};

export default WebCamera;
