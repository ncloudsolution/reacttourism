"use client";
import React, { useContext } from "react";
import { TourContext } from "../../context/TourContextProvider";

const NewComp = () => {
  //const { tourDetails, setTourDetails } = useContext(TourContext);
  console.log("no context newcomp");
  return (
    <>
      <div>NewComp</div>
      {/* {tourDetails && <div>{tourDetails.type}</div>} */}
    </>
  );
};

export default NewComp;
