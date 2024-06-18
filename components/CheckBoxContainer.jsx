"use client";
import { TourContext } from "@/context/TourContextProvider";
import React, { useContext, useState, useEffect } from "react";
import { IoIosDoneAll } from "react-icons/io";

const CheckBoxContainer = () => {
  const places = [
    { id: 1, place: "Anuradhapura Ancient City" },
    { id: 2, place: "Bentota Beach & Water Sport" },
    { id: 3, place: "Colombo City tour Shopping" },
    { id: 4, place: "Dambulla Cave Temple" },
    { id: 5, place: "Dolphin and Whale Watching" },
    { id: 6, place: "Elephant Back Ride at Habarana" },
    { id: 7, place: "Ella Gap Water falls" },
    { id: 8, place: "Galle Dutch Fort Beach" },
    { id: 9, place: "Hikkaduwa Beach" },
    { id: 10, place: "Hortain Plains" },
    { id: 11, place: "Kalpitiya Beach" },
    { id: 12, place: "Kandy Temple" },
    { id: 13, place: "Kithulgala Water Sport" },
    { id: 14, place: "Madu River Safari" },
    { id: 15, place: "Matale Spice Garden" },
    { id: 16, place: "Minneriya National Park" },
    { id: 17, place: "Negombo Beach" },
    { id: 18, place: "Nuwara Eliya Tea Plantation" },
    { id: 19, place: "Pinnawala Elephant Orphanage" },
    { id: 20, place: "Polonnaruwa Ancient City" },
    { id: 21, place: "Sigiriya Rock Fortress" },
    { id: 22, place: "Trincomalee Beach" },
    { id: 23, place: "Yala National Park" },
    { id: 24, place: "Other ( type in message box )" },
  ];

  const [activePlaces, setActivePlaces] = useState([]);
  const { tourDetails, setTourDetails } = useContext(TourContext);

  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      checkedPlaces: activePlaces,
    }));
  }, [activePlaces, setTourDetails]);

  const handleClick = (placeName) => {
    setActivePlaces((prevActivePlaces) => {
      if (prevActivePlaces.includes(placeName)) {
        return prevActivePlaces.filter((place) => place !== placeName);
      } else {
        return [...prevActivePlaces, placeName];
      }
    });
  };

  return (
    <>
      <div className="w-full flex ">
        <div className="grid grid-cols-1 bigmd:grid-cols-2 bigmd:gap-x-6 lg:gap-x-10 w-full">
          {places.map((list) => (
            <div key={list.id} className="flex flex-row w-full">
              <div className="lg:w-[350px] bigmd:w-[270px] w-full text-[16px] ">
                {list.place}
              </div>
              <div
                className={` ${
                  activePlaces.includes(list.place)
                    ? "bg-primary border-none"
                    : "border-[1px] border-primary bg-transparent"
                } size-[20px] rounded cursor-pointer flex justify-center items-center`}
                onClick={() => handleClick(list.place)}
              >
                {activePlaces.includes(list.place) && (
                  <IoIosDoneAll className="text-black text-[20px]" />
                )}
              </div>
            </div>
          ))}

          {/* <div className="mt-4">
        <strong>Selected Places:</strong> {activePlaces.join(", ")}
      </div> */}
        </div>
      </div>
      {/* {tourDetails.checkedPlaces &&
        tourDetails.checkedPlaces.map((place, index) => (
          <div key={index}>{place}</div>
        ))} */}
    </>
  );
};

export default CheckBoxContainer;
