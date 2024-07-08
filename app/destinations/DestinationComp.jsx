"use client";
import Image from "next/image";
import React, { useState } from "react";
import yala from "@/public/Destinations/dest1.jpg";
import sigiriya from "@/public/Destinations/dest2.jpg";
import { FaAnglesRight } from "react-icons/fa6";
import { useEffect } from "react";

const DestinationComp = () => {
  const places = [
    {
      img: yala,
      title: "Yala National Park",
      description:
        "Yala National Park in southeastern Sri Lanka is famous for its biodiversity and abundant wildlife, including leopards, elephants, sloth bears, and over 200 bird species. Covering 979 square kilometers, it features diverse landscapes like jungles, grasslands, lagoons, and beaches, making it a top destination for nature lovers.",
    },
    {
      img: sigiriya,
      title: "Sigiriya",
      description:
        "Sigiriya, known as the 'Lion Rock,' is an ancient fortress in Sri Lanka's Matale District. Constructed by King Kasyapa in the 5th century, it boasts frescoes, gardens, and an iconic lion staircase. This UNESCO World Heritage Site is celebrated for its historical significance, stunning views, and remarkable engineering, attracting numerous visitors.",
    },
  ];

  const [indexCount, setIndexCount] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState(places[indexCount]);

  console.log(selectedEntry, "entry");

  useEffect(() => {
    setSelectedEntry(places[indexCount]);
  }, [indexCount]);

  const handleClick = () => {
    if (places.length - 1 > indexCount) {
      setIndexCount(indexCount + 1);
    } else {
      setIndexCount(0);
    }
  };
  return (
    <>
      {selectedEntry && (
        <div className="xs:h-[92vh] h-[85vh] border-b-2 border-primary w-full  overflow-hidden relative">
          <Image
            src={selectedEntry.img}
            alt=""
            className="size-[100%]  object-cover  xs:object-center"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          {/* <div className="text-white absolute 2xl:top-[50%] bxs:top-[30%]  xs:top-[35%] xxs:top-[20%] bottom-[10%] bigmd:right-[15%] left-[5%] bigmd:left-[15%] right-[5%]"> */}
          <div className="text-white absolute 2xl:top-[65%] bxs:top-[55%]  xs:top-[60%] xxs:top-[55%] bottom-[10%] bigmd:right-[25%] left-[5%] bigmd:left-[25%] right-[5%]">
            <div className="flex flex-col gap-y-5 ">
              <div className="flex justify-between">
                <div className="bigmd:text-[60px] bxs:text-[50px] text-[30px] bigmd:leading-[60px] bxs:leading-[50px] leading-[30px]">
                  {selectedEntry.title}
                </div>
                <div
                  onClick={handleClick}
                  className="bg-primary cursor-pointer w-[200px] hidden gap-x-1  2xl:flex justify-center items-center text-[20px] text-black rounded-md font-semibold"
                >
                  <div>Next</div>
                  <FaAnglesRight className="text-[20px]" />
                </div>
              </div>

              <div className="bxs:text-[16px] text-[14px]">
                {selectedEntry.description}
              </div>

              <div
                onClick={handleClick}
                className="bg-primary cursor-pointer w-1/2 gap-x-1 2xl:hidden py-2 flex justify-center items-center text-[20px] text-black rounded-md font-semibold"
              >
                <div>Next</div>
                <FaAnglesRight className="text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationComp;
