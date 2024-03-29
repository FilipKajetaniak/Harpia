import React, { FC, ReactElement, useEffect, useState } from "react";

import "./Markers.sass";

interface MarkerProps {
  octaves: number;
  steps: number;
}

export const Markers: FC<MarkerProps> = ({ octaves, steps }) => {
  const [markers, setMarkers] = useState<ReactElement[]>();

  const createStepMarkers = () => {
    const elements: ReactElement[] = [];
    for (let i = 0; i < steps; i++) {
      elements.push(
        <div
          key={i}
          className="step-marker"
          style={{ height: `${Math.floor(10000 / steps) / 100}%` }}
        />
      );
    }
    return elements;
  };

  const createOctaveMarkers = () => {
    const elements: ReactElement[] = [];
    for (let i = 0; i < octaves; i++) {
      elements.push(
        <div
          key={i}
          className="octave-marker"
          style={{ height: `${Math.floor(10000 / octaves) / 100}%` }}
        >
          {createStepMarkers()}
        </div>
      );
    }
    setMarkers(elements);
  };

  useEffect(() => {
    createOctaveMarkers();
  }, ["octaves", "steps"]);

  return (
    <>
      <div className="chord-slider" />
      <div className="column-markers">{markers}</div>
    </>
  );
};
