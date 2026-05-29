import { useEffect, useState } from "react";
import BrainCircuitMark from "./BrainCircuitMark";

type IntroOverlayProps = {
  onFinish: () => void;
};

export default function IntroOverlay({ onFinish }: IntroOverlayProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 2300);
    const finishTimer = window.setTimeout(onFinish, 3000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`intro-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="intro-noise" />
      <div className="intro-content">
        <BrainCircuitMark animated />
        <p>human potential + technology</p>
      </div>
    </div>
  );
}
