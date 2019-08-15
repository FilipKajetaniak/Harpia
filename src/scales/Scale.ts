import { Note } from "types/Note";
import { notes as allNotes } from "constants/notes";
import { DetailedNote } from "types/DetailedNote";
import { OctavesWithSteps } from "types/OctavesWithSteps";

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

  readonly getNotesFromSteps = (octavesWithSteps: OctavesWithSteps): Note[] => {
    let chord: Note[] = [];
    for (let [octave, steps] of Object.entries(octavesWithSteps)) {
      steps.forEach(step => {
        const foundNote = this.notes.find(
          note => note.step === step && note.octave === parseInt(octave, 10)
        );
        if (foundNote) {
          chord.push(foundNote.note);
        }
      });
    }
    return chord;
  };
}
