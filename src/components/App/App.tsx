import React from "react";

import { SoundbankContext } from "containers/SoundbankContext";
import { Grid } from "components/Grid/Grid";
import { TopBar } from "components/TopBar/TopBar";

import "sass/main.sass";

const App: React.FC = () => {
  return (
    <SoundbankContext>
      <TopBar />
      <Grid />
    </SoundbankContext>
  );
};

export default App;
