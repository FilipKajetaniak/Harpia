import { OctavesWithSteps } from "types/OctavesWithSteps";

export default class Chord {
  constructor(step: number, octave: string, voicing: number[]) {
    this.steps[octave] = voicing.map(voicingStep => voicingStep + step);
  }
  private steps: OctavesWithSteps = {};
  readonly getSteps = (): OctavesWithSteps => this.steps;
}
