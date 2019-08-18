import React, { FC } from "react";

import { Column } from "components/Column/Column";

import "./Grid.sass";

export const Grid: FC = () => {
  return (
    <main className="grid">
      <Column />
      <Column />
      <Column />
      <Column />
    </main>
  );
};
