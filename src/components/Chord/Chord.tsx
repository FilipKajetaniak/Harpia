import React, { FC, MouseEvent, useState } from "react";

import { notes as NotesBank } from "constants/notes";
import Soundbank from "soundbank/soundbank";
import Scale from "scales/Scale";
import { eMinor } from "constants/scales";

import "./Chord.scss";

interface PlayButtonProps {
  octave: string;
  step: number;
  intervals: number[];
}

const soundbank = new Soundbank(NotesBank);
const scale = new Scale(eMinor);

export const ChordComponent: FC<PlayButtonProps> = () => {
  const [step, setStep] = useState(1);
  const [octave, setOctave] = useState(4);
  const [intervals, setIntervals] = useState([1, 3, 5, 11]);
  const notes = scale.getNotesFromSteps(octave, step, intervals);

  const play = (event: MouseEvent<HTMLDivElement>) => {
    soundbank.play(notes);
  };
  const stop = (event: MouseEvent<HTMLDivElement>) => {
    soundbank.stop(notes);
  };
  return (
    <div className="chord-wrapper">
      <div onMouseDown={play} onMouseUp={stop} className="play-button">
        {step}
      </div>
      <div className="up-button" onClick={() => setStep(step + 1)}>
        +1
      </div>
      <div className="down-button" onClick={() => setStep(step - 1)}>
        -1
      </div>
    </div>
  );
};
