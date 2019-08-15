import React, { FC, MouseEvent } from "react";
import { notes as NotesBank } from "constants/notes";
import Soundbank from "soundbank/soundbank";
import Scale from "scales/Scale";
import { cMajor } from "constants/scales";

interface PlayButtonProps {
  notes: any;
}

const soundbank = new Soundbank(NotesBank);
const scale = new Scale(cMajor);
scale.setOctave(5);

export const PlayButton: FC<PlayButtonProps> = ({ notes }) => {
  const chord = scale.getNotesFromSteps(notes);

  const play = (event: MouseEvent<HTMLDivElement>) => {
    soundbank.play(chord);
  };
  const stop = (event: MouseEvent<HTMLDivElement>) => {
    soundbank.stop(chord);
  };
  return (
    <div onMouseDown={play} onMouseUp={stop}>
      {chord}
    </div>
  );
};
