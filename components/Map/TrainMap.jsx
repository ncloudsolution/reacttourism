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
          <div className="bxs:text-[30px] xxxs:text-[24px] text-[22px] mt-[50px] mb-[10px] font-medium ">
            Journey On Rails
          </div>
          <FaTrain className="text-[30px] text-primary mb-2" />
          <div className="flex my-4 border-2 border-transparent bigmd:w-fit bxs:w-[400px] xxs:w-[330px] xxxs:w-[250px] w-[230px]">
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
              {filterdTrains.map((train, index) => (
                <div
                  key={index}
                  className="bigmd:w-full bxs:w-[400px] xxs:w-[330px] xxxs:w-[250px] w-[230px]"
                >
                  <div className="flex flex-col ">
                    <div>
                      {train.trainList.map((train, index) => (
                        <div
                          key={index}
                          className="my-3 w-full p-2 border-[1px] border-black rounded"
                        >
                          <div>{train.trainName}</div>
                          <div>
                            {train.trainPoints[0]} to {train.trainPoints[1]}
                          </div>
                          <div>
                            {train.travelTime[0]} to {train.travelTime[1]}
                          </div>
                          <div className="flex bxs:flex-row flex-col">
                            {train.availableDays.map((day, index) => (
                              <div key={index}>
                                <div className="pr-2"> {day}</div>
                              </div>
                            ))}
                          </div>
                          <div>
                            {train.types.map((type, index) => (
                              <div key={index}>
                                <div className="flex gap-2">
                                  <div>{type.class}</div>
                                  <div>----</div>
                                  <div>{type.price}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default TrainMap;
