import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [0, 45], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const rotate = interpolate(frame, [0, 240], [-2, 2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(50,180,120,0.25), transparent 68%)",
          filter: "blur(30px)",
        }}
      />

      
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 90,
          opacity,
          transform: `translateY(${y}px)`,
          color: "#efff50",
          fontSize: 55,
          fontWeight: 700,
          letterSpacing: "-2px",
        }}
      >
        Built to move ideas forward.
      </div>

   
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 245,
          width: 430,
          height: 430,
          borderRadius: 32,
          background: "#dff2d4",
          transform: `rotate(${rotate}deg)`,
          opacity,
          padding: 28,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: 240,
            borderRadius: 22,
            background:
              "linear-gradient(145deg, #b9e9b2, #62b993)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "#eaff22",
              right: -35,
              top: -35,
              boxShadow: "0 0 35px rgba(234,255,34,0.5)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 35,
              bottom: 35,
              width: 170,
              height: 55,
              borderRadius: 28,
              background: "#075a4b",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 25,
            fontSize: 30,
            fontWeight: 800,
            color: "#075a4b",
          }}
        >
          Strategy
        </div>

        <div
          style={{
            marginTop: 10,
            fontSize: 18,
            color: "#397466",
          }}
        >
          Clear thinking.
        </div>
      </div>

      
      <div
        style={{
          position: "absolute",
          left: 600,
          top: 245,
          width: 430,
          height: 430,
          borderRadius: 32,
          background: "#e9f5de",
          transform: `rotate(${-rotate}deg)`,
          opacity,
          padding: 28,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: 240,
            borderRadius: 22,
            background: "#075a4b",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 220,
              height: 220,
              borderRadius: "50%",
              left: 110,
              top: 15,
              background:
                "radial-gradient(circle at 35% 30%, #efff45, #78b86b 70%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: "50%",
              left: 35,
              bottom: 30,
              background: "#eaff20",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 25,
            fontSize: 30,
            fontWeight: 800,
            color: "#075a4b",
          }}
        >
          Design
        </div>

        <div
          style={{
            marginTop: 10,
            fontSize: 18,
            color: "#397466",
          }}
        >
          Made to connect.
        </div>
      </div>

    
      <div
        style={{
          position: "absolute",
          right: 130,
          top: 130,
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "#efff20",
          boxShadow: "0 0 25px rgba(239,255,32,0.8)",
          transform: `translateY(${Math.sin(frame / 10) * 12}px)`,
        }}
      />
    </AbsoluteFill>
  );
};