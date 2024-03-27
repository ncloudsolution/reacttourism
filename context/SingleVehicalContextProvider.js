"use client";

import { createContext, useState } from "react";

export const SingleVehicleContext = createContext({});

export default function SingleVehicleContextProvider({ children }) {
  const [vehicle, setVehicle] = useState({});
  return (
    <SingleVehicleContext.Provider value={{ vehicle, setVehicle }}>
      {children}
    </SingleVehicleContext.Provider>
  );
}
