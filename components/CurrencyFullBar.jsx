"use client";
import React, { useState } from "react";
import { BsCoin } from "react-icons/bs";
import CurrencyTab from "./standalone/CurrencyTab";

const CurrencyFullBar = () => {
  const [isCurrencyActive, setIsCurrencyActive] = useState(false);
  return (
    <>
      <BsCoin
        className={` ${
          isCurrencyActive ? "translate-y-12" : "translate-y-3 "
        } text-primary bg-black rounded-full p-1 absolute  size-[40px] lg:size-[45px] lg:right-10 bigmd:right-2 sm:right-10 xxs:right-4 xxxs:right-3 right-1 z-10`}
        onClick={() => setIsCurrencyActive(!isCurrencyActive)}
      />
      {!isCurrencyActive && (
        <div className="flex items-center h-[20px] w-full bg-transparent"></div>
      )}
      {isCurrencyActive && <CurrencyTab />}
    </>
  );
};

export default CurrencyFullBar;
