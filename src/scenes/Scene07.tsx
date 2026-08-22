import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene07: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [0, 50], [70, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: "#eff6e7",
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
          right: -180,
          top: -160,
          background:
            "radial-gradient(circle, rgba(120,190,100,0.28), transparent 68%)",
          filter: "blur(25px)",
        }}
      />

   
      <div
        style={{
          position: "absolute",
          left: 150,
          top: 300,
          opacity,
          transform: `translateY(${y}px)`,
          color: "#075a4b",
          fontSize: 54,
          lineHeight: 1.15,
          letterSpacing: "-2px",
        }}
      >
        Because great design
        <br />
        <span
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#075a4b",
          }}
        >
          isn't just how it looks.
        </span>
      </div>

  
      <div
        style={{
          position: "absolute",
          right: 180,
          bottom: 180,
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "#eaff20",
          boxShadow: "0 0 35px rgba(234,255,32,0.6)",
          transform: `rotate(${frame * 1.5}deg)`,
        }}
      />

      
      <div
        style={{
          position: "absolute",
          right: 120,
          top: 170,
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "3px solid #69a78c",
          transform: `scale(${
            1 + Math.sin(frame / 15) * 0.05
          })`,
        }}
      />

      
      <div
        style={{
          position: "absolute",
          left: 120,
          bottom: 110,
          display: "flex",
          gap: 12,
        }}
      >
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: item === 4 ? "#eaff20" : "#72a997",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};