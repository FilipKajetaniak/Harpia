import React from "react";
import { PlayButton } from "components/PlayButton/PlayButton";
import Scale from "scales/Scale";

const App: React.FC = () => {
  return (
    <>
      <PlayButton notes={[1, 3, 5]} />
      <PlayButton notes={[2, 4, 6]} />
    </>
  );
};

export default App;
