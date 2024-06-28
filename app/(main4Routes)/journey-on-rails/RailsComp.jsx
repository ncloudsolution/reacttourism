"use client";

import DescriptionTile from "@/components/DescriptionTile";
import TrainMap from "@/components/Map/TrainMap";
import CarSkeleton from "@/components/skeletonUI/compoundElements/CarSkeleton";
import CurrencyTab from "@/components/standalone/CurrencyTab";
import Hierarchy from "@/components/standalone/Hierarchy";
import Flow from "@/components/standalone/Flow";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const PtoP = () => {
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
        {/* <div className="w-full flex justify-center bg-black">
          <Hierarchy />
        </div> */}
        <div className="flex flex-col items-center  -scroll-mb-14">
          <div className="mt-10 bigmd:w-[838px] bxs:w-[464px] xxxs:w-[314px] w-[294px] px-8 ">
            <TrainMap />
          </div>
          <div className="my-10">
            <Flow type={"rails"} />
          </div>

          <div className="mb-16 mt-3">
            <DescriptionTile type={"rails"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PtoP;
