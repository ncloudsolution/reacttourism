"use client";
import React, { useState, useRef, useContext, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import CustomDayTourDatePicker from "./CustomDayTourDatePicker";
import { TourContext } from "@/context/TourContextProvider";

const DayTripsForm = ({ planPrice }) => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [mobValue, setMobValue] = useState();
  const [date, setDate] = useState();

  const [noOfAdults, setNoOfAdults] = useState(1);
  const [noOfKids, setNoOfKids] = useState(0);

  useEffect(() => {
    console.log(noOfAdults, "no");
  }, [noOfAdults]);

  const cusMobileRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bxs:mt-5 mt-0 w-full bg-white ">
      <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold mb-7">
        Booking
      </div>
      <form
        className=" flex mobile:flex-row flex-col w-full mobile:gap-0 gap-5 "
        onSubmit={handleSubmit}
      >
        <div className="midxl:w-[700px] mobile:w-[500px] w-full gap-3 items-center mb-6 mobile:mb-0">
          <div className="flex flex-col sm:gap-3 gap-2 w-full">
            <div className="flex sm:flex-row flex-col w-full">
              <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                Tour Date
              </div>
              <div className="flex-row flex-1 w-full rounded outline-none ">
                <CustomDayTourDatePicker
                  selectedDate={date}
                  onChange={(date) => setDate(date)}
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full">
              <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                Passenger Name
              </div>
              <input
                placeholder="Passenger Name"
                type="text"
                className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none w-full sm:text-[16px] text-[14px]"
              />
            </div>
            <div className="flex sm:flex-row flex-col w-full">
              <div className="w-[200px] sm:text-[18px] text-[14px] font-semibold">
                Email
              </div>
              <input
                placeholder="Passenger Email"
                type="email"
                className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
              />
            </div>
            <div className="flex sm:flex-row flex-col w-full">
              <div className="w-[200px] sm:text-[18px] text-[14px] font-semibold">
                NIC/Passport No
              </div>
              <input
                placeholder="NIC/Passport No"
                type="text"
                className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
              />
            </div>

            <div className="flex sm:flex-row flex-col w-full ">
              <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                Mobile No
              </div>

              <div className="flex-row flex-1 px-3 py-1 rounded border-[1px] border-black outline-none bg-white">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  placeholder="77 123 4568"
                  defaultCountry="LK"
                  value={mobValue}
                  onChange={setMobValue}
                  className="PhoneInputInput"
                  ref={cusMobileRef}
                  error={
                    mobValue
                      ? isValidPhoneNumber(mobValue)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full">
              <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                Adult Count
              </div>
              <input
                onChange={(e) => {
                  let value = parseInt(e.target.value, 10);
                  if (value < 1) {
                    setNoOfAdults(1);
                  } else {
                    setNoOfAdults(value);
                  }
                }}
                defaultValue={1}
                value={noOfAdults}
                min="1"
                type="number"
                className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                placeholder="Pssenger Count"
              />
            </div>
            <div className="flex sm:flex-row flex-col w-full">
              <div className="w-[200px]  sm:text-[18px] text-[14px] font-semibold">
                Kids Count{" "}
                <span className="text-[14px] text-slate-400 font-normal">
                  (under 11y)
                </span>
              </div>
              <input
                onChange={(e) => {
                  let value = parseInt(e.target.value, 10);
                  if (value < 1) {
                    setNoOfKids(0);
                  } else {
                    setNoOfKids(value);
                  }
                }}
                defaultValue={0}
                value={noOfKids}
                min="1"
                type="number"
                className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                placeholder="Pssenger Count"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col w-full mobile:w-fit bg-primary gap-3 xs:px-20 px-10 mobile:py-5 py-10 rounded-lg">
            <div>
              <div className="text-[20px]">Tour Price </div>
              <div className="text-[25px] xxxs:text-[30px] xxs:text-[35px] xs:text-[40px] leading-[40px]">
                {tourDetails.converedCurrencySymbol}{" "}
                {(
                  parseFloat(
                    planPrice *
                      tourDetails.conversionRate *
                      (isNaN(noOfAdults) || noOfAdults < 1 ? 1 : noOfAdults)
                  ) +
                  parseFloat(
                    0.5 *
                      planPrice *
                      tourDetails.conversionRate *
                      (isNaN(noOfKids) || noOfKids < 1 ? 0 : noOfKids)
                  )
                ).toFixed(2)}
              </div>
            </div>

            <input
              type="submit"
              value="Confirm Tour"
              className="p-2 bg-black text-white w-full mt-3 rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DayTripsForm;
