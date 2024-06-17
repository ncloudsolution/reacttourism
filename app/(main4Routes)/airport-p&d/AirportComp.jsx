"use client";
import AirportMap from "@/components/Map/AirportMap";
import CarSkeleton from "@/components/skeletonUI/compoundElements/CarSkeleton";
import Hierarchy from "@/components/standalone/Hierarchy";
import CurrencyTab from "@/components/standalone/CurrencyTab";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import Flow from "@/components/standalone/Flow";
import DescriptionTile from "@/components/DescriptionTile";

const AirportComp = () => {
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
      <div className=" flex flex-col justify-center items-center ">
        <div className="w-full flex justify-center bg-black">
          <Hierarchy />
        </div>
        <div className="flex flex-col items-center  -scroll-mb-14">
          <div className="mt-10 bigmd:w-[838px] bxs:w-[464px] xxxs:w-[314px] w-[294px] px-8 ">
            <AirportMap />
          </div>
          <div className="my-10">
            <Flow />
          </div>

          <div className="mb-16 mt-3">
            <DescriptionTile type={"airport"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AirportComp;
