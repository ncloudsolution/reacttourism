"use client";

import React, { useRef, useState, useEffect } from "react";

import Stars from "@/components/Stars";
import Image from "next/image";

// import reviews from "@/data/reviews.json";
import SliderBtn from "@/components/SliderBtn";
import useWindowSize from "@/hooks/useWindowSize";
import Title from "@/components/standalone/Title";

const GoogleReviews = () => {
  const [windowWidth] = useWindowSize();
  const [sliderWidth, setSliderWidth] = useState(0);
  const [mounted, setMounted] = useState(false); // Track component mounting

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  console.log(process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID);
  console.log(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
  useEffect(() => {
    // const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}&fields=name,reviews&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
    const url = `/api/googlereviews`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((error) => {
        console.error("Failed to fetch Google reviews:", error.message);
        setError(error.message); // Set the error message in state
      });
  }, []);

  console.log(reviews, "reviews");

  const elementRef = useRef(null);

  const handleResize = () => {
    if (elementRef.current) {
      setSliderWidth(elementRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    handleResize();
    setMounted(true); // Set mounted to true when the component mounts
    const resizeObserver = new ResizeObserver(handleResize);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [windowWidth]);

  const columnSizeByScreenSize = () => {
    if (windowWidth >= 1420) {
      return 3;
    } else if (windowWidth >= 826) {
      return 2;
    } else {
      return 1;
    }
  };

  const columnSizebyScreenSizeValue = columnSizeByScreenSize();

  const hoppingSizeValue = Math.ceil(
    reviews.length / columnSizebyScreenSizeValue
  );

  const [count, setCount] = useState(0);

  const leftHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const rightHandler = () => {
    if (count < hoppingSizeValue - 1) {
      setCount(count + 1);
    }
  };

  let cal;
  switch (true) {
    case columnSizebyScreenSizeValue === 3:
      cal = 132;
      // cal = 116;
      break;
    case columnSizebyScreenSizeValue === 2:
      cal = 96;
      break;
    default:
      cal = 77;
  }

  const size = (windowWidth * 0.9 - cal) / columnSizebyScreenSizeValue;
  // const translationOffset =
  //   columnSizebyScreenSizeValue === 1 ? 24 * count : 20 * count;

  const translationOffset =
    // columnSizebyScreenSizeValue != 1 ? 20 * count : 24 * count;
    columnSizebyScreenSizeValue == 1
      ? 18.5 * count
      : columnSizebyScreenSizeValue == 2
      ? 20 * count
      : 20 * count;
  // : 34 * count;

  console.log(sliderWidth);

  // Don't render the actual content until the component has mounted on the client
  if (!mounted && reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col text-center items-center px-5">
      <Title title={"Our Client’s Reviews"} />
      <div className="flex items-center justify-center w-full">
        <div onClick={leftHandler} className="cursor-pointer">
          <SliderBtn side={"left"} />
        </div>

        <div className="w-[90%] flex p-5 bg-red-400">
          <div
            className="flex w-full overflow-hidden rounded-xl bg-white py-2"
            ref={elementRef}
          >
            <div className="flex gap-5 bg-white">
              {reviews.map((review, index) => (
                <div
                  style={{
                    transform: `translateX(-${
                      count * sliderWidth + translationOffset
                    }px)`,
                    width: `${size}px`,
                  }}
                  key={index}
                  className="flex bg-white flex-col border-[1px] border-gray-400 text-left p-[20px] h-[270px] rounded-xl shadow-xl translate-x-0 transition-all duration-1000"
                >
                  <div className="flex items-start">
                    <div className="rounded-full max-w-[50px]">
                      <Image
                        src={review.profile_photo_url}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col ml-[10px]">
                      <div className="font-semibold">{review.author_name}</div>
                      <div className="text-customGray-900">
                        {review.relative_time_description}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Stars count={review.rating} />
                  </div>
                  <div className="flex break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 pr-[10px]">
                    {review.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div onClick={rightHandler} className="cursor-pointer">
          <SliderBtn side={"right"} />
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
