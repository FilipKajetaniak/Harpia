import React from "react";
import { PlayButton } from "components/PlayButton/PlayButton";

const App: React.FC = () => {
  return (
    <>
      <PlayButton octave="4" step={2} voicing={[1, 3, 5]} />
    </>
  );
};

export default App;
