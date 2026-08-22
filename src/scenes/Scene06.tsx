import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene06: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [0, 45], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const lineWidth = interpolate(frame, [25, 100], [0, 620], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: "#003b32",
        overflow: "hidden",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      
      <div
        style={{
          position: "absolute",
          width: 850,
          height: 850,
          borderRadius: "50%",
          left: "55%",
          top: "45%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(50,180,120,0.22), transparent 68%)",
          filter: "blur(35px)",
        }}
      />

    
      <div
        style={{
          position: "absolute",
          left: 150,
          top: 330,
          opacity,
          transform: `translateY(${y}px)`,
          color: "#efff55",
          fontSize: 62,
          lineHeight: 1.12,
          letterSpacing: "-2px",
          fontWeight: 500,
        }}
      >
        All crafted to
        <br />
        <span style={{ fontWeight: 800 }}>move people forward.</span>
      </div>

      
      <div
        style={{
          position: "absolute",
          left: 155,
          top: 535,
          width: lineWidth,
          height: 5,
          borderRadius: 5,
          background: "#eaff20",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 150,
          top: 190,
          width: 250,
          height: 250,
          borderRadius: "50%",
          border: "2px solid rgba(210,255,70,0.55)",
          transform: `rotate(${frame * 0.35}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 225,
          top: 265,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "#eaff20",
          boxShadow: "0 0 40px rgba(234,255,32,0.45)",
          transform: `scale(${
            1 + Math.sin(frame / 12) * 0.08
          })`,
        }}
      />
    </AbsoluteFill>
  );
};