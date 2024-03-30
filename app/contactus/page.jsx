"use client";
import { SingleVehicleContext } from "@/context/SingleVehicalContextProvider";
import Link from "next/link";
import React, { useContext } from "react";

const Contact = () => {
  const { vehicle, setVehical } = useContext(SingleVehicleContext);
  return (
    <>
      <div className="my-3">page contact</div>

      <div className="my-3 bg-yellow-300">{vehicle.type}</div>

      <Link href={"/"} className="p-3 bg-green-300">
        CLICK HERE tO HOME
      </Link>
    </>
  );
};

export default Contact;
