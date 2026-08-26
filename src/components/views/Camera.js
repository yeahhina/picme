import WebCamera from "../utilities/Webcamera";
import TimerWithSound from "../utilities/Timer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Camera.css";

function Camera() {
  const [triggerCapture, setTriggerCapture] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const navigate = useNavigate();
  const handleCapture = () => {
    setTriggerCapture(true);
    setTimeout(() => {
      setTriggerCapture(false);
    }, 100); // Adjust the timeout as needed
  };
  const handleComplete = () => {
    navigate("/editor");
  };
  return (
    <div className="camera">
      <p>1,2,3 and POSE!</p>
      <WebCamera
        captureRequest={triggerCapture}
        onLoaded={setLoaded}
        onError={(error) =>
          setCameraError(
            error.name === "NotAllowedError"
              ? "Camera access was denied. Please allow camera access in your browser settings and reload the page."
              : "Unable to access the camera on this device. Please make sure you're using Safari (not an in-app browser) and try again."
          )
        }
      />
      {cameraError ? <p className="cameraError">{cameraError}</p> : null}
      {loaded ? (
        <TimerWithSound onCycle={handleCapture} onComplete={handleComplete} />
      ) : null}
    </div>
  );
}
export default Camera;
