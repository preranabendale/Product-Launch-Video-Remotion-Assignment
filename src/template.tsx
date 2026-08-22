import React from "react";
import { AbsoluteFill, Sequence } from "remotion";

import { Scene01 } from "./scenes/Scene01";
import { Scene02 } from "./scenes/Scene02";
import { Scene03 } from "./scenes/Scene03";
import { Scene04 } from "./scenes/Scene04";
import { Scene05 } from "./scenes/Scene05";
import { Scene06 } from "./scenes/Scene06";
import { Scene07 } from "./scenes/Scene07";
import { Scene08 } from "./scenes/Scene08";

export const ProductLaunchTemplate: React.FC = () => {
  return (
    <AbsoluteFill>
      
      <Sequence from={0} durationInFrames={300}>
        <Scene01 />
      </Sequence>

      
      <Sequence from={300} durationInFrames={180}>
        <Scene02 />
      </Sequence>

      
      <Sequence from={480} durationInFrames={240}>
        <Scene03 />
      </Sequence>


      <Sequence from={720} durationInFrames={120}>
        <Scene04 />
      </Sequence>

      <Sequence from={840} durationInFrames={240}>
        <Scene05 />
      </Sequence>

     
      <Sequence from={1080} durationInFrames={120}>
        <Scene06 />
      </Sequence>

      
      <Sequence from={1200} durationInFrames={120}>
        <Scene07 />
      </Sequence>

     
      <Sequence from={1320} durationInFrames={100}>
        <Scene08 />
      </Sequence>
    </AbsoluteFill>
  );
};