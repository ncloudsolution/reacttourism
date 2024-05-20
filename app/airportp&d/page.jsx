"use client";
import AirportMap from "@/components/Map/AirportMap";
import CarSkeleton from "@/components/skeletonUI/compoundElements/CarSkeleton";
import Hierarchy from "@/components/standalone/Hierarchy";
import CurrencyTab from "@/components/standalone/CurrencyTab";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import Flow from "@/components/testingComponents/Flow";
import DescriptionTile from "@/components/DescriptionTile";

const AirPage = () => {
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
  return (
    <>
      <CurrencyTab />
      <div className=" flex flex-col justify-center items-center">
        <div className="w-full flex justify-center bg-black">
          <Hierarchy />
        </div>
        <div className="min-h-[60vh] flex flex-col items-center">
          <div className=" bg-black px-8 rounded-lg my-10">
            <AirportMap />
          </div>
          <div className="mb-10">
            <Flow />
          </div>

          <div className="mb-16 mt-3">
            <DescriptionTile />
          </div>
        </div>
      </div>
    </>
  );
};

export default AirPage;
