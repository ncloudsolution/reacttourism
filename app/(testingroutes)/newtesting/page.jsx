import First from "@/components/testingComponents/First";
import MainMapConfigs from "@/components/Map/PointToPointMap";
import React from "react";
import TimeChecker from "@/components/testingComponents/TimeChecker";
import CustomTrainDropDown from "@/components/standalone/CustomTrainDropDown";
import CustomHighwayDropDown from "@/components/standalone/CustomHighwayDropDown";
import CustomCurrencyDropDown from "@/components/standalone/CustomCurrencyDropDown";
import BlankContext from "@/components/Exceptions/BlankContext";
import NewComp from "@/components/testingComponents/NewComp";
import OwnerEmail from "@/components/emailTemplates/OwnerEmail";
import TestingMail from "@/components/emailTemplates/TestingMail";

const newtesting = () => {
  return (
    <div>
      <TestingMail />
    </div>
  );
};

export default newtesting;
