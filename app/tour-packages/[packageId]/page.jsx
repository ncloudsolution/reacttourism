"use client";
import CurrencyFullBar from "@/components/CurrencyFullBar";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import TourPackageDayByDaySection from "@/components/TourPackageDayByDaySection";
import { GetAllDataOfTourPackage } from "@/libs/JsonDataCatching";
import DayTripsPriceCrad from "@/components/DayTripsPriceCrad";
import { TourContext } from "@/context/TourContextProvider";
import DayTripsForm from "@/components/DayTripsForm";
import TourPackageForm from "@/components/TourPackageForm";
import { FaSquareCheck } from "react-icons/fa6";
import { AiFillCloseSquare, AiOutlineStop } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";

const PackageDetails = ({ params }) => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const NotsuitableArray = [
    "Back problems",
    "Insect allergies",
    "Cold",
    "Kidney problems",
    "Recent surgeries",
    "Motion sickness",
    "Animal allergies",
    "Pregnant women",
    "Wheelchair user",
  ];

  const NotAllowedArray = [
    "Pets",
    "Explosive substances",
    "Nudity",
    "Fireworks",
    "Alcohol and drugs",
    "Drones",
    "Glass object",
    "Drinks in the vehicle",
    "Making noise",
    "Alcoholic drinks in the vehicle",
    "Touching/Feeding animals",
  ];
  useEffect(() => {
    setTourDetails((prevDetails) => ({
      ...prevDetails,
      converedCurrencySymbol: "$",
      currencyType: "USD",
      conversionRate: 1,
    }));
  }, [setTourDetails]);

  const decodedDescription = decodeURIComponent(params.packageId);
  console.log(decodedDescription, "des");

  const DataObject = GetAllDataOfTourPackage(decodedDescription);

  const IncludeArray = DataObject.include;
  const ExcludeArray = DataObject.exclude;

  // console.log(DataObject.price, "price");
  // const priceAsNumber = Number(DataObject.price);

  return (
    <>
      <CurrencyFullBar />
      <div className="flex w-full justify-center xs:py-8 my-2">
        <div className="flex flex-col  midxl:w-[1320px] mobile:w-[1100px] border-2 border-transparent rounded-md xxs:pb-7 xxs:px-7 pb-5 px-5">
          {/**heading**/}
          <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold translate-y-1 mb-2 bxs:mb-0">
            Tour Package
          </div>
          {/**name of package**/}
          <div className="font-semibold midxl:text-[30px] bxs:text-[26px] xs:text-[22px] text-[18px] mb-1 bxs:mb-0">
            {decodedDescription}
          </div>
          <div className="my-5 flex mobile:flex-row flex-col gap-x-5">
            <div className="midxl:w-[700px] mobile:w-[500px] w-full">
              <div className="midxl:h-[350px] bxs:h-[300px] xxs:h-[250px] xxxs:h-[200px] h-[150px] rounded-lg relative overflow-hidden mt-2 xxs:mt-0">
                <Image
                  src={DataObject.image}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              </div>
              <div className="flex flex-col my-5 ">
                <TourPackageDayByDaySection
                  experience={DataObject.experience}
                />
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <DayTripsPriceCrad
                initialPrice="null"
                discountedPrice={DataObject.discountedPrice}
              />
              <div className="grid grid-cols-1 my-7 gap-10  mobile:px-8 px-0">
                <div className="flex flex-col gap-2  w-full">
                  <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
                    Include
                  </div>
                  <div className="my-1 ">
                    {IncludeArray.map((include, index) => (
                      <div key={index}>
                        <div className=" md:text-[15px] text-[14px]  w-full py-1 flex gap-x-3">
                          <FaSquareCheck className="md:text-[20px] text-[18px]" />
                          <div className="flex flex-1">{include}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2  w-full">
                  <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
                    Exclude
                  </div>
                  <div className="my-1 ">
                    {ExcludeArray.map((exclude, index) => (
                      <div key={index}>
                        <div className=" md:text-[15px] text-[14px]  w-full py-1 flex gap-x-3">
                          <AiFillCloseSquare className="md:text-[22px] text-[20px] text-primary" />
                          <div className="flex flex-1">{exclude}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-14 gap-y-0  lg:flex-row flex-col">
            <div className="my-8 ">
              <div className="flex flex-col gap-2  midxl:w-[700px] mobile:w-[500px] w-full">
                <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
                  Not Suitable For - [ People with ]
                </div>
                <div className="my-1 grid midxl:grid-cols-3 xs:grid-cols-2 grid-cols-1 midxl:gap-x-7">
                  {NotsuitableArray.map((notSuitable, index) => (
                    <div key={index}>
                      <div className=" md:text-[15px] text-[14px]  w-full py-1 flex gap-x-3">
                        <AiOutlineStop className="md:text-[20px] text-[18px]" />
                        <div className="flex flex-1">{notSuitable}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-7">
              <div className="flex flex-col gap-2 flex-1  w-full">
                <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
                  Not Allowed
                </div>
                <div className="my-1 grid midxl:grid-cols-3 xs:grid-cols-2 grid-cols-1 midxl:gap-x-7 ">
                  {NotAllowedArray.map((notAllowed, index) => (
                    <div key={index}>
                      <div className=" md:text-[15px] text-[14px]  w-full py-1 flex gap-x-3">
                        <FaExclamationTriangle className="md:text-[20px] text-[18px] text-primary" />
                        <div className="flex flex-1">{notAllowed}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <TourPackageForm
            planPrice={DataObject.discountedPrice}
            trip={decodedDescription}
          />
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
