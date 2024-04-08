"use client";
import React, { useContext } from "react";
import { TourContext } from "../../context/TourContextProvider";
import Link from "next/link";

const Comp2 = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  console.log("context Comp2", tourDetails);
  return (
    <>
      <div>Comp2</div>
      <div className="my-3 bg-yellow-300">{tourDetails.vehicletype}</div>
      <Link href={"/contactus"} className="p-3 bg-green-300">
        CLICK HERE TO CONTACT US
      </Link>
      {/* <div>{vehicle.type}</div> */}
    </>
  );
};

export default Comp2;
