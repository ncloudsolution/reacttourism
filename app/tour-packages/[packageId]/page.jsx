import CurrencyFullBar from "@/components/CurrencyFullBar";
import React from "react";

const PackageDetails = ({ params }) => {
  const decodedDescription = decodeURIComponent(params.packageId);
  console.log(decodedDescription, "des");
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
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
