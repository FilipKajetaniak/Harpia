import { Note } from "types/Note";

export const setOctave = (notes: string[], octave: number) => {
  return notes.map(note => `${note}${octave}`);
};
