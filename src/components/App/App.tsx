import React from "react";
import { Grid } from "components/Grid/Grid";
import { TopBar } from "components/TopBar/TopBar";

import "sass/main.sass";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <Grid />
    </>
  );
};

export default App;
