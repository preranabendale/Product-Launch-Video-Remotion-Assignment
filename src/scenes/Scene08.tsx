import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene08: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [0, 55], [70, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const scale = interpolate(frame, [0, 100], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: "#e9f5df",
        overflow: "hidden",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
   
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          right: -230,
          top: -220,
          background:
            "radial-gradient(circle, #c8eaa4, #8fcf91 55%, transparent 72%)",
          transform: `scale(${scale})`,
          opacity,
        }}
      />

      
      <div
        style={{
          position: "absolute",
          left: 140,
          top: 150,
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "#eaff20",
          boxShadow: "0 0 40px rgba(234,255,32,0.55)",
          transform: `translateY(${Math.sin(frame / 10) * 12}px)`,
        }}
      />

   
      <div
        style={{
          position: "absolute",
          left: 150,
          top: 350,
          opacity,
          transform: `translateY(${y}px)`,
          color: "#075a4b",
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Ready to
        </div>

        <div
          style={{
            fontSize: 100,
            fontWeight: 800,
            letterSpacing: "-6px",
            lineHeight: 0.95,
            color: "#075a4b",
          }}
        >
          grow?
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 155,
          bottom: 130,
          width: interpolate(frame, [0, 80], [0, 240], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          height: 6,
          borderRadius: 6,
          background: "#eaff20",
        }}
      />

      
      <div
        style={{
          position: "absolute",
          right: 170,
          bottom: 120,
          width: 170,
          height: 170,
          borderRadius: "50%",
          border: "2px solid #62a58c",
          transform: `rotate(${frame * 0.6}deg)`,
          opacity: 0.8,
        }}
      />
    </AbsoluteFill>
  );
};