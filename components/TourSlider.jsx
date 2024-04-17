"use client";
import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";

import places from "@/data/places.json";
import SliderBtn from "./standalone/SliderBtn";
import useWindowSize from "@/hooks/useWindowSize";
import Title from "./standalone/Title";
import TourSliderSkeleton from "./skeletonUI/compoundElements/TourSliderSkeleton";

const TourSlider = () => {
  const [windowWidth, windowHeight] = useWindowSize();

  console.log("customhook", windowWidth);

  // unlimited scroll tile
  function generateRepeatedArray(baseArray, repetitions) {
    const result = [];
    for (let i = 0; i < repetitions; i++) {
      result.push(...baseArray);
    }

    return result;
  }
  const multiplier = 4;
  const repeatedArray = generateRepeatedArray(places, multiplier); // Repeats array 3 times
  console.log(repeatedArray);

  //array repeat over

  const elementRef = useRef(null);

  const handleResize = () => {
    if (elementRef.current) {
      setSliderWidth(elementRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const [sliderWidth, setSliderWidth] = useState(0);

  function columnSizeByScreenSize() {
    if (windowWidth >= 1400) {
      return 4;
    } else if (windowWidth >= 1150) {
      return 3;
    } else if (windowWidth >= 860) {
      return 2;
    } else {
      return 1;
    }
  }

  let columnSizebyScreenSizeValue = columnSizeByScreenSize();
  console.log("column size", columnSizebyScreenSizeValue);

  function hoppingSize() {
    return Math.ceil(repeatedArray.length / columnSizebyScreenSizeValue);
  }

  // function dottedSize() {
  //   return Math.ceil(places.length / columnSizebyScreenSizeValue);
  // }

  const hoppingSizeValue = hoppingSize();

  const [count, setCount] = useState(0);
  // const [dotcount, setDotCount] = useState(1);
  console.log("count", count);
  // console.log("dotcount", dotcount);
  const leftHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      // setDotCount((count % (multiplier + 1)) - 1);
      console.log(count);
    }
  };

  const rightHandler = () => {
    if (count < hoppingSizeValue - 1) {
      setCount(count + 1);
      // setDotCount((count % (multiplier + 1)) + 1);
      console.log(count);
      // console.log(dotcount);
    }
  };

  const translationOffset = count > 0 ? count * -3 : 0;
  console.log("trans", translationOffset);

  // const dottedSizeValue = dottedSize();

  const dots = [];
  for (let i = 0; i < hoppingSizeValue / multiplier; i++) {
    dots.push(
      <div
        key={i}
        onClick={() => {
          setCount(i);
        }}
        className={` ${
          i === count % (hoppingSizeValue / multiplier)
            ? "bg-primary"
            : "bg-slate-500"
        } size-[12px] rounded-full  flex`}
      />
    );
  }

  return (
    <>
      <div className="w-full flex flex-col text-center items-center">
        <Title title={"Our Best Promotional Tours"} />
        <div className="flex items-center">
          <div onClick={leftHandler} className="cursor-pointer">
            <SliderBtn side={"left"} />
          </div>
          <div
            ref={elementRef}
            className="midxl:w-[1330px] mobile:w-[1000px] bigmd:w-[666px] sm:w-[300px] xs:w-[350px] xxs:w-[310px] xxxs:w-[285px] w-[240px] overflow-hidden flex border-2 border-transparent  "
          >
            <div className="py-4 flex ">
              {repeatedArray.map((place, index) => (
                //{placearray.map((place, index) => (
                <div
                  style={{
                    transform: `translateX(-${
                      count * sliderWidth + translationOffset
                    }px)`,
                  }}
                  key={index}
                  className="flex flex-col text-left  overflow-hidden   bigmd:w-[300px] sm:w-[265px] xs:w-[315px] xxs:w-[275px] xxxs:w-[250px] w-[220px] h-[450px]  rounded-xl shadow xxxs:m-4 m-2 transition-all duration-3000 "
                >
                  <div className="h-[320px] rounded-lg relative ">
                    <Image
                      src={place.img}
                      alt=""
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                    />
                  </div>

                  <div className="px-[15px] xxs:text-left text-center py-[15px] text-primary hover:text-black font-semibold flex break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 pr-[10px]">
                    {place.description}
                  </div>
                  <div className="px-[15px] flex xxs:flex-row flex-col items-center mb-4">
                    <span className="pr-2 font-serif text-[24px]">
                      {place.price}
                    </span>
                    Price starts from
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div onClick={rightHandler} className="cursor-pointer">
            <SliderBtn side={"right"} />
          </div>
        </div>
        <div className="flex gap-2 flex-row bg-transparent">{dots}</div>
      </div>
    </>
  );
};

export default TourSlider;
