import TourPackages from "@/components/TourPackages";
import React from "react";

export const metadata = {
  title:
    "Explore Top Sri Lanka Tour Packages: Best Deals on Adventure, Beach, & Cultural Tours | Book Your Dream Vacation Today!",
  description:
    "Discover the best tour packages in Sri Lanka! From breathtaking beach getaways and cultural adventures to wildlife safaris and luxury stays, our expertly crafted itineraries offer something for every traveler. Explore Sri Lanka’s hidden gems and iconic landmarks with us. Book your dream vacation today",
  keywords:
    "Tour Packages, Travel Experiences, Guided Tours, Top Destinations, Adventure Travel,",
  icons: {
    icon: ["/tourpackages.ico"],
  },
};

function page() {
  if (typeof window !== "undefined") {
    // Client-side only code
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <TourPackages />
    </>
  );
}

export default page;
