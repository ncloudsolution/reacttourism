"use client";
import React, { useContext } from "react";
import { TourContext } from "../../context/TourContextProvider";

const ContextCheckerComp = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  return (
    <>
      <div>
        {tourDetails.vehicleType && (
          <div className="bg-yellow-400 py-2 mb-14 font-semibold gap-y-1">
            <div>Selected Vehicle : {tourDetails.vehicleType}</div>
            <div>Seat Capacity : {tourDetails.vehicalSeatCapacity}</div>
            <div>Price : {tourDetails.price}</div>
            <div> Origin : {tourDetails.origin}</div>
            <div>Destination : {tourDetails.destination}</div>
            <div>No Of Passengers : {tourDetails.noOfPassengers}</div>
            <div className="flex gap-x-5 ">
              <div>Start Date : {tourDetails.startDate.toDateString()}</div>
              <div>Time : {tourDetails.startDate.toTimeString()}</div>
            </div>

            <div className="flex gap-x-5">
              <div>
                Return Date :
                {tourDetails.returnDate instanceof Date
                  ? tourDetails.returnDate.toDateString()
                  : tourDetails.returnDate}
              </div>
              {tourDetails.returnDate instanceof Date && (
                <div>Time : {tourDetails.returnDate.toTimeString()}</div>
              )}
            </div>

            <div> Distance : {tourDetails.distance}</div>
            <div>Duration : {tourDetails.duration}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContextCheckerComp;
