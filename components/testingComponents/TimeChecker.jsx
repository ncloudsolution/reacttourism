import { StartTimeValidity } from "@/libs/TimeValidity";
import React from "react";

const TimeChecker = () => {
  const submittedTime = new Date("2024-04-07T10:00:00");
  const Clock = StartTimeValidity(submittedTime);
  console.log(Clock);
  return <div>TimeChecker</div>;
};

export default TimeChecker;
