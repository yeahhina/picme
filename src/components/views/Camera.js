import Countdown from "react-countdown";
import Webcam from "react-webcam";
import useSound from "use-sound";
import Sound from "../../assets/sound/camera_sound.mp3";

function TimerWithSound() {
  const [play] = useSound(Sound);
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      play();
    } else {
      return <span>{seconds}</span>;
    }
  };

  return <Countdown date={Date.now() + 5000} renderer={renderer} />;
}
function Camera() {
  return (
    <div className="camera">
      <p>1,2,3 and POSE!</p>
      <Webcam />
      <p>{TimerWithSound()}</p>
    </div>
  );
}
export default Camera;
