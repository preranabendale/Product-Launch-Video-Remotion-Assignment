import React from "react";
import { useCurrentFrame } from "remotion";
import { fadeIn, slideUp, scaleIn } from "../utils/animations";

type AnimatedTitleProps = {
  text: string;
  startFrame?: number;
  fontSize?: number;
};

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  startFrame = 0,
  fontSize = 100,
}) => {
  const frame = useCurrentFrame();

  const opacity = fadeIn(frame, startFrame, 120);
const translateY = slideUp(frame, startFrame, 120, 350);
const scale = scaleIn(frame, startFrame, 120, 0.97);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        color: "#ffffff",
        fontSize,
        fontWeight: 700,
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        letterSpacing: "-2px",
        textShadow: "0 0 30px rgba(255,255,255,0.3)",
      }}
    >
      {text}
    </div>
  );
};