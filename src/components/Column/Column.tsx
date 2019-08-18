import React, { FC } from "react";

import { ChordComponent as Chord } from "components/Chord/Chord";

import "./Column.sass";

export const Column: FC = () => {
  return (
    <div className="column">
      <div className="chord-slider" />
      <Chord />
    </div>
  );
};
