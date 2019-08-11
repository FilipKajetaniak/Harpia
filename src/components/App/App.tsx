import React from "react";
import { PlayButton } from "components/PlayButton/PlayButton";
import { stepsToNotes } from "utils/stepsToNotes";
import { scales } from "constants/scales";
import { setOctave } from "utils/setOctave";

const { cMajor } = scales;

const App: React.FC = () => {
  return (
    <>
      <PlayButton notes={["e4"]} />
      <PlayButton notes={["ds4"]} />
      <PlayButton notes={stepsToNotes([3, 6, 8], setOctave(cMajor, 4))} />
    </>
  );
};

export default App;
