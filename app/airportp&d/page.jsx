"use client";
import AirportMap from "@/components/Map/AirportMap";
import CarSkeleton from "@/components/skeletonUI/compoundElements/CarSkeleton";
import Hierarchy from "@/components/standalone/Hierarchy";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

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
    <div className=" flex flex-col justify-center items-center">
      <div className="mt-2 mb-8 w-full flex justify-center">
        <Hierarchy />
      </div>
      <div className="min-h-[60vh] flex items-center">
        <div className=" bg-black px-8 rounded-lg">
          <AirportMap />
        </div>
      </div>
    </div>
  );
};

export default AirPage;
