import React, { FC, MouseEvent } from "react";
import { Note } from "types/Note";
import { notes as NotesBank } from "constants/notes";
import Soundbank from "soundbank/soundbank";

interface PlayButtonProps {
  notes: Note[];
}
const sb = new Soundbank(NotesBank);

export const PlayButton: FC<PlayButtonProps> = ({ notes }) => {
  const play = (event: MouseEvent<HTMLDivElement>) => {
    sb.play(notes);
  };
  const stop = (event: MouseEvent<HTMLDivElement>) => {
    sb.stop(notes);
  };
  return (
    <div onMouseDown={play} onMouseUp={stop}>
      {notes}
    </div>
  );
};
