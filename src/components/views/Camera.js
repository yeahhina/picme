import WebCamera from "../utilities/Webcamera";
import TimerWithSound from "../utilities/Timer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Camera() {
  const [triggerCapture, setTriggerCapture] = useState(false);
  const [loaded, setLoaded] = useState(false);
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
      <WebCamera captureRequest={triggerCapture} onLoaded={setLoaded} />
      {loaded ? (
        <TimerWithSound onCycle={handleCapture} onComplete={handleComplete} />
      ) : null}
    </div>
  );
}
export default Camera;
