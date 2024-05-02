"use client";

import React, { useContext } from "react";

import { usePathname } from "next/navigation";

import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

import { TourContext } from "@/context/TourContextProvider";

const Hierarchy = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const Pathname = usePathname();

  const sections = [
    { name: "SEARCH", url: "/" },
    { name: "BOOKING", url: "/tourbooking" },
    { name: "DONE", url: "/tourbooking/summary" },
  ];

  return (
    <div className="flex px-2">
      {sections.map((section, index) => (
        <div key={index} className="flex items-center ">
          <Link
            href={section.url}
            className={`  ${
              Pathname === section.url ? "text-primary" : "text-black"
            } mobile:text-[24px] md:text-[20px] sm:text-[16px] xxs:text-[14px] text-[12px] font-normal text-center`}
          >
            {section.name}
          </Link>
          {index < 2 && (
            <SlArrowRight className="xs:mx-3 sm:mx-2 mx-1 text-[16px] " />
          )}
        </div>
      ))}
    </div>
  );
};

export default Hierarchy;
