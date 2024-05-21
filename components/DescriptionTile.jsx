import Image from "next/image";
import React from "react";

import driving from "@/public/Tiles/driving.jpg";
import card from "@/public/Tiles/card.jpg";
import door from "@/public/Tiles/door.jpg";
import lowprice from "@/public/Tiles/lowprice.webp";
import tour from "@/public/Tiles/tour.webp";

const DescriptionTile = () => {
  const lists = [
    {
      img: lowprice,
      title: "Always Low Prices",
      Description:
        "Your safety is our priority and your comfort, our satisfaction. We compare prices from hundreds of reputable transportation service providers in Colombo to offer you the best service at most competitive rates. ",
    },
    // {
    //   img: driving,
    //   title: "Professional Service",
    //   Description:
    //     "We use reputable airport transfer service providers employing professional and reliable drivers",
    // },
    {
      img: door,
      title: "Door to Door",
      Description:
        "The Colombo airport transfer service includes meet and greet and flight monitoring. It is the most comfortable, stress-free travel option, ensuring punctuality and personalized assistance.",
    },
    {
      img: tour,
      title: "Tours and Excursions",
      Description:
        "We specialise in airport transfers, cruise port transfers and chauffeur-driven car hire by the hour. Book your tour online, or contact us to create your perfect private custom tour or excursion, with or without a guide.",
    },
    {
      img: card,
      title: "Secure Booking Process",
      Description:
        "Your connection to this website is secured using 256-bit encryption, and we do not store your sensitive information, ensuring complete privacy and peace of mind for all transactions.",
    },
  ];
  return (
    <div className="px-5 xl:gap-10 bigmd:gap-x-10  gap-10 grid xl:grid-cols-4 bigmd:grid-cols-2  grid-cols-1">
      {lists.map((list, index) => (
        <div
          key={index}
          className="flex flex-col items-center shadow-md rounded-lg overflow-hidden"
        >
          <div className="h-[200px] mobile:w-[300px] bigmd:w-[400px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px] ">
            <Image
              src={list.img}
              alt=""
              className="size-[100%] object-cover "
            />
          </div>
          <div className="mt-5 text-center mobile:text-[22px] bigmd:text-[18px] text-[24px] bxs:px-4 mobile:w-[300px] bigmd:w-[400px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px]">
            {list.title}
          </div>
          <div className="text-[14px]  mobile:w-[300px] bigmd:w-[400px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px] text-center mt-3 mb-6 px-4">
            {list.Description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionTile;
