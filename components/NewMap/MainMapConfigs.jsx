"use client";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import React, { useContext, useRef, useState } from "react";
import First from "../First";
import { SelectVehiclesList } from "@/libs/calculations";
import { SingleVehicleContext } from "@/context/SingleVehicalContextProvider";

const center = { lat: 6.9271, lng: 79.8612 };

const MainMapConfigs = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  /** js docs types for suggesions**/
  const { vehicle, setVehicle } = useContext(SingleVehicleContext);
  const [selectedVehiclesList, setSelectedVehiclesList] = useState([]);
  const [directionsRespone, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const originRef = useRef();
  const destinationRef = useRef();
  const passengerCountRef = useRef();

  console.log(vehicle);

  if (!isLoaded) {
    return <div>Loading.....................</div>;
  }

  async function calculateRoute() {
    if (
      originRef.current.value === "" ||
      destinationRef.current.value === "" ||
      passengerCountRef.current.value === ""
    )
      return;

    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setIsSubmit(!isSubmit);
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);

    const selectedVehiclesListValue = SelectVehiclesList(
      passengerCountRef.current.value,
      Math.ceil(results.routes[0].legs[0].distance.value / 1000)
    );
    setSelectedVehiclesList(selectedVehiclesListValue);

    console.log(Math.ceil(results.routes[0].legs[0].distance.value / 1000));
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
        <div className="w-full flex flex-col items-center justify-center ">
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

            <input
              ref={passengerCountRef}
              placeholder="No.Passengers"
              type="number"
              min="1"
              className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded border-[1px] border-black "
            />
          </div>

          {distance && duration && (
            <div className="flex gap-x-3 bg-yellow-400 text-black my-2 px-3">
              <div>Distance : {distance}</div>
              <div className="font-bold">||</div>
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
        {isSubmit && (
          <div className="h-fit w-full flex">
            <div className="size-[600px] flex">
              <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                onLoad={(map) => setMap(map)}
              >
                <Marker position={center} />
                {directionsRespone && (
                  <DirectionsRenderer directions={directionsRespone} />
                )}
              </GoogleMap>
            </div>
            <div>
              {selectedVehiclesList.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-black text-white w-[300px] flex mb-3"
                >
                  <div className="flex flex-col">
                    <div>{vehicle.type}</div>
                    <div className="text-yellow-300 ">
                      No of passengers {vehicle.passengers}
                    </div>
                    <div>Price {vehicle.price}</div>
                  </div>
                  <button
                    className="bg-yellow-500 px-6 ml-5"
                    onClick={() => {
                      //console.log(vehicle.price);
                      setVehicle({
                        type: vehicle.type,
                        passengers: vehicle.passengers,
                        weightFactor: vehicle.weightFactor,
                        price: vehicle.price,
                      });
                    }}
                  >
                    select
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {vehicle.type && <div>selected vehical : {vehicle.type}</div>}
      </div>
    </>
  );
};

export default MainMapConfigs;
