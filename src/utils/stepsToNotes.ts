import { scales } from "constants/scales";
import { Note } from "types/Note";

export const stepsToNotes = (steps: number[], scale: string[]) => {
  return steps.map(step => scale[step - 1]);
};
