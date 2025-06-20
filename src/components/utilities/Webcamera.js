import React from "react";
import Webcam from "react-webcam";
import Countdown from "react-countdown";
import useSound from "use-sound";
import Sound from "../../assets/sound/camera_sound.mp3";

const TimerWithSound = () => {
  const [play] = useSound(Sound);

  const handleComplete = () => {
    play();
  };

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return null; // Stop showing countdown after it's done
    }
    return <span>{seconds}</span>;
  };

  return (
    <Countdown
      date={Date.now() + 5000}
      renderer={renderer}
      onComplete={handleComplete}
    />
  );
};

const WebCamera = () => {
  return (
    <div className="webCameraAndTimer">
      <Webcam />
      <TimerWithSound />
    </div>
  );
};

export default WebCamera;
