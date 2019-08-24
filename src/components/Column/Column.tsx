import React, { FC, useState, MouseEvent } from "react";

import { ChordComponent as Chord } from "components/Chord/Chord";

import "./Column.sass";
import { Markers } from "./components/Markers";

const NUMBER_OF_OCTAVES = 4;
const NUMBER_OF_STEPS = 7;

const VOICINGS = [
  {
    intervals: [1, 3, 5],
    name: "triad"
  },
  {
    intervals: [1, 10, 5],
    name: "triad inverted 1"
  },
  {
    intervals: [3, 8, 12],
    name: "triad inverted 2"
  },
  {
    intervals: [1, 2, 5],
    name: "sus2"
  },
  {
    intervals: [1, 4, 5],
    name: "sus4"
  },
  {
    intervals: [1, 3, 5, 7],
    name: "seventh"
  },
  {
    intervals: [1, 5, 9, 14],
    name: "perfect fifths"
  },
  {
    intervals: [1, 4, 7, 10],
    name: "fourths"
  }
];

export const Column: FC = () => {
  const [intervals, setIntervals] = useState(VOICINGS[0]);
  const nextVoicing = (event: MouseEvent<HTMLDivElement>) => {
    const indexOfCurrentVoicing = VOICINGS.indexOf(intervals);

    if (indexOfCurrentVoicing + 1 === VOICINGS.length) {
      setIntervals(VOICINGS[0]);
      return;
    }
    setIntervals(VOICINGS[indexOfCurrentVoicing + 1]);
  };
  return (
    <div className="column">
      <div className="chord-slider" />
      <Markers octaves={NUMBER_OF_OCTAVES} steps={NUMBER_OF_STEPS} />
      <Chord voicing={intervals.intervals} />
    </div>
  );
};
