"use client";
import React, { useContext } from "react";
import { SingleVehicleContext } from "../context/SingleVehicalContextProvider";
import Link from "next/link";

const Comp2 = () => {
  const { vehicle, setVehical } = useContext(SingleVehicleContext);
  console.log("context Comp2", vehicle);
  return (
    <>
      <div>Comp2</div>
      <div className="my-3 bg-yellow-300">{vehicle.type}</div>
      <Link href={"/contactus"} className="p-3 bg-green-300">
        CLICK HERE TO CONTACT US
      </Link>
      {/* <div>{vehicle.type}</div> */}
    </>
  );
};

export default Comp2;
