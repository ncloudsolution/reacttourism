"use client";

import React, { useContext } from "react";

import { usePathname, useRouter } from "next/navigation";

import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

import { TourContext } from "@/context/TourContextProvider";

const Hierarchy = () => {
  const { tourDetails } = useContext(TourContext);
  const pathname = usePathname();
  const router = useRouter();

  const sections = [
    { name: "SEARCH", url: "/" },
    { name: "BOOKING", url: "/tourbooking" },
    { name: "DONE", url: "/tourbooking/summary" },
  ];

  const isButtonEnabled = (index) => {
    if (index === 1) {
      return tourDetails.pageTwoToken; // Enable only if pageTwoToken is true
    } else if (index === 2) {
      return tourDetails.pageThreeToken; // Enable only if pageThreeToken is true
    }
    return true; // Enable for all other sections
  };

  return (
    <div className="flex px-2">
      {sections.map((section, index) => {
        return (
          <div key={index} className="flex items-center">
            <button
              disabled={!isButtonEnabled(index)} // Disable the button if isButtonEnabled returns false
              onClick={() => router.push(section.url)} // Navigate using router.push
              className={`${
                pathname === section.url ? "text-primary" : "text-black"
              } mobile:text-[24px] md:text-[20px] sm:text-[16px] xxs:text-[14px] text-[12px] font-normal text-center`}
            >
              {section.name}
            </button>
            {index < sections.length - 1 && (
              <SlArrowRight className="xs:mx-3 sm:mx-2 mx-1 text-[16px]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Hierarchy;
