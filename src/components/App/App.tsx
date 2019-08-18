import React from "react";
import { ChordComponent as Chord } from "components/Chord/Chord";

import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Chord octave="3" step={1} intervals={[1, 5, 10]} />
      <Chord octave="3" step={5} intervals={[1, 5, 10]} />
      <Chord octave="3" step={6} intervals={[1, 5, 10]} />
      <Chord octave="3" step={4} intervals={[1, 5, 10]} />
    </>
  );
};

export default App;
