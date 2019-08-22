import React, { FC } from "react";

import { ChordComponent as Chord } from "components/Chord/Chord";

import "./Column.sass";

export const Column: FC = () => {
  return (
    <div className="column">
      <div className="chord-slider" />
      <div className="octave-markers">
        <div className="octave-5" />
        <div className="octave-4" />
        <div className="octave-3" />
      </div>
      <div className="halfstep-markers">
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
        <div className="halfstep" />
      </div>
      <Chord />
    </div>
  );
};
