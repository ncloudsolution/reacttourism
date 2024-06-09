import CheckBoxContainer from "@/components/CheckBoxContainer";
import RadioBtnContainer from "@/components/RadioBtnContainer";
import CustomHotelDropDown from "@/components/standalone/CustomHotelDropDown";
import React from "react";

const newtesting = () => {
  const tourDetails = {
    customerName: "sohan",
    customerEmail: "a@gmail.com",
    customerMobileNo: 77,
    customerWhatsappMobileNo: 55,
    customerNicPassport: 1,
    customerFlightNo: 1,
    arrivalDate: 1,

    cusDisplayName: 1,
    origin: 1,
    destination: 1,
    startDate: new Date(),

    returnDate: new Date(),

    distance: 1,
    duration: 1,
    vehicleType: 1,
    noOfPassengers: 1,
    customerLuggageCount: 1,
    converedCurrencySymbol: 1,
    convertedPrice: 1,
    conversionRate: 1,

    boardShow: 1,
    highwayExit: 1,
    highwayCharge: 1,
    totalPrice: 1,
    totalPriceInLkr: 1,
  };
  return (
    <div>
      <RadioBtnContainer />
    </div>
  );
};

export default newtesting;
