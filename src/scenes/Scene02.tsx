import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();

  
  const scale = interpolate(frame, [0, 180], [1.08, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const imageOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [15, 55], [70, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const textOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const shapeX = interpolate(frame, [0, 180], [-80, 40], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });

  const shapeRotation = interpolate(frame, [0, 180], [-20, 8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#dff5d0",
        overflow: "hidden",
      }}
    >
     
      <Img
  src={staticFile("assets/scene02-background.jpg")}
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 1,
    transform: `scale(${scale})`,
  }}
/>

     
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(0,70,55,0.12), rgba(200,255,70,0.08))",
          mixBlendMode: "screen",
        }}
      />

      
      <div
        style={{
          position: "absolute",
          left: 220,
          top: 355,
          width: 300,
          height: 85,
          borderRadius: 12,
          background:
            "linear-gradient(90deg, #008b72 0%, #b9ee22 100%)",
          transform: `translateX(${shapeX}px) rotate(${shapeRotation}deg)`,
          opacity: 0.92,
          filter: "blur(0.3px)",
        }}
      />

     
      <div
        style={{
          position: "absolute",
          left: 250,
          top: 260,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            lineHeight: 1,
            color: "#eaff20",
            letterSpacing: "-3px",
          }}
        >
          Turning
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1,
            color: "#ffffff",
            letterSpacing: "-3px",
          }}
        >
          Ideas
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 72,
            fontWeight: 400,
            lineHeight: 1,
            color: "#eaff20",
            letterSpacing: "-3px",
          }}
        >
          into{" "}
          <span style={{ fontWeight: 800 }}>
            experiences.
          </span>
        </div>
      </div>

      
      <div
        style={{
          position: "absolute",
          right: 170,
          bottom: 85,
          width: 65,
          height: 65,
          borderRadius: "45% 55% 45% 55%",
          background:
            "linear-gradient(135deg, #efff00, #0a9b70)",
          boxShadow: "0 0 25px rgba(190,255,30,0.55)",
          transform: `rotate(${frame * 1.5}deg)`,
        }}
      />
    </AbsoluteFill>
  );
};