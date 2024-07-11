import DayTrips from "@/components/DayTrips";

import React from "react";

export const metadata = {
  title: "Day Trips",
  description:
    "Discover the best of Sri Lanka with our expertly organized day trips, designed to fit within 1 to 24 hours. Whether you have just an hour to spare or a full day to explore, our curated trips offer a perfect blend of adventure, culture, and relaxation. From visiting iconic landmarks and scenic landscapes to experiencing local cuisine and cultural heritage, each trip is meticulously planned to provide you with a memorable and enriching experience. Enjoy the convenience of our professional guides, comfortable transportation, and thoughtfully crafted itineraries that ensure you make the most of your time. Join us for a day trip and uncover the hidden gems and vibrant spirit of Sri Lanka.",
  keywords:
    "daytrip, my daytrip, one day trip, asia, trip planner, trip, travel sri lanaka, travel asia, private transfer, transfer, local drivers, sri-lanka-tours, day_trip-excursions, ceylon-day-tours-experiences, tour-packeges, sri_lanka_vacation_tours_packeges, holiday-sri_lanka, colombo-galle_sigiriya-kandy_negombo_ella_nuwaraeliya_mirissa_yala_pinnawala, madu_gaga-river, safari-wild",
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
