import { Note } from "types/Note";
import { notes as allNotes } from "constants/notes";
import { DetailedNote } from "types/DetailedNote";

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

  private notes: DetailedNote[] = [];
  private octave: number = 4;

  readonly getNotesFromSteps = (steps: number[]): Note[] => {
    let chord: Note[] = [];
    steps.forEach(step => {
      const foundNote = this.notes.find(
        note => note.step === step && note.octave === this.octave
      );
      if (foundNote) {
        chord.push(foundNote.note);
      }
    });
    return chord;
  };

  readonly setOctave = (octave: number) => (this.octave = octave);
}
