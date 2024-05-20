import Image from "next/image";
import React from "react";

import driving from "@/public/Tiles/driving.jpg";
import card from "@/public/Tiles/card.jpg";
import door from "@/public/Tiles/door.jpg";

const DescriptionTile = () => {
  const lists = [
    {
      img: driving,
      title: "Professional Service",
      Description:
        "We use reputable airport transfer service providers employing professional and reliable drivers",
    },
    {
      img: door,
      title: "Door to Door",
      Description:
        "The Colombo airport transfer service includes meet and greet and flight monitoring. It is the most comfortable, stress-free travel option.",
    },
    {
      img: card,
      title: "Secure Booking Process",
      Description:
        "Your connection to this website issecured using 256bit encryptionand we do not store your sensitive information.",
    },
  ];
  return (
    <div className="mobile:gap-10 bigmd:gap-5  gap-10 grid bigmd:grid-cols-3 grid-cols-1">
      {lists.map((list, index) => (
        <div
          key={index}
          className="flex flex-col items-center shadow-md rounded-lg overflow-hidden"
        >
          <div className="h-[200px] mobile:w-[300px] bigmd:w-[250px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px] ">
            <Image
              src={list.img}
              alt=""
              className="size-[100%] object-cover "
            />
          </div>
          <div className="mt-5 mobile:text-[22px] bigmd:text-[18px] text-[24px] bxs:px-4">
            {list.title}
          </div>
          <div className="mobile:text-[16px] bigmd:text-[14px] text-[16px] mobile:w-[300px] bigmd:w-[250px] bxs:w-[450px] xxs:w-[316px] xxxs:w-[306px] w-[280px] text-center mt-3 mb-5 px-4">
            {list.Description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionTile;
