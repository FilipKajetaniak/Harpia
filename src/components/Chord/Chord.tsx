import React, { FC, MouseEvent, useState } from "react";

import { notes as NotesBank } from "constants/notes";
import Soundbank from "soundbank/soundbank";
import Scale from "scales/Scale";
import { cMajor } from "constants/scales";

import "./Chord.scss";

const soundbank = new Soundbank(NotesBank);
const scale = new Scale(cMajor);

export const ChordComponent: FC = () => {
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
  const increaseOctave = () => {
    if (octave === 6) {
      return;
    }
    setOctave(octave + 1);
  };

  const decreaseOctave = () => {
    if (octave === 3) {
      return;
    }
    setOctave(octave - 1);
  };
  const increaseStep = (event: MouseEvent<HTMLDivElement>) => {
    if (step === cMajor.length) {
      increaseOctave();
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };
  const decreaseStep = (event: MouseEvent<HTMLDivElement>) => {
    if (step === 1) {
      decreaseOctave();
      setStep(cMajor.length);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <div className="chord-wrapper">
      <div onMouseDown={play} onMouseUp={stop} className="play-button">
        {step}
      </div>
      <div className="up-button" onClick={increaseStep}>
        +1
      </div>
      <div className="down-button" onClick={decreaseStep}>
        -1
      </div>
    </div>
  );
};
