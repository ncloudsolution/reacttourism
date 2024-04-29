"use client";
import AirportMap from "@/components/Map/AirportMap";
import CarSkeleton from "@/components/skeletonUI/compoundElements/CarSkeleton";
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
    <div className="xs:min-h-[90vh] min-h-[70vh] flex justify-center items-center">
      <div className=" -translate-y-9">
        <AirportMap />
      </div>
    </div>
  );
};

export default AirPage;
