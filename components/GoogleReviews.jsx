"use client";

import React, { useRef, useState, useEffect } from "react";

import Stars from "@/components/Stars";
import Image from "next/image";

import reviews from "@/data/reviews.json";
import SliderBtn from "@/components/SliderBtn";
import useWindowSize from "@/hooks/useWindowSize";
import Title from "@/components/standalone/Title";

// async function getReviews() {
//   const apiKey = process.env.GOOGLE_API_KEY;
//   const placeId = process.env.PLACE_ID;
//   const res = await fetch(
//     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`,
//     {
//       next: {
//         revalidate: 86400,
//       },
//     }
//   );

//   return res.json();
// }

const GoogleReviews = () => {
  //const GoogleReviews = async () => {
  // const reviewsobject = await getReviews();
  // const reviewarray = reviewsobject.result.reviews;
  // console.log(reviewarray);

  const [windowWidth, windowHeight] = useWindowSize();

  console.log("customhook", windowWidth);

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
      return 3;
    } else if (windowWidth >= 826) {
      return 2;
    } else {
      return 1;
    }
  }

  let columnSizebyScreenSizeValue = columnSizeByScreenSize();
  console.log("column size", columnSizebyScreenSizeValue);

  function hoppingSize() {
    return Math.ceil(reviews.length / columnSizebyScreenSizeValue);
  }

  const hoppingSizeValue = hoppingSize();

  const [count, setCount] = useState(0);
  console.log("count", count);
  const leftHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  };

  const rightHandler = () => {
    if (count < hoppingSizeValue - 1) {
      setCount(count + 1);
      console.log(count);
    }
  };
  // const detectWindowSize = () => {
  //   setWindowSize({ winWidth: window.innerWidth });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", detectWindowSize);
  //   console.log(windowSize);
  //   return () => {
  //     window.removeEventListener("resize", detectWindowSize);
  //   };
  // }, [windowSize]);

  console.log(columnSizebyScreenSizeValue);

  let cal;

  switch (true) {
    case columnSizebyScreenSizeValue == 3:
      cal = 100;
      break;
    case columnSizebyScreenSizeValue == 2:
      cal = 65;
      break;
    default:
      cal = 59;
  }

  console.log(
    `w-[${(windowWidth * 0.9 - cal) / columnSizebyScreenSizeValue}px]`
  );

  // const translationOffset = count > 0 ? count * -3 : 0;
  const translationOffset = count > 0 ? -24 * count : 0;
  console.log("trans", translationOffset);
  return (
    <>
      <div className="w-full flex flex-col text-center items-center">
        <Title title={"Our Client’s Reviews"} />
        <div className="flex items-center justify-center w-full">
          <div onClick={leftHandler} className="cursor-pointer">
            <SliderBtn side={"left"} />
          </div>
          <div
            ref={elementRef}
            className="w-[90%]  overflow-hidden flex border-2 border-black p-5 "
          >
            <div className="py-4 flex gap-5 ">
              {reviews.map((review, index) => (
                //{reviewarray.map((review, index) => (
                <div
                  style={{
                    transform: `translateX(-${
                      count * sliderWidth + translationOffset
                    }px)`,
                    width: `${
                      (windowWidth * 0.9 - cal) / columnSizebyScreenSizeValue
                    }px`,
                  }}
                  key={index}
                  className="flex flex-col text-left  border-[1px] border-customGray-600 p-[20px] h-[270px]  rounded-xl xxxs:shadow-xl shadow-lg translate-x-0 transition-all duration-1000 "
                >
                  <div className="flex  items-start">
                    <div className="rounded-full max-w-[50px] ">
                      <Image
                        className=""
                        src={review.profile_photo_url}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col ml-[10px] ">
                      <div className="font-semibold ">{review.author_name}</div>
                      <div className="text-customGray-900 ">
                        {review.relative_time_description}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stars count={review.rating} />
                  </div>
                  <div className="flex  break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 pr-[10px]">
                    {review.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div onClick={rightHandler} className="cursor-pointer">
            <SliderBtn side={"right"} />
          </div>
        </div>
      </div>

      {/* {reviewarray.map((review, index) => (
        <div key={index}>{review.author_name}</div>
      ))} */}
    </>
  );
};

export default GoogleReviews;
