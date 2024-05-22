import React from "react";

import girl from "@/public/contactUs/contactimg.png";

import Image from "next/image";

import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const ContactDetails = () => {
  return (
    <>
      <div className="bigmd:text-[40px] xs:text-[30px] text-[24px] font-semibold">
        Contact US
      </div>
      <div className="flex flex-col bigmd:gap-3 gap-1 bigmd:mt-10 xs:mt-3 mt-2">
        <div className="flex items-center gap-x-2 xs:text-[18px] text-[14px]">
          <FaPhoneVolume className="bigmd:text-white text-black xs:text-[20px] text-[16px]" />
          <div>+94 760 588 588</div>
        </div>
        <div className="flex items-center gap-x-2 xs:text-[18px] text-[14px]">
          <MdAttachEmail className="bigmd:text-white text-black xs:text-[20px] text-[16px]" />
          <div>ceylotaxiandtours@gmail.com</div>
        </div>
        <div className="flex items-center gap-x-2 xs:text-[18px] text-[14px]">
          <IoLocation className="bigmd:text-white text-black xs:text-[20px] text-[16px]]" />
          <div>Temple road, Rathmalana</div>
        </div>
      </div>
    </>
  );
};

const ConatactUsBanner = () => {
  return (
    <div className="border-2 border-transparent w-full flex justify-center items-center">
      <div className="shadow-lg border-transparent xs:h-[500px] xxs:h-[400px] h-[300px] w-[80%] bxs:mx-5 bxs:my-5 mx-3 my-0 rounded-lg bg-gradient-to-r from-black via-40% to-primary md:to-90%  to-60%   flex justify-between overflow-hidden relative">
        <div className="bigmd:flex hidden flex-col items-center justify-center flex-1 mx-5 my-10 text-white">
          <ContactDetails />
        </div>

        <div className="midxl:w-[500px] bigmd:w-[400px] w-full bg-white flex justify-center">
          <Image src={girl} alt="" className="flex w-fit h-full" />
        </div>
        <div className="bigmd:hidden absolute bg-[#eab308d9] w-full text-center flex flex-col items-center  text-black xs:pt-5 xs:pb-5 pt-2 pb-4 bottom-0">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default ConatactUsBanner;
