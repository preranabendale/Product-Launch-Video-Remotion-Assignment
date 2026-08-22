import { Easing, interpolate } from "remotion";

export const fadeIn = (
  frame: number,
  startFrame: number,
  duration: number
) => {
  return interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );
};

export const slideUp = (
  frame: number,
  startFrame: number,
  duration: number,
  distance = 80
) => {
  return interpolate(
    frame,
    [startFrame, startFrame + duration],
    [distance, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );
};

export const scaleIn = (
  frame: number,
  startFrame: number,
  duration: number,
  from = 0.9
) => {
  return interpolate(
    frame,
    [startFrame, startFrame + duration],
    [from, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );
};