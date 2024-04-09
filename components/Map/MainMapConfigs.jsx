"use client";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { useContext, useRef, useState, useEffect } from "react";
import Image from "next/image";

import { SelectVehiclesList } from "@/libs/calculations";
import { TourContext } from "@/context/TourContextProvider";
import { RetrunTimeValidity, StartTimeValidity } from "@/libs/TimeValidity";

import CarSkeleton from "../Skeleton/CarSkeleton";
import CustomDatePicker from "../CustomDatePicker";
import ContextCheckerComp from "../testingComponents/ContextCheckerComp";

import { IoIosCloseCircle } from "react-icons/io";

const center = { lat: 6.9271, lng: 79.8612 };

const libraries = ["places"];

const MainMapConfigs = ({ children }) => {
  setTimeout(() => {}, 1000);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    region: "lk",
    libraries: libraries,
  });

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  /** js docs types for suggesions**/
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [selectedVehiclesList, setSelectedVehiclesList] = useState([]);
  const [directionsRespone, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [durationForCalc, setDurationForCalc] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [returnTour, setReturnTour] = useState(false);

  const originRef = useRef();
  const destinationRef = useRef();
  const passengerCountRef = useRef();

  const [startDate, setStartDate] = useState(new Date());

  const [returnDate, setReturnDate] = useState(new Date());

  console.log(isLoaded, "is loaded 1");

  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000); // 3 seconds delay - 1s for google api load and 2 second timeout
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isLoaded || showSkeleton) {
    return (
      <>
        <CarSkeleton />
      </>
    );
  }
  console.log(isLoaded, "is loaded 2");

  async function calculateRoute() {
    if (
      originRef.current.value === "" ||
      destinationRef.current.value === "" ||
      passengerCountRef.current.value === "" ||
      startDate === ""
    ) {
      return setSubmitError("Please fill all the fields");
    }

    const ValidStartTime = StartTimeValidity(startDate); // Assuming TimeValidity is synchronous

    if (ValidStartTime) {
      setSubmitError(ValidStartTime);
      return;
    }

    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      setSubmitError("");
      setIsSubmit(true);
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
      setDurationForCalc(results.routes[0].legs[0].duration.value);

      const selectedVehiclesListValue = SelectVehiclesList(
        passengerCountRef.current.value,
        Math.ceil(results.routes[0].legs[0].distance.value / 1000)
      );
      setSelectedVehiclesList(selectedVehiclesListValue);

      console.log(Math.ceil(results.routes[0].legs[0].distance.value / 1000));

      if (returnTour) {
        const ValidReturnTime = RetrunTimeValidity(
          startDate.getTime() / (1000 * 60),
          returnDate.getTime() / (1000 * 60),
          durationForCalc / 60
        );
        setSubmitError(ValidReturnTime);
        return;
      }

      console.log(ValidReturnTime, "RETURN VALID");
    } catch (error) {
      console.error("Error occurred while calculating route:", error);
      // Handle error as needed
    }

    console.log(durationForCalc, "calc");
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setIsSubmit(false);
    originRef.current.value = "";
    destinationRef.current.value = "";
    passengerCountRef.current.value = "";
  }

  return (
    <>
      <div>
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="text-[30px] mt-[50px] mb-[30px] font-medium">
            Find your Driver
          </div>
          <div className="flex my-4 border-2 border-transparent bigmd:w-fit bxs:w-[400px] xxs:w-fit xxxs:w-[250px] w-[230px]">
            <div className="flex flex-col gap-y-3 w-full">
              <div className="flex gap-x-3 flex-col bigmd:flex-row  gap-y-3 ">
                <Autocomplete>
                  <input
                    ref={originRef}
                    placeholder="Origin"
                    type="text"
                    className="p-2 text-[14px] outline-none bigmd:w-[250px]  w-full shadow-md rounded border-[1px] border-black"
                  />
                </Autocomplete>

                <Autocomplete>
                  <input
                    ref={destinationRef}
                    placeholder="Destination"
                    type="text"
                    className="p-2 text-[14px] outline-none bigmd:w-[250px]  w-full shadow-md rounded border-[1px] border-black "
                  />
                </Autocomplete>

                <input
                  ref={passengerCountRef}
                  placeholder="No.Passengers"
                  type="number"
                  min="1"
                  className="p-2 text-[14px] outline-none bigmd:w-[250px]  w-full shadow-md rounded border-[1px] border-black "
                />
              </div>

              <div className="flex gap-x-3 relative  flex-col bigmd:flex-row gap-y-3">
                <CustomDatePicker
                  selectedDate={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                {returnTour ? (
                  <>
                    <CustomDatePicker
                      selectedDate={returnDate}
                      onChange={(date) => setReturnDate(date)}
                    />

                    <IoIosCloseCircle
                      size={25}
                      className="absolute cursor-pointer bigmd:left-[450px] bigmd:top-[6px] left-[320px] top-[58px]"
                      onClick={() => setReturnTour(false)}
                    />
                  </>
                ) : (
                  <div
                    className="flex flex-1 justify-center items-center shadow-md rounded border-[1px] border-black cursor-pointer py-[6px]"
                    onClick={() => setReturnTour(true)}
                  >
                    Add Reurn
                  </div>
                )}

                <div className="flex flex-1 justify-between gap-x-4 bigmd:gap-x-2  xxs:text-[16px] text-[12px] font-medium xxs:font-normal">
                  <button
                    type="submit"
                    className="bg-black text-white p-2 rounded bigmd:w-fit flex-1 bigmd:block "
                    onClick={calculateRoute}
                  >
                    Calculate Route
                  </button>
                  <button
                    className="bg-black text-white p-2 rounded bigmd:w-fit :flex-1 bigmd:block"
                    onClick={clearRoute}
                  >
                    Clear Route
                  </button>
                </div>
              </div>
            </div>
          </div>

          {submitError && <div className="text-errorpink">{submitError}</div>}

          {!submitError && distance && duration && (
            <div className="flex gap-x-3 bg-yellow-400 text-black my-2 px-3">
              <div>Distance : {distance}</div>
              <div className="font-bold">||</div>
              <div>Duration : {duration}</div>
            </div>
          )}

          {/* <div className="flex my-4 gap-x-3 ">
            {/* <button
              className="bg-black text-white p-2 rounded"
              onClick={() => map.panTo(center)}
            >
              to center map
            </button> 
          </div> */}

          {/** map center smoothly**/}
        </div>

        {isSubmit && !submitError && (
          <div className="w-full flex justify-center">
            <div className=" w-[1400px] flex gap-x-10 mt-8 mb-16">
              <div className="w-[800px] h-[500px] aspect-square flex rounded-lg overflow-hidden shadow-md">
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
              <div className="w-full ">
                {selectedVehiclesList.map((vehicle, index) => (
                  <div
                    key={index}
                    className="bg-transparent text-black w-full flex mb-6 p-4 rounded-lg border-[2px] border-black shadow-md justify-between hover:scale-[1.03] transition-all duration-500"
                  >
                    <div className="flex flex-col">
                      <div className="font-semibold text-[30px] px-8">
                        {vehicle.type}
                      </div>
                      <div className="w-[300px] h-[150px] ">
                        <Image
                          src={vehicle.img}
                          alt=""
                          width={300}
                          height={300}
                          className="border-2 border-transparent object-cover w-[100%] h-[100%]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mr-10 gap-y-3 items-center justify-center border-2 border-transparent">
                      <div className="text-black text-[20px] ">
                        Passengers {vehicle.passengers}
                      </div>
                      <div className="bg-black text-white py-2 rounded w-full text-center">
                        Price Rs.{vehicle.price}
                      </div>
                      <button
                        className="bg-yellow-500 w-full py-2 rounded font-semibold  hover:border-black border-2 border-transparent transition-all duration-500"
                        onClick={() => {
                          console.log(startDate, "date");
                          //console.log(vehicle.price);
                          setTourDetails({
                            vehicleType: vehicle.type,
                            vehicalSeatCapacity: vehicle.passengers,
                            weightFactor: vehicle.weightFactor,
                            price: vehicle.price,

                            origin: originRef.current.value,
                            destination: destinationRef.current.value,
                            noOfPassengers: passengerCountRef.current.value,
                            startDate: startDate,
                            returnDate: returnTour
                              ? returnDate
                              : " No any end date it's One way Trip",
                            distance: distance,
                            duration: duration,
                          });
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/** context usage **/}
        <ContextCheckerComp />
      </div>
      {children}
    </>
  );
};

export default MainMapConfigs;
