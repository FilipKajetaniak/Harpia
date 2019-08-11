import React, { FC, MouseEvent } from "react";
import { Note } from "types/Note";
import { notes as NotesBank } from "constants/notes";
import Soundbank from "soundbank/soundbank";

interface PlayButtonProps {
  notes: Note[];
}

export const PlayButton: FC<PlayButtonProps> = ({ notes }) => {
  const sb = new Soundbank(NotesBank);
  const play = (event: MouseEvent<HTMLDivElement>) => {
    sb.play(notes);
  };
  return <div onClick={play}>{notes}</div>;
};
