import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();

  const circleScale = interpolate(frame, [0, 240], [0.65, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });

  const circleRotation = interpolate(frame, [0, 240], [0, 35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [0, 50], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#dff4d0",
        overflow: "hidden",
      }}
    >
      {/* Large green circular form */}
      <div
        style={{
          position: "absolute",
          width: 720,
          height: 720,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: `
            translate(-50%, -50%)
            scale(${circleScale})
            rotate(${circleRotation}deg)
          `,
          background:
            "radial-gradient(circle at 35% 30%, #dfff35 0%, #a8df35 22%, #45a875 55%, #08755f 100%)",
          boxShadow: "0 25px 80px rgba(0,90,70,0.25)",
        }}
      />

      {/* Yellow inner circle */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at 40% 35%, #f4ff72, #d5ee32 55%, #a4c928)",
          boxShadow: "0 0 60px rgba(220,255,50,0.45)",
        }}
      />

      {/* Main text */}
      <div
        style={{
          position: "absolute",
          left: 130,
          top: 180,
          opacity,
          transform: `translateY(${textY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#075a4b",
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 400,
            letterSpacing: "-1px",
          }}
        >
          From concept
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-4px",
          }}
        >
          to reality.
        </div>
      </div>

      {/* Small floating yellow element */}
      <div
        style={{
          position: "absolute",
          right: 150,
          top: 120,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#eaff18",
          boxShadow: "0 0 30px rgba(234,255,24,0.7)",
          transform: `translateY(${Math.sin(frame / 12) * 15}px)`,
        }}
      />

      {/* Decorative green pill */}
      <div
        style={{
          position: "absolute",
          left: 120,
          bottom: 100,
          width: 180,
          height: 45,
          borderRadius: 30,
          background: "#0b8068",
          opacity: 0.9,
        }}
      />
    </AbsoluteFill>
  );
};