import React from "react";
import destination1 from "@/public/Destinations/dest1.jpeg";
import destination2 from "@/public/Destinations/dest2.jpg";
import destination3 from "@/public/Destinations/dest3.jpg";
import destination4 from "@/public/Destinations/dest4.jpg";
import destination5 from "@/public/Destinations/dest5.jpg";
import destination6 from "@/public/Destinations/dest6.jpg";
import destination7 from "@/public/Destinations/dest7.webp";
import destination8 from "@/public/Destinations/dest8.jpg";
import destination9 from "@/public/Destinations/dest9.jpg";
import destination10 from "@/public/Destinations/dest10.jpg";

import text from "@/data/text.json";

import Image from "next/image";
import Title from "./standalone/Title";

const Activity = ({ imageSrc, name }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/3 lg:1/4 xl:w-1/5">
        <div className="mx-auto mb-10 w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-[20px]">
            <Image
              src={imageSrc}
              alt=""
              className=" h-[400px] sm:h-[300px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 "
            />
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
          <Activity name="Yala National Park" imageSrc={destination1} />
          <Activity name="Sigiriya" imageSrc={destination2} />
          <Activity name="Kandy" imageSrc={destination3} />
          <Activity name="Ella" imageSrc={destination4} />
          <Activity name="Galle" imageSrc={destination5} />
          <Activity name="Nuwaraeliya" imageSrc={destination6} />
          <Activity name="Mirissa" imageSrc={destination7} />
          <Activity name="Polonnaruwa" imageSrc={destination8} />
          <Activity name="Arugambay" imageSrc={destination9} />
          <Activity name="Hortain Plains" imageSrc={destination10} />
        </div>
      </div>
    </section>
  );
};

export default Activities;
