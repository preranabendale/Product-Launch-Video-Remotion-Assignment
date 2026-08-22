import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

const GreenOrb = ({
  left,
  top,
  size,
  delay = 0,
}: {
  left: string;
  top: string;
  size: number;
  delay?: number;
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame - delay,
    [0, 90, 180],
    [0.92, 1.08, 0.98],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.ease),
    },
  );

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        borderRadius: "50%",
        border: "3px solid rgba(210, 255, 70, 0.65)",
        boxShadow:
          "0 0 35px rgba(180,255,70,0.35), inset 0 0 35px rgba(0,255,180,0.12)",
        transform: `scale(${scale})`,
      }}
    />
  );
};

const Glow = ({
  left,
  top,
  size,
}: {
  left: string;
  top: string;
  size: number;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(0,255,170,0.55) 0%, rgba(0,180,120,0.18) 40%, transparent 72%)",
        filter: "blur(18px)",
      }}
    />
  );
};

const Flower = ({
  left,
  top,
  size,
}: {
  left: string;
  top: string;
  size: number;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#eaff00",
        boxShadow: "0 0 18px rgba(234,255,0,0.7)",
        transform: "rotate(45deg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "45%",
          height: "45%",
          borderRadius: "50%",
          background: "#fff45c",
          left: "27%",
          top: "27%",
        }}
      />
    </div>
  );
};

const textStyle: React.CSSProperties = {
  position: "absolute",
  color: "#efff8a",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontWeight: 500,
  letterSpacing: "-1px",
  whiteSpace: "nowrap",
};

export const Scene01: React.FC = () => {
  const frame = useCurrentFrame();


  const bgX = interpolate(frame, [0, 300], [0, -80], {
    extrapolateRight: "clamp",
  });


  const firstOpacity = interpolate(frame, [0, 15, 75, 95], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ideaOpacity = interpolate(frame, [82, 98, 125, 140], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sketchOpacity = interpolate(
    frame,
    [132, 148, 175, 190],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const questionOpacity = interpolate(
    frame,
    [180, 195, 220, 235],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const growOpacity = interpolate(frame, [225, 242, 300], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background:
          "radial-gradient(circle at 55% 65%, #008d70 0%, #005846 25%, #003c32 55%, #002b27 100%)",
      }}
    >
      
      <div
        style={{
          position: "absolute",
          inset: -100,
          transform: `translateX(${bgX}px)`,
          background:
            "radial-gradient(circle at 25% 25%, rgba(0,255,170,0.16), transparent 28%), radial-gradient(circle at 80% 65%, rgba(0,255,180,0.18), transparent 30%)",
          filter: "blur(30px)",
        }}
      />

      <Glow left="-8%" top="55%" size={500} />
      <Glow left="70%" top="-10%" size={420} />
      <Glow left="48%" top="55%" size={500} />

      <GreenOrb left="-10%" top="-25%" size={600} />
      <GreenOrb left="42%" top="-35%" size={700} delay={20} />
      <GreenOrb left="68%" top="20%" size={520} delay={40} />
      <GreenOrb left="18%" top="55%" size={500} delay={60} />

      
      <div
        style={{
          position: "absolute",
          width: 850,
          height: 850,
          borderRadius: "50%",
          border: "1px solid rgba(150,255,120,0.35)",
          left: "35%",
          top: "-40%",
          transform: `rotate(${frame * 0.08}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          borderRadius: "50%",
          border: "1px solid rgba(200,255,100,0.35)",
          left: "-5%",
          top: "35%",
          transform: `rotate(${-frame * 0.06}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "68%",
          top: "17%",
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#efff00",
          boxShadow: "0 0 14px #efff00",
          transform: `translateY(${Math.sin(frame / 10) * 15}px)`,
        }}
      />

      <Flower left="73%" top="18%" size={20} />
      <Flower left="82%" top="8%" size={13} />
      <Flower left="61%" top="29%" size={16} />

      <div
        style={{
          ...textStyle,
          left: "16%",
          top: "39%",
          fontSize: 34,
          opacity: firstOpacity,
        }}
      >
        Everything starts with a{" "}
        <span
          style={{
            background: "#4b987e",
            borderRadius: 18,
            padding: "5px 18px",
            color: "#efff70",
            boxShadow: "0 0 18px rgba(100,255,100,0.2)",
          }}
        >
          Spark ✳
        </span>
      </div>

      <div
        style={{
          ...textStyle,
          left: "45%",
          top: "46%",
          fontSize: 42,
          opacity: ideaOpacity,
        }}
      >
        Idea
      </div>

      <div
        style={{
          ...textStyle,
          left: "47%",
          top: "44%",
          fontSize: 42,
          fontWeight: 700,
          opacity: sketchOpacity,
        }}
      >
        Sketch
      </div>

      <div
        style={{
          ...textStyle,
          left: "48%",
          top: "46%",
          fontSize: 42,
          opacity: questionOpacity,
        }}
      >
        Question
      </div>

      <div
        style={{
          ...textStyle,
          left: "8%",
          bottom: "12%",
          fontSize: 30,
          opacity: growOpacity,
        }}
      >
        What if this could{" "}
        <span
          style={{
            color: "#eaff00",
            fontWeight: 700,
          }}
        >
          grow
        </span>{" "}
        ?
      </div>
    </AbsoluteFill>
  );
};