import React, { FC } from "react";

import { ChordComponent as Chord } from "components/Chord/Chord";

import "./Column.sass";
import { Markers } from "./components/Markers";

const NUMBER_OF_OCTAVES = 4;
const NUMBER_OF_STEPS = 7;

export const Column: FC = () => {
  return (
    <div className="column">
      <div className="chord-slider" />
      <Markers octaves={NUMBER_OF_OCTAVES} steps={NUMBER_OF_STEPS} />
      <Chord voicing={[1, 3, 5]} />
    </div>
  );
};
