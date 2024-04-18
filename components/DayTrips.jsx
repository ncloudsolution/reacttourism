"use client";
import React, { useState } from "react";
import Title from "./standalone/Title";
import Link from "next/link";
import Image from "next/image";
import daytrips from "@/data/daytrips.json";
import {
  PriceLowToHigh,
  PriceHighToLow,
  PriceRange,
} from "@/libs/PriceSortings";

const DayTrips = () => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);

  const [finalFilterdArray, setFinalFilterdArray] = useState([...daytrips]);

  const handlePriceLowToHigh = () => {
    const lowToHighValue = PriceLowToHigh();
    setFinalFilterdArray(lowToHighValue);
    console.log("low to high");
  };

  const handlePriceHighToLow = () => {
    const highToLowValue = PriceHighToLow();
    setFinalFilterdArray(highToLowValue);
    console.log("high to low");
  };

  const handleSubmitRange = (e) => {
    e.preventDefault();
    const priceRangeValue = PriceRange(minVal, maxVal);
    setFinalFilterdArray(priceRangeValue);
    console.log("hi");
  };

  return (
    <div className="w-full flex flex-col text-center items-center">
      <Title title={"Day Trips"} />
      <div className="flex gap-2">
        <div className="flex gap-1 border-[1px] border-primary p-3">
          <form onSubmit={handleSubmitRange}>
            <input
              type="number"
              onChange={(e) => setMinVal(e.target.value)}
              value={minVal}
              min={0}
              className="border-[1px] border-slate-600"
            />
            <input
              type="number"
              onChange={(e) => setMaxVal(e.target.value)}
              value={maxVal}
              className="border-[1px] border-slate-600"
            />
            <input
              type="submit"
              value="submit"
              className="bg-black text-white p-2"
            />
          </form>
        </div>
        <button
          className="bg-black text-white p-2"
          onClick={handlePriceLowToHigh}
        >
          sort low to high
        </button>
        <button
          className="bg-black text-white p-2"
          onClick={handlePriceHighToLow}
        >
          sort high to low
        </button>
      </div>

      <div className="flex items-center">
        <div className="py-4 w-full grid midxl:grid-cols-4 mobile:grid-cols-3 bigmd:grid-cols-2 grid-cols-1">
          {finalFilterdArray.map((place, index) => (
            //{placearray.map((place, index) => (
            <Link
              href={`/daytrips/${index}`}
              key={index}
              className="flex flex-col text-left  overflow-hidden   bigmd:w-[300px] sm:w-[265px] xs:w-[315px] xxs:w-[275px] xxxs:w-[250px] w-[220px] h-[450px]  rounded-xl shadow-lg xxxs:m-4 m-2 transition-all duration-3000 "
            >
              <div className="h-[550px] rounded-t-lg relative overflow-hidden">
                <Image
                  src={place.img}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                  className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="px-3 py-2 flex flex-col border-2 border-transparent h-full justify-between">
                <div className="flex flex-col border-2 border-transparent">
                  <div className="uppercase text-[#63687a] font-semibold text-[14px] my-1">
                    {place.type}
                  </div>
                  <div className="font-semibold flex break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 ">
                    {place.description}
                  </div>

                  <div className="flex flex-wrap text-[14px] my-2 ">
                    <span className="font-semibold  mr-2">
                      {place.duration} hours
                    </span>
                    {place.tags.map((tag, index) => (
                      <div key={index} className="flex items-center">
                        <div className="size-[5px] rounded-full bg-black mr-[6px]" />
                        <div>{tag}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col border-2 border-transparent">
                  {place.initialPrice && (
                    <div className="font-semibold line-through text-[15px]">
                      From ${place.initialPrice}
                    </div>
                  )}
                  <div className="text-primary font-semibold text-[15px]">
                    From ${place.discountedPrice}
                    <span className="text-black ml-1 text-[14px]">
                      per person
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayTrips;
