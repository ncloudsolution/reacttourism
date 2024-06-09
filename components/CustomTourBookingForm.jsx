"use client";
import { TourContext } from "@/context/TourContextProvider";
import React, { useContext, useRef, useState } from "react";
import Processing from "./loaders&Responses/Processing";
import SuccessSubmission from "./loaders&Responses/SuccessSubmission";
import FailedSubmission from "./loaders&Responses/FailedSubmission";
import CurrencyFullBar from "./CurrencyFullBar";
import CustomDayTourDatePicker from "./CustomDayTourDatePicker";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomTourDatePicker from "./CustomTourDatePicker";
import CustomHotelDropDown from "./standalone/CustomHotelDropDown";
import CheckBoxContainer from "./CheckBoxContainer";
import RadioBtnContainer from "./RadioBtnContainer";

const CustomTourBookingForm = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [mobValue, setMobValue] = useState();
  const [whatsappMobValue, setWhatsappMobValue] = useState();
  const [arrivalDate, setArrivalDate] = useState();
  const [depatureDate, setDepatureDate] = useState();

  const [noOfAdults, setNoOfAdults] = useState(1);
  const [noOfKids, setNoOfKids] = useState(0);

  const [submitError, setSubmitError] = useState();

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const NicPassportRef = useRef(null);
  const cusMobileRef = useRef();
  const cusWhatsappRef = useRef();
  return (
    <div className="mt-0 mb-4">
      {(isLoading || responseMessage) && (
        <div className="w-full h-[90vh] flex items-center justify-center">
          {/* Your form or component elements go here */}
          {isLoading && (
            <Processing
              title={"Booking Processing"}
              msg={"order! Your request is now being processed"}
            />
          )}{" "}
          {/* Display a loading message */}
          {!isLoading && responseMessage === "Order completed Successfully" && (
            <SuccessSubmission
              title={"Booking Success"}
              msg={"Your booking has been successfully completed"}
              navtext={"New Booking"}
              img={success}
            />
          )}
          {!isLoading && responseMessage === "Failed to Send Email" && (
            <FailedSubmission
              navtext={"New Booking"}
              msg={"booking was not completed"}
            />
          )}
          {/* Display the response message */}
        </div>
      )}

      {/**normal flow**/}
      {!isLoading && !responseMessage && (
        <>
          {/* <CurrencyFullBar />  */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:gap-3 gap-2 lg:w-[800px] sm:w-[600px] bxs:w-[450px] w-full  px-[30px] sm:my-[60px] my-[30px]">
              <div className="text-[35px] text-center pb-1 mb-6 font-semibold border-b-[4px] border-primary border-dashed ">
                Plan Your Own Trip
              </div>
              <div className="flex sm:flex-row flex-col w-full ">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Arrival Date / Time
                </div>
                <div className="flex-row flex-1 w-full rounded outline-none ">
                  <CustomTourDatePicker
                    selectedDate={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    placeholder="Arrival Date"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col w-full ">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Depature Date / Time
                </div>
                <div className="flex-row flex-1 w-full rounded outline-none ">
                  <CustomTourDatePicker
                    selectedDate={depatureDate}
                    onChange={(date) => setDepatureDate(date)}
                    placeholder="Arrival Date"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col w-full">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Passenger Name
                </div>
                <input
                  ref={NameRef}
                  placeholder="Passenger Name"
                  type="text"
                  className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none w-full sm:text-[16px] text-[14px]"
                />
              </div>
              <div className="flex sm:flex-row flex-col w-full">
                <div className="w-[200px] sm:text-[18px] text-[16px] font-semibold">
                  Email
                </div>
                <input
                  ref={EmailRef}
                  placeholder="Passenger Email"
                  type="email"
                  className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                />
              </div>
              <div className="flex sm:flex-row flex-col w-full">
                <div className="w-[200px] sm:text-[18px] text-[16px] font-semibold">
                  NIC/Passport No
                </div>
                <input
                  ref={NicPassportRef}
                  placeholder="NIC/Passport No"
                  type="text"
                  className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                />
              </div>

              <div className="flex sm:flex-row flex-col w-full ">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
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
              <div className="flex sm:flex-row flex-col w-full ">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Whatsapp No
                </div>

                <div className="flex-row flex-1 px-3 py-1 rounded border-[1px] border-black outline-none bg-white">
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    placeholder="77 123 4568"
                    defaultCountry="LK"
                    value={whatsappMobValue}
                    onChange={setWhatsappMobValue}
                    className="PhoneInputInput"
                    ref={cusWhatsappRef}
                    error={
                      whatsappMobValue
                        ? isValidPhoneNumber(whatsappMobValue)
                          ? undefined
                          : "Invalid phone number"
                        : "Phone number required"
                    }
                  />
                </div>
              </div>

              <div className="flex sm:flex-row flex-col w-full">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
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
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
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
                  min="0"
                  type="number"
                  className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none sm:text-[16px] text-[14px]"
                  placeholder="Pssenger Count"
                />
              </div>
              <div className="flex sm:flex-row flex-col w-full justify-center sm:items-center items-start">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Accomodation
                  {/* <span className="text-[14px] text-slate-400 font-normal">
                    (under 11y)
                  </span> */}
                </div>
                <CustomHotelDropDown />
              </div>

              <div className="flex sm:flex-row flex-col w-full sm:items-center items-start">
                <div className="w-[200px] mt-10 sm:mt-0 sm:text-[18px] text-[16px] font-semibold">
                  Meal Type
                </div>
                <div className="sm:mt-0 mt-[2px]">
                  <RadioBtnContainer />
                </div>
              </div>

              <div className="w-full text-center  sm:text-[18px] text-[16px] font-semibold sm:mt-5 mt-10">
                Places You Would Like To Visit
              </div>
              <div className="my-5">
                <CheckBoxContainer />
              </div>

              <div className="flex sm:flex-row flex-col w-full mt-[6px]">
                <div className="w-[200px]  sm:text-[18px] text-[16px] font-semibold">
                  Special Request (if any)
                </div>
                <textarea
                  rows={5}
                  ref={NameRef}
                  placeholder="Your Requests and Ideas ..................."
                  type="text"
                  className="flex-1 px-3 py-1 rounded border-[1px] border-black outline-none w-full sm:text-[16px] text-[14px]"
                />
              </div>

              <input
                value="Submit"
                type="submit"
                className="flex-1 px-3 py-2 rounded bg-black font-semibold text-white outline-none sm:text-[18px] text-[16px] my-3"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomTourBookingForm;
