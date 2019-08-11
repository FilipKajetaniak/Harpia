import { Note } from "types/Note";
import { AudioNote } from "types/AudioNote";

export default class Soundbank {
  constructor(notes: Note[]) {
    this.notes = notes.reduce(
      (object: any, note: Note) =>
        (object = {
          ...object,
          [note]: new Audio(require(`./notes/${note}.wav`))
        }),
      {}
    );
  }

  notes: AudioNote;

  readonly play = (notes: Note[]) => {
    notes.forEach(note => {
      this.notes[note].play();
    });
  };
}
