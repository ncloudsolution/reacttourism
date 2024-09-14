import DayTrips from "@/components/DayTrips";

import React from "react";

export const metadata = {
  title:
    "Best Day Tours & City Tours in Sri Lanka: Negombo, Bentota, Colombo, Sigiriya, Kandy - Discounted Prices & Tour Packages Available",
  description:
    "Discover the best day tours and city tours in Sri Lanka with our expert guides. Explore top destinations, cultural landmarks, and hidden gems. Book your unforgettable Sri Lanka tour today and experience the island’s stunning beauty and rich heritage!",
  keywords:
    "Sri Lanka Tour Packages, Sri Lanka Guided Tours, Best Tours in Sri Lanka, Sri Lanka City Sightseeing, Sri Lanka Day Trips, Top City Tours Sri Lanka, Best Day Tours Sri Lanka",
  icons: {
    icon: ["/daytrips.ico"],
  },
};

function page() {
  if (typeof window !== "undefined") {
    // Client-side only code
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <DayTrips />
    </>
  );
}

export default page;
