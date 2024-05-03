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

const MainTab = () => {
  const [isPointToPointClicked, setIsPointToPointClicked] = useState(false);
  const [isAirportClicked, setIsAirportClicked] = useState(true);
  const [isTrainClicked, setIsTrainClicked] = useState(false);

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
  };

  const handleAirport = () => {
    setIsAirportClicked(true);
    setIsPointToPointClicked(false);
    setIsTrainClicked(false);
  };

  const handleTrain = () => {
    setIsTrainClicked(true);
    setIsAirportClicked(false);
    setIsPointToPointClicked(false);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col bg-black ">
        <div className="bigmd:w-[778px] bxs:w-[404px] xxxs:w-[244px] w-[230px] flex justify-center">
          <div className="mt-2 bxs:mt-4 bigmd:mt-6 w-full flex justify-center">
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
          <div className="bigmd:hidden  flex gap-3 bigmd:my-3 my-0 text-[30px] text-white translate-y-8 bxs:justify-start justify-center w-full">
            <MdLocalAirport
              onClick={handleAirport}
              className={` ${
                isAirportClicked ? "bg-primary" : "bg-white"
              } bxs:size-[40px] size-[35px] text-black  rounded p-[6px]`}
            />
            <RiPinDistanceFill
              onClick={handlePointToPoint}
              className={`${
                isPointToPointClicked ? "bg-primary" : "bg-white"
              } bxs:size-[40px] size-[35px] text-black  rounded p-[6px]`}
            />

            <FaTrain
              onClick={handleTrain}
              className={`${
                isTrainClicked ? "bg-primary" : "bg-white"
              } bxs:size-[40px] size-[35px] text-black  rounded p-[8px]`}
            />
            <Link href={"/daytrips"}>
              <IoCarSportSharp className="bxs:size-[40px] text-black  size-[35px] bg-white rounded p-[6px]" />
            </Link>
          </div>

          {isAirportClicked && <AirportMap isLoaded={isLoaded} />}
          {isPointToPointClicked && <PointToPointMap />}

          {isTrainClicked && <TrainMap />}
        </div>
      </div>
    </>
  );
};

export default MainTab;
