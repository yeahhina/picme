import Countdown from "react-countdown";
import useSound from "use-sound";
import Sound from "../../assets/sound/camera_sound.mp3";
import { useRef, useState } from "react";
const TimerWithSound = ({ onCycle, onComplete }) => {
  const [play] = useSound(Sound);
  const [date, setDate] = useState(Date.now() + 5000);
  const [key, setKey] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [showPicMe, setShowPicMe] = useState(false);
  const countRef = useRef(0);
  const handleComplete = () => {
    setShowPicMe(true);
    play();
    onCycle();
    setTimeout(() => {
      countRef.current += 1;
      if (countRef.current < 4) {
        setDate(Date.now() + 5000);
        setKey((prevKey) => prevKey + 1);
        setShowPicMe(false);
      } else {
        setShowPicMe(false);
        setIsDone(true);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 1000);
  };

  const renderer = ({ seconds, completed }) => {
    if (completed && showPicMe) {
      return <span>Pic Me!</span>;
    } else if (completed && isDone) {
      return <span>Done!</span>;
    }
    return <span>{seconds}</span>;
  };
  return (
    <Countdown
      key={key}
      date={date}
      renderer={renderer}
      onComplete={handleComplete}
    />
  );
};
export default TimerWithSound;
