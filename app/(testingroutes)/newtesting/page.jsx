"use client";

import CheckBoxContainer from "@/components/CheckBoxContainer";
import DayTripTimer from "@/components/DayTripTimer";
import RadioBtnContainer from "@/components/RadioBtnContainer";
import CustomHotelDropDown from "@/components/standalone/CustomHotelDropDown";
import React, { useContext } from "react";
import customTourTransport from "@/data/customTourTransport.json";
import { GetCustomTourCheckedItems } from "@/libs/JsonDataCatching";
import { TourContext } from "@/context/TourContextProvider";

const Page = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  // const tourDetails = {
  //   customerName: "sohan",
  //   customerEmail: "a@gmail.com",
  //   customerMobileNo: 77,
  //   customerWhatsappMobileNo: 55,
  //   customerNicPassport: 1,
  //   customerFlightNo: 1,
  //   arrivalDate: 1,

  //   cusDisplayName: 1,
  //   origin: 1,
  //   destination: 1,
  //   startDate: new Date(),

  //   returnDate: new Date(),

  //   distance: 1,
  //   duration: 1,
  //   vehicleType: 1,
  //   noOfPassengers: 1,
  //   customerLuggageCount: 1,
  //   converedCurrencySymbol: 1,
  //   convertedPrice: 1,
  //   conversionRate: 1,

  //   boardShow: 1,
  //   highwayExit: 1,
  //   highwayCharge: 1,
  //   totalPrice: 1,
  //   totalPriceInLkr: 1,
  // };
  return (
    <div>
      <CheckBoxContainer
        contextName="transportationRequirement"
        identifier="type"
        Selectfunction={GetCustomTourCheckedItems([...customTourTransport])}
      />

      <div>sss {tourDetails.transportationRequirement?.join(", ")}</div>
    </div>
  );
};

export default Page;
