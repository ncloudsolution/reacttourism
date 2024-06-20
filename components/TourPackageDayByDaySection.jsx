"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

const TourPackageDayByDaySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen, "isopen");

  return (
    <div className="flex gap-5 shadow-xl rounded-lg px-10 py-8">
      <div className="w-[100px] px-4 py-2 bg-primary font-semibold text-center rounded-md h-[40px]">
        Day 1
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <div className="text-[30px] leading-[40px]">Title</div>
          <FaCaretDown
            className={`${
              isOpen ? "rotate-180" : ""
            } text-[24px] transition-all duration-700`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } text-[16px] mt-2 transition-all duration-700`}
        >
          Arrival at the Bandaranaike International Airport. Our AYUBOWAN TOURS
          & TRAVELS representative and transfer to Chilaw will welcome clients.
          Check in to the hotel and relax. Later in the afternoon, visit the
          city, the Cathedral and the Temple of Hindu Munneswaram, one of the
          four temples dedicated to Shiva the most important of the island.
          Overnight stay in Chilaw
        </div>
      </div>
    </div>
  );
};

export default TourPackageDayByDaySection;
