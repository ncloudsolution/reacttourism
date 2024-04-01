"use client";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import React, { useRef, useState } from "react";

const center = { lat: 6.9271, lng: 79.8612 };

const MainMapConfigs = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  /** js docs types for suggesions**/

  const [directionsRespone, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return <div>Loading.....................</div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "")
      return;

    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <>
      <div>
        <div>
          <div>map controls</div>
          <div className="flex my-2 mx-3 gap-x-3">
            <Autocomplete>
              <input
                ref={originRef}
                placeholder="Origin"
                type="text"
                className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded border-[1px] border-black "
              />
            </Autocomplete>

            <Autocomplete>
              <input
                ref={destinationRef}
                placeholder="Destination"
                type="text"
                className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded border-[1px] border-black "
              />
            </Autocomplete>
          </div>

          {distance && duration && (
            <div className="flex gap-x-3 bg-yellow-400 text-black my-2 px-3">
              <div>Distance : {distance}</div>
              <div>Duration : {duration}</div>
            </div>
          )}

          <div className="flex px-3 my-2 gap-x-3">
            <button
              className="bg-black text-white p-2 rounded"
              onClick={() => map.panTo(center)}
            >
              to center map
            </button>

            <button
              type="submit"
              className="bg-black text-white p-2 rounded"
              onClick={calculateRoute}
            >
              calculate Route
            </button>
            <button
              className="bg-black text-white p-2 rounded"
              onClick={clearRoute}
            >
              clear Route
            </button>
          </div>
        </div>
        <div className="h-[700px]">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "60%" }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsRespone && (
              <DirectionsRenderer directions={directionsRespone} />
            )}
          </GoogleMap>
        </div>
      </div>
    </>
  );
};

export default MainMapConfigs;
