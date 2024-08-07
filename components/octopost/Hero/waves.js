import React from "react";
import Wavify from "react-wavify";

const Waves = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      <Wavify
        fill="#A1C4FD"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
        className="absolute bottom-0 w-full"
      />
      <Wavify
        fill="#C2E9FB"
        paused={false}
        options={{
          height: 30,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default Waves;
