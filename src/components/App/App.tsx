import React from "react";
import { PlayButton } from "components/PlayButton/PlayButton";

const App: React.FC = () => {
  return (
    <>
      <PlayButton notes={["c4"]} />
      <PlayButton notes={["d#4"]} />
      <PlayButton notes={["f#4", "f#5", "f#6"]} />
    </>
  );
};

export default App;
