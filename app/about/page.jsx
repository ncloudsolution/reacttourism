import AboutUs from "@/components/AboutUs";
import React from "react";

export const metadata = {
  title: "About Us",
  description:
    "Welcome to our premier transportation service in Sri Lanka, where we cater to all your travel needs with professionalism and care. From seamless airport transfers and point-to-point transportation to curated day trips, comprehensive tour packages, scenic rail journeys, and custom trips, we ensure a smooth and enjoyable journey across this beautiful island. Our well-maintained fleet of vehicles, competitive rates, and commitment to punctuality guarantee a hassle-free experience. Trust us to provide exceptional service from the moment you arrive, making your journey through Sri Lanka unforgettable.",
};

function page() {
  return (
    <>
      <div className="lg:mt-0 mt-10">
        <AboutUs />
      </div>
    </>
  );
}

export default page;
