"use client";
import React, { useState, useRef } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import CustomDayTourDatePicker from "./CustomDayTourDatePicker";

const DayTripsForm = () => {
  const [mobValue, setMobValue] = useState();
  const [date, setDate] = useState();

  const cusMobileRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="bxs:mt-5 mt-0 w-full bg-white ">
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
                Passenger Count
              </div>
              <input
                type="number"
                min="3"
                className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                placeholder="Pssenger Count"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col w-full mobile:w-fit bg-primary gap-3 xs:px-24 px-10 mobile:py-5 py-10 rounded-lg">
            <div>
              <div className="text-[20px]">Tour Price</div>
              <div className="text-[40px] leading-[40px]">Tour Price</div>
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
