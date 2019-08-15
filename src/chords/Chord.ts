import { OctavesWithSteps } from "types/OctavesWithSteps";

export default class Chord {
  constructor(
    step: number,
    octave: string,
    intervals: number[],
    stepsInScale: number
  ) {
    // how many octaves are needed for that voicing based on highest interval
    const numberOfOctaves = Math.ceil(
      intervals
        .map(interval => interval + step - 1)
        .sort((a, b) => a - b)
        .reverse()[0] / stepsInScale
    );

    // iterating through number of required octaves
    for (let i = 0; i < numberOfOctaves; i++) {
      // adding a new octave (iterator that starts from 0 + octave from function parameters)
      this.octavesWithSteps[String(parseInt(octave, 10) + i)] = intervals
        // adding step that the chord is based on to intervals for steps relative to root note
        .map(interval => interval + step - 1)
        // filtering out steps that not belong to current octave
        .filter(interval => {
          return (
            interval > i * stepsInScale && interval <= (i + 1) * stepsInScale
          );
        })
        // subtracting steps so steps are relativ to current octave
        .map(interval => interval - i * stepsInScale);
    }
  }
  private octavesWithSteps: OctavesWithSteps = {};
  readonly getSteps = (): OctavesWithSteps => this.octavesWithSteps;
}
