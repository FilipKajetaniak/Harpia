import React, { FC, createContext } from "react";

import Soundbank from "soundbank/soundbank";

console.log("created soundbank - containers");
const soundbank = new Soundbank();

export const soundbankContext = createContext<Soundbank>(soundbank);

export const SoundbankContext: FC = ({ children }) => (
  <soundbankContext.Provider value={soundbank}>
    {children}
  </soundbankContext.Provider>
);
