"use client";
import React, { useEffect, useState } from "react";
import PointToPointMap from "./Map/PointToPointMap";
import AirportMap from "./Map/AirportMap";
import TrainMap from "./Map/TrainMap";
import CarSkeleton from "./skeletonUI/compoundElements/CarSkeleton";
import { useJsApiLoader } from "@react-google-maps/api";
import DayTrips from "./DayTrips";
import Link from "next/link";

import { RiPinDistanceFill } from "react-icons/ri";
import { MdLocalAirport } from "react-icons/md";
import { FaTrain } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import Hierarchy from "./standalone/Hierarchy";
import { BsCoin } from "react-icons/bs";

import { SetHighwayCharge } from "@/libs/HighwayFair";
import CustomCurrencyDropDown from "./standalone/CustomCurrencyDropDown";
import CurrencyTab from "./standalone/CurrencyTab";

const MainTab = () => {
  const [isPointToPointClicked, setIsPointToPointClicked] = useState(false);
  const [isAirportClicked, setIsAirportClicked] = useState(true);
  const [isTrainClicked, setIsTrainClicked] = useState(false);
  const [isDayTourClick, setDayTourClick] = useState(false);
  const [isCurrencyActive, setIsCurrencyActive] = useState(false);

  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000); // 3 seconds delay - 1s for google api load and 2 second timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const libraries = ["places"];
  setTimeout(() => {}, 1000);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    region: "lk",
    libraries: libraries,
  });

  if (!isLoaded || showSkeleton) {
    return (
      <>
        <CarSkeleton />
      </>
    );
  }
  console.log(isLoaded, "is loaded 2");

  const handlePointToPoint = () => {
    setIsPointToPointClicked(true);
    setIsTrainClicked(false);
    setIsAirportClicked(false);
    setDayTourClick(false);
  };

  const handleAirport = () => {
    setIsAirportClicked(true);
    setIsPointToPointClicked(false);
    setIsTrainClicked(false);
    setDayTourClick(false);
  };

  const handleTrain = () => {
    setIsTrainClicked(true);
    setIsAirportClicked(false);
    setIsPointToPointClicked(false);
    setDayTourClick(false);
  };

  const handleDayTour = () => {
    setDayTourClick(true);
    setIsTrainClicked(false);
    setIsAirportClicked(false);
    setIsPointToPointClicked(false);
  };

  // const hi = SetHighwayCharge("A", "Athurugiriya");
  // console.log(hi, "highwaycharge");

  return (
    <>
      <BsCoin
        className="text-primary absolute text-[30px] xxs:text-[40px] bxs:text-[35px] sm:text-[40px] bigmd:text-[30px] lg:text-[40px] lg:right-10 bigmd:right-2 sm:right-10 xxs:right-5 right-3 bxs:translate-y-12 xs:translate-y-32 translate-y-12 z-10"
        onClick={() => setIsCurrencyActive(!isCurrencyActive)}
      />
      {isCurrencyActive && <CurrencyTab />}
      <div className="flex justify-center w-full bg-red-300 px-0">
        <div className="flex justify-center items-center flex-col bg-black w-full">
          <div className="bigmd:w-[778px] bxs:w-[404px] xxxs:w-[244px] w-[230px] flex justify-center">
            <div
              className={` ${
                isCurrencyActive ? "mt-0" : "mt-5"
              } w-full flex justify-center  `}
            >
              <Hierarchy />
            </div>
          </div>
          <div className="flex flex-col bigmd:w-[778px] bxs:w-[404px] xxxs:w-[244px] w-[230px] items-start">
            <div className="bigmd:flex  hidden gap-3 my-2 bxs:text-[16px] text-[12px] translate-y-8">
              <div
                className={`${
                  isAirportClicked ? "bg-primary" : "bg-white"
                } p-1 px-2  text-black rounded cursor-pointer transition-all duration-500`}
                onClick={handleAirport}
              >
                Airport Transport
              </div>

              <div
                className={`${
                  isPointToPointClicked ? "bg-primary" : "bg-white"
                } p-1 px-2  text-black rounded cursor-pointer transition-all duration-500`}
                onClick={handlePointToPoint}
              >
                Point to Point
              </div>

              <div
                className={`${
                  isTrainClicked ? "bg-primary" : "bg-white"
                } p-1 px-2  text-black rounded cursor-pointer transition-all duration-500`}
                onClick={handleTrain}
              >
                Train booking
              </div>
              <Link
                className="p-1 px-2 bg-white text-black rounded cursor-pointer"
                href={"/daytrips"}
              >
                Day tours
              </Link>
            </div>

            {/**mobile area**/}
            <div className="bigmd:hidden  flex flex-col gap-3 text-[30px] text-white my-4 bxs:justify-start justify-center w-full ">
              <div
                className="flex items-center gap-x-4 "
                onClick={handleAirport}
              >
                <MdLocalAirport
                  className={` ${
                    isAirportClicked ? "bg-primary" : "bg-white"
                  } bxs:size-[40px] size-[35px] text-black  rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isAirportClicked ? "bg-primary" : "bg-white"
                  }  text-[16px] flex-1 text-black  rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Airport Transport
                </div>
              </div>

              <div
                className="flex items-center gap-x-4 "
                onClick={handlePointToPoint}
              >
                <RiPinDistanceFill
                  className={` ${
                    isPointToPointClicked ? "bg-primary" : "bg-white"
                  } bxs:size-[40px] size-[35px] text-black  rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isPointToPointClicked ? "bg-primary" : "bg-white"
                  }  text-[16px] flex-1 text-black  rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Point To Point
                </div>
              </div>

              <div className="flex items-center gap-x-4 " onClick={handleTrain}>
                <FaTrain
                  className={` ${
                    isTrainClicked ? "bg-primary" : "bg-white"
                  } bxs:size-[40px] size-[35px] text-black  rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isTrainClicked ? "bg-primary" : "bg-white"
                  }  text-[16px] flex-1 text-black  rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Train Booking
                </div>
              </div>

              <Link
                className="flex items-center gap-x-4 "
                href={"/daytrips"}
                onClick={handleDayTour}
              >
                <IoCarSportSharp
                  className={` ${
                    isDayTourClick ? "bg-primary" : "bg-white"
                  } bxs:size-[40px] size-[35px] text-black  rounded p-[6px]`}
                />
                <div
                  className={` ${
                    isDayTourClick ? "bg-primary" : "bg-white"
                  }  text-[16px] flex-1 text-black  rounded bxs:py-2 py-[6px] px-4 font-semibold`}
                >
                  Day Tours
                </div>
              </Link>
            </div>

            {isAirportClicked && <AirportMap isLoaded={isLoaded} />}
            {isPointToPointClicked && <PointToPointMap />}

            {isTrainClicked && <TrainMap />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTab;
