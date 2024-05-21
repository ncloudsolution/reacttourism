import First from "@/components/testingComponents/First";
import MainMapConfigs from "@/components/Map/PointToPointMap";
import React, { useContext } from "react";
import TimeChecker from "@/components/testingComponents/TimeChecker";
import CustomTrainDropDown from "@/components/standalone/CustomTrainDropDown";
import CustomHighwayDropDown from "@/components/standalone/CustomHighwayDropDown";
import CustomCurrencyDropDown from "@/components/standalone/CustomCurrencyDropDown";
import BlankContext from "@/components/Exceptions/BlankContext";
import NewComp from "@/components/testingComponents/NewComp";
import OwnerEmail from "@/components/emailTemplates/OwnerEmail";
import TestingMail from "@/components/emailTemplates/TestingMail";
import { TourContext } from "@/context/TourContextProvider";
import Flow from "@/components/testingComponents/Flow";
import Processing from "@/components/loaders&Responses/Processing";
import SuccessSubmission from "@/components/loaders&Responses/SuccessSubmission";
import FailedSubmission from "@/components/loaders&Responses/FailedSubmission";

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
      {/* <TestingMail tourDetails={tourDetails} /> */}
      <FailedSubmission />
    </div>
  );
};

export default newtesting;
