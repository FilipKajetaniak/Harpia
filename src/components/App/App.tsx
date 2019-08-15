import React from "react";
import { PlayButton } from "components/PlayButton/PlayButton";

const App: React.FC = () => {
  return (
    <>
      <PlayButton octave="3" step={1} intervals={[1, 5, 10]} />
      <PlayButton octave="3" step={4} intervals={[1, 5, 10]} />
      <PlayButton octave="3" step={5} intervals={[1, 5, 10]} />
    </>
  );
};

export default App;
