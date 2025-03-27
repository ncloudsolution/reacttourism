import Image from "next/image";
import React from "react";

import logo from "@/public/Navbar/tblogo.png";
import Link from "next/link";

import { FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const UpperFooter = () => {
  return (
    <>
      <div className="h-[980px]  xs:h-[750px] sm:h-[700px] bigmd:h-[550px]  w-full  overflow-hidden relative">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute top-0 left-0  w-full flex justify-center bigmd:py-20 py-10 ">
          <div className="text-white  flex flex-col midxl:w-[70%] w-[90%] bg-transparent items-center ">
            <div className="text-[34px] font-semibold  pb-[50px]">
              Get in Touch
            </div>
            <div className="w-full justify-around items-center grid bigmd:grid-cols-4  xs:grid-cols-2  grid-cols-1 font-medium ">
              <div className="flex flex-col text-center items-center mb-[40px]">
                <div className="bg-white rounded-full mobile:size-[150px] size-[100px] flex justify-center items-center">
                  <Image
                    src={logo}
                    alt=""
                    className="mobile:w-[120px] w-[70px]"
                  />
                </div>

                <div className="my-2">
                  {" "}
                  118/5 st Joseph street, Grandpass, Colombo 14, Sri Lanka,
                </div>
              </div>

              <div className="flex flex-col text-center mb-[40px] ">
                <Link
                  href="/airport-pickup-and-drop"
                  className="my-2 hover:text-white"
                >
                  Airport Transport
                </Link>
                <Link href="/point-to-point" className="hover:text-white">
                  Point to Point
                </Link>
                <Link
                  href="/journey-on-rails"
                  className="my-2 hover:text-white"
                >
                  Train booking
                </Link>
                <Link href="/day-trips" className="hover:text-white">
                  Day Trips
                </Link>
                <Link href="/tour-packages" className="hover:text-white my-2">
                  Tour Package
                </Link>
                <Link href="/custom-tour-package" className="hover:text-white">
                  Custom Tour
                </Link>
              </div>

              <div className="flex flex-col  text-center mb-[40px]">
                <div className="mb-2 flex justify-center gap-1">
                  Call -
                  <div>
                    +94719 885 885 <br /> +94712 100 500
                    <br /> +94781 820 820
                    <br />
                    +94781 720 720
                  </div>
                </div>
                <div className="my-2">email - Info@tourbookingsrilanka.com</div>
                <div className="my-2">web - www.tourbookingsrilanka.com</div>
              </div>

              <div className="flex flex-col text-center">
                <Link href="/" className="mb-2 hover:text-white">
                  Terms & Conditions
                </Link>
                <Link href="/" className="my-2 hover:text-white">
                  Privacy Policy
                </Link>
                {/* <Link href="/" className="my-2 hover:text-black">
                  Shipping and Exchange
                </Link> */}
              </div>
            </div>
            <div>
              <div className="flex gap-5 bigmd:mt-[30px] mt-[20px] ">
                <Link
                  target="_blank"
                  href="mailto:easycabandtours@gmail.com"
                  className="xs:size-[50px] size-[45px] bg-white rounded-full flex justify-center items-center"
                >
                  <IoIosMailUnread className="text-primary text-[32px]" />
                </Link>
                <Link
                  target="_blank"
                  href="https://web.facebook.com/easycabandtours?mibextid=ZbWKwL&_rdc=1&_rdr"
                  className="xs:size-[50px] size-[45px] bg-white  rounded-full flex justify-center items-center"
                >
                  <FaFacebookF className="text-primary text-[25px]" />
                </Link>
                <Link
                  target="_blank"
                  href="https://wa.me/+94712100500"
                  className="xs:size-[50px] size-[45px] rounded-full bg-white flex justify-center items-center"
                >
                  <BsWhatsapp className="text-primary text-[28px]" />
                </Link>
                <Link
                  target="_blank"
                  href="https://t.me/Tourbookingsrilanka"
                  className="xs:size-[50px] size-[45px]  rounded-full bg-white flex justify-center items-center"
                >
                  <FaTelegramPlane className="text-primary text-[28px] -translate-x-[2px]" />
                </Link>
                <Link
                  target="_blank"
                  href="https://youtu.be/QXXXz8MipHA"
                  className="xs:size-[50px] size-[45px]  rounded-full bg-white flex justify-center items-center"
                >
                  <FaYoutube className="text-primary text-[28px] " />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.tripadvisor.com/Attraction_Review-g1500185-d33021905-Reviews-Airport_Cab_LK-Katunayake_Negombo_Western_Province.html"
                  className="xs:size-[50px] size-[45px]  rounded-full bg-white flex justify-center items-center"
                >
                  <FaTripadvisor className="text-primary text-[28px] " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperFooter;
