import Image from "next/image";
import React from "react";
import ellaodyssey from "@/public/Vehicles/ellaodyssey.jpg";
import dunhindaodyssey from "@/public/Vehicles/dunhindaodyssey.jpg";
import bg from "@/public/Destinations/dest1.jpg";
import { FaAnglesRight } from "react-icons/fa6";

const page = () => {
  const places = [
    {
      img: bg,
      title: "Yala National Park",
      description:
        "Yala National Park, located in the southeastern region of Sri Lanka, is renowned for its remarkable biodiversity and abundant wildlife. Covering approximately 979 square kilometers, it is the most visited and second-largest national park in the country. The park is divided into five blocks, with Block 1 being the most accessible and popular among tourists. Yala is particularly famous for its high density of leopards, making it one of the best places in the world to spot these elusive big cats. In addition to leopards, the park is home to a variety of other animals, including elephants, sloth bears, crocodiles, and over 200 species of birds. The landscape of Yala is equally diverse, featuring dense jungles, open grasslands, lagoons, and beaches along the Indian Ocean. This unique combination of rich wildlife and scenic beauty makes Yala National Park a must-visit destination for nature enthusiasts and wildlife photographers.",
    },
  ];
  return (
    <>
      {places.map((place, index) => (
        <div
          className="xs:h-[92vh] h-[85vh] border-b-2 border-primary w-full  overflow-hidden relative"
          key={index}
        >
          <Image
            src={place.img}
            alt=""
            className="size-[100%]  object-cover object-right xs:object-center"
            key={index}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="text-white absolute 2xl:top-[50%] bxs:top-[30%]  xs:top-[35%] xxs:top-[20%] bottom-[10%] bigmd:right-[15%] left-[5%] bigmd:left-[15%] right-[5%]">
            <div className="flex flex-col gap-y-5 ">
              <div className="flex justify-between">
                <div className="bigmd:text-[60px] bxs:text-[50px] text-[30px] bigmd:leading-[60px] bxs:leading-[50px] leading-[30px]">
                  {place.title}
                </div>
                <div className="bg-primary w-[200px] hidden gap-x-1  2xl:flex justify-center items-center text-[20px] text-black rounded-md font-semibold">
                  <div>Next</div>
                  <FaAnglesRight className="text-[20px]" />
                </div>
              </div>

              <div className="bxs:text-[16px] text-[14px]">
                {place.description}
              </div>

              <div className="bg-primary w-1/2 gap-x-1 2xl:hidden py-2 flex justify-center items-center text-[20px] text-black rounded-md font-semibold">
                <div>Next</div>
                <FaAnglesRight className="text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default page;
