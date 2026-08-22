import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

type SceneTransitionProps = {
  duration?: number;
};

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  duration = 20,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, duration / 2, duration],
    [0, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: "#ffffff",
        opacity,
        pointerEvents: "none",
      }}
    />
  );
};