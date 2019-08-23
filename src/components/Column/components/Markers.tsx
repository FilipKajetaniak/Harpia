import React, { FC, ReactElement, useEffect, useState } from "react";

interface MarkerProps {
  octaves: number;
  steps: number;
}

export const Markers: FC<MarkerProps> = ({ octaves, steps }) => {
  const [markers, setMarkers] = useState<ReactElement[]>();

  const createStepMarkers = () => {
    const elements: ReactElement[] = [];
    for (let i = 0; i < steps; i++) {
      elements.push(<div key={i} className="step-marker" />);
    }
    return elements;
  };

  const createOctaveMarkers = () => {
    const elements: ReactElement[] = [];
    for (let i = 0; i < octaves; i++) {
      elements.push(
        <div key={i} className="octave-marker">
          {createStepMarkers()}
        </div>
      );
    }
    setMarkers(elements);
  };

  useEffect(() => {
    createOctaveMarkers();
  }, ["octaves", "steps"]);

  return <div className="column-markers">{markers}</div>;
};
