"use client";

import { createContext, useState } from "react";

export const TourContext = createContext({});

export default function TourContextProvider({ children }) {
  const [tourDetails, setTourDetails] = useState({
    converedCurrencySymbol: "Rs",
    conversionRate: 1,
    pageTwoToken: false,
    pageThreeToken: false,
  });
  return (
    <TourContext.Provider value={{ tourDetails, setTourDetails }}>
      {children}
    </TourContext.Provider>
  );
}
