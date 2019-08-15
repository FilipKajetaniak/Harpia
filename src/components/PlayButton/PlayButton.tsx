import React, { FC, MouseEvent } from "react";
import { notes as NotesBank } from "constants/notes";
import Soundbank from "soundbank/soundbank";
import Scale from "scales/Scale";
import { cMajor } from "constants/scales";
import Chord from "chords/Chord";

interface PlayButtonProps {
  octave: string;
  step: number;
  voicing: number[];
}

const soundbank = new Soundbank(NotesBank);
const scale = new Scale(cMajor);

export const PlayButton: FC<PlayButtonProps> = ({ octave, step, voicing }) => {
  const chord = new Chord(step, octave, voicing);
  const notes = scale.getNotesFromSteps(chord.getSteps());

  const play = (event: MouseEvent<HTMLDivElement>) => {
    soundbank.play(notes);
  };
  const stop = (event: MouseEvent<HTMLDivElement>) => {
    soundbank.stop(notes);
  };
  return (
    <div onMouseDown={play} onMouseUp={stop}>
      {notes}
    </div>
  );
};
