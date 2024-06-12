"use client";
import { TourContext } from "@/context/TourContextProvider";
import React, { useContext, useState, useEffect } from "react";
import { IoIosDoneAll } from "react-icons/io";

const DayTripTimer = () => {
  const mealOptions = ["6.00 AM", "6.30 AM", "7.00 AM", "7.30 AM"];
  const [selectedMealOption, setSelectedMealOption] = useState("");
  const { tourDetails, setTourDetails } = useContext(TourContext);

  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      selectedMealOption,
    }));
  }, [selectedMealOption, setTourDetails]);

  const handleChange = (option) => {
    setSelectedMealOption(option);
  };
  return (
    <>
      <div className="w-full flex flex-1 items-center">
        <div className="flex gap-x-6 w-full">
          {mealOptions.map((option) => (
            <div key={option} className="flex flex-row w-full items-center">
              <div
                className={` ${
                  selectedMealOption.includes(option)
                    ? "bg-primary border-none"
                    : "border-[1px] border-primary bg-transparent"
                } py-2 px-3 rounded cursor-pointer flex justify-center items-center font-semibold`}
                onClick={() => handleChange(option)}
              >
                {option}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {tourDetails.selectedMealOption && tourDetails.selectedMealOption} */}
    </>
  );
};

export default DayTripTimer;
