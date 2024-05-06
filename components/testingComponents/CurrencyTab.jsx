import React from "react";
import CustomCurrencyDropDown from "../standalone/CustomCurrencyDropDown";

const CurrencyTab = () => {
  return (
    <div className="w-[100vw] flex justify-center">
      <div className=" bigmd:w-[778px] bxs:w-[404px] xxxs:w-[244px] w-[230px] bigmd:px-20 px-10 bg-black h-[100px] mt-2 mb-5 flex justify-center items-center rounded-lg bigmd:gap-x-12 gap-x-5 flex-col bxs:flex-row gap-y-1 py-10 bxs:py-0">
        <div className="text-white bxs:text-[24px] text-[22px] font-semibold">
          Currency
        </div>
        <div className="bigmd:w-[350px]  w-[200px] relative mb-6">
          <CustomCurrencyDropDown />
        </div>
      </div>
    </div>
  );
};

export default CurrencyTab;
