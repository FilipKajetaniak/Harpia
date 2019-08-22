import React, { FC, MouseEvent, useState } from "react";

import Soundbank from "soundbank/soundbank";
import Scale from "scales/Scale";
import scales from "constants/scales";

import "./Chord.sass";

const selectedScale = scales.cMajor;
const soundbank = new Soundbank();
const scale = new Scale(selectedScale);

export const ChordComponent: FC = () => {
  const [step, setStep] = useState(1);
  const [offsetTop, setOffsetTop] = useState(50);
  const [octave, setOctave] = useState(4);
  const [intervals, setIntervals] = useState([1, 5, 9, 12]);
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
    setOffsetTop(offsetTop - 3.75);
    if (step === selectedScale.length) {
      increaseOctave();
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };
  const decreaseStep = (event: MouseEvent<HTMLDivElement>) => {
    setOffsetTop(offsetTop + 3.75);
    if (step === 1) {
      decreaseOctave();
      setStep(selectedScale.length);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <div
      className="chord-wrapper"
      style={{
        top: `${offsetTop}%`
      }}
    >
      <div onMouseDown={play} onMouseUp={stop} className="play-button">
        {step}
      </div>
      <div className="chord-button up-button" onClick={increaseStep}>
        +
      </div>
      <div className="chord-button down-button" onClick={decreaseStep}>
        -
      </div>
    </div>
  );
};
