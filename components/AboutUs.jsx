import React from "react";
import Aboutus1 from "@/public/AboutUs/aboutus1.jpg";
import Aboutus2 from "@/public/AboutUs/aboutus2.webp";
import Aboutus3 from "@/public/AboutUs/aboutus3.jpg";
import text from "@/data/text.json";

import Image from "next/image";

const AboutUs = () => {
  const textcontent = text[0];

  return (
    <>
      <section className="overflow-hidden pt-[30px] pb-[30px] lg:pt-[50px] lg:pb-[50px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 px-4 saturate-150 transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <Image
                      src={Aboutus1}
                      alt="ffff"
                      className="w-full rounded-2xl "
                    />
                  </div>
                  <div className="py-3 sm:py-4 px-4 saturate-150 transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <Image
                      src={Aboutus3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2 ">
                  <div className=" py-3 z-10 my-4 px-4 saturate-150 transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <Image
                      src={Aboutus2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className=" px-4 mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  About us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-primary sm:text-[40px]/[48px] ">
                  Your Best Tour Operators
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  {textcontent.aboutus_txt1}
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  {textcontent.aboutus_txt2}
                </p>
                <a
                  href="/About"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
