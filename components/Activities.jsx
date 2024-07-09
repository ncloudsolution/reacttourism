"use client";
import React, { useContext, useState } from "react";
import destination1 from "@/public/Destinations/dest1.jpg";
import destination2 from "@/public/Destinations/dest2.jpg";
import destination3 from "@/public/Destinations/dest3.jpg";
import destination4 from "@/public/Destinations/dest4.jpg";
import destination5 from "@/public/Destinations/dest5.jpg";
import destination6 from "@/public/Destinations/dest6.jpg";
import destination7 from "@/public/Destinations/dest7.jpg";
import destination8 from "@/public/Destinations/dest8.jpg";
import destination9 from "@/public/Destinations/dest9.jpg";
import destination10 from "@/public/Destinations/dest10.jpg";

import text from "@/data/text.json";

import Image from "next/image";
import Title from "./standalone/Title";
import { useRouter } from "next/navigation";
import { TourContext } from "@/context/TourContextProvider";

const Activity = ({ imageSrc, name, onclickfunc }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <div
        className="w-full px-4 sm:w-1/3 lg:1/4 xl:w-1/5"
        onClick={onclickfunc}
      >
        <div className="mx-auto mb-10 w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-[20px]">
            <div className="h-[400px] sm:h-[300px] relative transform hover:scale-105 cursor-pointer duration-500 transition-all">
              <Image
                src={imageSrc}
                alt=""
                className={` ${
                  imageLoaded ? "opacity-100 blur-0 " : "opacity-0 blur-lg"
                } h-full object-cover transition-all duration-500 ease-in-out  `}
                onLoadingComplete={() => setImageLoaded(true)}
              />
              <div
                className={`absolute inset-0 w-full h-full bg-gray-500 transition-all duration-500 ${
                  imageLoaded ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg ">
                <h3 className="text-base font-semibold text-white">{name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Activities = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const places = [
    {
      name: "Yala National Park",
      imageSrc: destination1,
      urlLabel: "yala-national-park",
    },
    { name: "Sigiriya", imageSrc: destination2, urlLabel: "sigiriya" },
    { name: "Kandy", imageSrc: destination3, urlLabel: "kandy" },
    { name: "Ella", imageSrc: destination4, urlLabel: "ella" },
    { name: "Galle", imageSrc: destination5, urlLabel: "galle" },
    { name: "Nuwara Eliya", imageSrc: destination6, urlLabel: "nuwara-eliya" },
    { name: "Mirissa", imageSrc: destination7, urlLabel: "mirissa" },
    { name: "Polonnaruwa", imageSrc: destination8, urlLabel: "polonnaruwa" },
    { name: "Arugambay", imageSrc: destination9, urlLabel: "arugambay" },
    {
      name: "Hortain Plains",
      imageSrc: destination10,
      urlLabel: "hortain-plains",
    },
  ];
  const router = useRouter();
  const textcontent = text[0];
  return (
    <section className="pt-[30px] pb-[30px]">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[600px] text-center">
              <Title title={"Top Activities in Sri Lanka"} />
              <p className="text-base ">{textcontent.activities_txt1}</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center">
          {/* <Activity name="Yala National Park" imageSrc={destination1} />
          <Activity name="Sigiriya" imageSrc={destination2} />
          <Activity name="Kandy" imageSrc={destination3} />
          <Activity name="Ella" imageSrc={destination4} />
          <Activity name="Galle" imageSrc={destination5} />
          <Activity name="Nuwaraeliya" imageSrc={destination6} />
          <Activity name="Mirissa" imageSrc={destination7} />
          <Activity name="Polonnaruwa" imageSrc={destination8} />
          <Activity name="Arugambay" imageSrc={destination9} />
          <Activity name="Hortain Plains" imageSrc={destination10} /> */}
          {places.map((place, index) => (
            <Activity
              name={place.name}
              imageSrc={place.imageSrc}
              key={index}
              onclickfunc={() => {
                setTourDetails((prevTourDetails) => ({
                  ...prevTourDetails,
                  placesImagePropIndex: index,
                }));
                router.push(`/destinations/${place.urlLabel}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
