"use client";
import React, { useContext } from "react";
import { SingleVehicleContext } from "../../context/SingleVehicalContextProvider";

const NewComp = () => {
  //const { vehicle, setVehical } = useContext(SingleVehicleContext);
  console.log("no context newcomp");
  return (
    <>
      <div>NewComp</div>
      {/* {vehicle && <div>{vehicle}</div>} */}
    </>
  );
};

export default NewComp;
