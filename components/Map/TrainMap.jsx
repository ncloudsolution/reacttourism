"use client";

import { useContext, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TourContext } from "@/context/TourContextProvider";
import { FaTrain } from "react-icons/fa6";
import CustomTrainDropDown from "../standalone/CustomTrainDropDown";
import { TrainSearchByTourPoints } from "@/libs/TrainSearch";

const center = { lat: 6.9271, lng: 79.8612 };

const TrainMap = ({ children }) => {
  const router = useRouter();

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  /** js docs types for suggesions**/
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [isSubmit, setIsSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [filterdTrains, setFilterdTrains] = useState("");

  const passengerCountRef = useRef();

  async function calculateRoute(e) {
    e.preventDefault();
    if (
      passengerCountRef.current.value === "" ||
      tourDetails.trainTourPoints === undefined
    ) {
      return setSubmitError("Please fill all the fields");
    }

    try {
      setFilterdTrains((prevFilteredTrains) =>
        TrainSearchByTourPoints(tourDetails.trainTourPoints)
      );

      setTourDetails((prevTourDetails) => ({
        ...prevTourDetails,
        trainTourPoints: tourDetails.trainTourPoints,
        noOfPassengers: passengerCountRef.current.value,
      }));
      setSubmitError("");
      setIsSubmit(true);

      window.scrollBy({
        top: 300, // Scroll down by 200px
        behavior: "smooth", // Smooth scrolling
      });
    } catch (error) {
      console.error("Error occurred while calculating route:", error);
      // Handle error as needed
    }
  }

  useEffect(() => {
    console.log(filterdTrains);
  }, [filterdTrains]);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-fit flex flex-col items-center justify-center ">
          <div className="bxs:text-[30px] xxxs:text-[24px] text-[22px] mt-[20px] bigmd:mt-[50px] mb-[10px] font-medium text-white">
            Journey On Rails
          </div>
          <FaTrain className="text-[30px] text-primary mb-2" />
          <div className="flex my-4 border-2 border-transparent bigmd:w-fit bxs:w-[400px] xxs:w-[350px] xxxs:w-[290px] w-[250px]">
            <div className="flex flex-col gap-y-3 w-full">
              <div className="flex gap-x-3 flex-col bigmd:flex-row  gap-y-3 bigmd:w-[778px] w-full">
                {/**750px**/}
                <div className="relative w-full">
                  <CustomTrainDropDown />
                </div>

                <input
                  ref={passengerCountRef}
                  placeholder="No.Passengers"
                  type="number"
                  min="1"
                  className="p-2 text-[14px] mt-[44px] bigmd:mt-0 outline-none bigmd:w-[250px] h-[43px]  w-full shadow-md rounded border-[1px] border-black "
                />
              </div>

              <div className="flex gap-x-3 relative  flex-col bigmd:flex-row gap-y-3">
                <div className="flex flex-1 justify-between gap-x-4 bigmd:gap-x-2  xxs:text-[16px] text-[12px] font-medium xxs:font-normal">
                  <button
                    type="submit"
                    className="bg-black text-white p-2 rounded bigmd:w-fit flex-1 bigmd:block "
                    onClick={calculateRoute}
                  >
                    Search Train
                  </button>
                </div>
              </div>
            </div>
          </div>

          {submitError && <div className="text-errorpink">{submitError}</div>}
        </div>

        {isSubmit && !submitError && (
          <div className="w-full flex justify-center">
            <div className="border-2 border-transparent midxl:w-[1400px] mobile:w-[1000px] w-[800px] flex gap-x-10 xs:my-8  bigmd:flex-row flex-col bigmd:items-start items-center gap-2 my-6">
              {/* {filterdTrains.map((train, index) => (
                <div key={index}>
                  <div className="flex flex-col">
                    <div className="bg-red-400">
                      {train.trainList.trainName}
                    </div>
                    <div>
                      {train.trainList.trainPoints[0]}
                      to {train.trainList.trainPoints[1]}
                    </div>
                    <div>
                      {train.trainList.travelTime[0]}to{" "}
                      {train.trainList.travelTime[1]}
                    </div> 
                     <div>
                      {train.trainList.availableDays.map((day, index) => (
                        <div key={index}>{day}</div>
                      ))}
                    </div>
                    <div>
                      {train.trainList.types.map((type, index) => (
                        <div key={index}>
                          <div>{type.class}</div>
                          <div>{type.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))} */}
              <div className="flex flex-col w-full">
                {/* {tourDetails.trainTourPoints && isSubmit && !submitError &&(
                  <div className="font-light text-[30px] text-center">
                    {tourDetails.trainTourPoints}
                  </div>
                )} */}

                {filterdTrains.map((train, index) => (
                  <div
                    key={index}
                    className="bigmd:w-full bxs:w-[400px] xxs:w-[350px] xxxs:w-[290px] w-[250px]"
                  >
                    <div className="flex flex-col ">
                      <div>
                        {train.trainList.map((train, index) => (
                          <div
                            key={index}
                            className="my-5 w-full  px-4 border-[1px] border-black rounded"
                          >
                            {" "}
                            {/**upper section over the line**/}
                            <div className="w-full bigmd:py-3 py-[10px] bigmd:gap-y-0 gap-y-[2px] flex bigmd:flex-row flex-col justify-between items-center  border-b-black border-b-[2px]">
                              <div className="bigmd:text-[26px] bxs:text-[20px]  xxs:text-[18px] text-[17px] font-semibold ">
                                {train.trainName}
                              </div>
                              <div className="flex bigmd:gap-x-4  gap-x-6  text-[#6c6c6c]">
                                <div className="flex flex-col items-center ">
                                  <div className="font-semibold text-[12px] bxs:text-[16px] ">
                                    {train.trainPoints[0]}
                                  </div>
                                  <div className="bigmd:text-[12px] text-[11px]">
                                    {train.trainTime[0]}
                                  </div>
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="font-semibold text-[12px] bxs:text-[16px]">
                                    {train.trainPoints[1]}
                                  </div>
                                  <div className="bigmd:text-[12px] text-[11px]">
                                    {train.trainTime[1]}
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/**arrive departs**/}
                            <div className="flex justify-between items-center my-3">
                              <div className="flex flex-col my-2 bxs:text-[18px] xxs:text-[16px] text-[14px]">
                                <div className="flex gap-x-3">
                                  <div className="bxs:w-[70px] w-[50px] font-semibold ">
                                    Departs
                                  </div>
                                  <div className="font-medium text-primary">
                                    {train.travelTime[0]}
                                  </div>
                                </div>
                                <div className="flex gap-x-3">
                                  <div className="bxs:w-[70px] w-[50px] font-semibold">
                                    Arrives
                                  </div>
                                  <div className="font-medium text-errorpink">
                                    {train.travelTime[1]}
                                  </div>
                                </div>
                              </div>

                              {/**days**/}
                              <div className="flex gap-2 flex-wrap justify-end">
                                {train.availableDays.map((day, index) => (
                                  <div key={index}>
                                    <div className="bigmd:py-2 py-[6px] bigmd:text-[16px] text-[14px] bigmd:px-3 px-2 rounded bg-[#eeeeee] shadow font-medium">
                                      {day}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {/**class**/}
                            <div className="my-5">
                              {train.types.map((type, index) => (
                                <div key={index} className="my-2">
                                  <div
                                    className={` ${
                                      type.class === "Air Conditioned Saloon"
                                        ? "bg-primary text-white"
                                        : type.class === "Observation Saloon"
                                        ? "bg-purple-800 text-white"
                                        : type.class ===
                                          "Second Class Reserved Seats"
                                        ? "bg-[#17a11f] text-white"
                                        : type.class ===
                                          "Third Class Reserved Seats"
                                        ? "bg-[#1ee42a] text-black"
                                        : type.class ===
                                          "First Class Sleeperetts"
                                        ? "bg-blue-400 text-white"
                                        : type.class ===
                                          "Second Class Sleeperetts"
                                        ? "bg-slate-500 text-white"
                                        : type.class ===
                                          "Third Class Sleeperetts"
                                        ? "bg-amber-600 text-white"
                                        : "bg-pink-300"
                                    } flex  justify-between gap-2 p-2 text-[11px] xxxs:text-[12px] xxs:text-[14px] bxs:text-[16px] rounded`}
                                  >
                                    <div>{type.class}</div>
                                    <div>{type.price}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/**select button**/}
                            {/* <div className="bg-black rounded w-full text-white font-semibold p-3 text-center mb-3 -mt-1">
                            Select This Train
                          </div> */}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default TrainMap;
