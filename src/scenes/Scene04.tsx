import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 120], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#003d34",
        overflow: "hidden",
      }}
    >
      {/* Soft green glow */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(120,255,100,0.25), transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      {/* Dashboard / UI card */}
      <div
        style={{
          position: "absolute",
          width: 980,
          height: 560,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity,
          borderRadius: 28,
          background: "#f1f7e9",
          boxShadow: "0 35px 90px rgba(0,0,0,0.4)",
          padding: 28,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#075a4b",
            }}
          >
            Dashboard
          </div>

          <div
            style={{
              width: 120,
              height: 34,
              borderRadius: 18,
              background: "#d7efb5",
            }}
          />
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 25,
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                flex: 1,
                height: 100,
                borderRadius: 18,
                background:
                  item === 2 ? "#dfff45" : "#dcebd7",
                padding: 18,
              }}
            >
              <div
                style={{
                  width: "45%",
                  height: 12,
                  borderRadius: 10,
                  background: "#77a99a",
                  marginBottom: 18,
                }}
              />

              <div
                style={{
                  width: "65%",
                  height: 25,
                  borderRadius: 8,
                  background: "#075a4b",
                }}
              />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          style={{
            height: 230,
            borderRadius: 20,
            background: "#e4efdc",
            padding: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#075a4b",
            }}
          >
            Growth
          </div>

          <svg
            width="100%"
            height="170"
            viewBox="0 0 800 170"
            style={{
              position: "absolute",
              left: 20,
              bottom: 5,
            }}
          >
            <path
              d="M10 145 C120 130 150 110 230 120 C320 135 350 70 440 88 C520 105 570 35 650 55 C710 70 750 30 790 20"
              fill="none"
              stroke="#0a8068"
              strokeWidth="7"
              strokeLinecap="round"
            />

            <circle cx="650" cy="55" r="10" fill="#eaff20" />
            <circle cx="790" cy="20" r="10" fill="#eaff20" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};