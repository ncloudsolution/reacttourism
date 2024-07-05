import React, { useContext } from "react";

import {
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Page = () => {
  async function calculateRoute() {
    const origin = "Colombo";
    const destination = ["padukka", "Ingiriya"];

    let directionResponse;

    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      directionResponse = results;
    } catch (error) {
      console.error("Error occurred while route rendering:", error);
    }
  }

  return <div>HELLO</div>;
};

export default Page;
