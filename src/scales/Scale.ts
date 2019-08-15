import { Note } from "types/Note";
import { notes as allNotes } from "constants/notes";

interface detailedNotes {
  note: Note;
  octave: number;
  step: number;
}

const removeOctave = (note: string): string =>
  note.substring(0, note.length - 1);

export default class Scale {
  constructor(scale: string[]) {
    this.notes = allNotes
      .filter(note => scale.find(scaleNote => scaleNote === removeOctave(note)))
      .map(note => ({
        note,
        octave: parseInt(note.slice(-1), 10),
        step: scale.indexOf(removeOctave(note)) + 1
      }));
  }

  private notes: detailedNotes[] = [];
}
