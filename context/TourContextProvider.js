"use client";

import { createContext, useState } from "react";

export const TourContext = createContext({});

export default function TourContextProvider({ children }) {
  const [tourDetails, setTourDetails] = useState({});
  return (
    <TourContext.Provider value={{ tourDetails, setTourDetails }}>
      {children}
    </TourContext.Provider>
  );
}
