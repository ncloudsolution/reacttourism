import CurrencyFullBar from "@/components/CurrencyFullBar";
import Image from "next/image";
import React from "react";
import TourPackageDayByDaySection from "@/components/TourPackageDayByDaySection";
import { GetAllDataOfTourPackage } from "@/libs/JsonDataCatching";

const PackageDetails = ({ params }) => {
  const decodedDescription = decodeURIComponent(params.packageId);
  console.log(decodedDescription, "des");

  const DataObject = GetAllDataOfTourPackage(decodedDescription);

  return (
    <>
      <CurrencyFullBar />
      <div className="flex w-full justify-center xs:my-5 my-2">
        <div className="flex flex-col  midxl:w-[1320px] mobile:w-[1100px] border-2 border-transparent rounded-md xxs:pb-7 xxs:px-7 pb-5 px-5">
          {/**heading**/}
          <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold translate-y-1 mb-2 bxs:mb-0">
            Tour Package
          </div>
          {/**name of package**/}
          <div className="font-semibold midxl:text-[30px] bxs:text-[26px] xs:text-[22px] text-[18px] mb-1 bxs:mb-0">
            {decodedDescription}
          </div>
          <div className="my-5 flex mobile:flex-row flex-col">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
