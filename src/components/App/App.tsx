import React from "react";
import { PlayButton } from "components/PlayButton/PlayButton";

const App: React.FC = () => {
  return (
    <>
      <PlayButton notes={["e4"]} />
      <PlayButton notes={["ds4"]} />
      <PlayButton notes={["f4", "f5", "f6"]} />
    </>
  );
};

export default App;
