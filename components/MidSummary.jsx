"use client";
import React, { useContext, useRef, useState, useEffect } from "react";
import { TourContext } from "../context/TourContextProvider";
import Image from "next/image";

import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useRouter } from "next/navigation";

import otherPrices from "@/data/otherPrices.json";
import Hierarchy from "./standalone/Hierarchy";
import CustomHighwayDropDown from "./standalone/CustomHighwayDropDown";

const MidSummary = () => {
  const router = useRouter();

  const { tourDetails, setTourDetails } = useContext(TourContext);

  //const [file, setFile] = useState(null);

  const cusNameRef = useRef();
  const cusEmailRef = useRef();
  const cusMobileRef = useRef();

  const cusLuggageCountRef = useRef();

  const [mobValue, setMobValue] = useState();
  const [submitError, setSubmitError] = useState();

  const [boardShow, setBoardShow] = useState(tourDetails.boardShow || false);
  const [highwayCharge, setHighwayCharge] = useState(
    tourDetails.highwayCharge * tourDetails.conversionRate || null
  );
  const [highwayExit, setHighwayExit] = useState(
    tourDetails.highwayExit || null
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      cusNameRef.current.value === "" ||
      cusEmailRef.current.value === "" ||
      cusMobileRef.current.value === "" ||
      cusLuggageCountRef.current.value === ""

      /*file === null*/
    ) {
      return setSubmitError("Fill all the fields ");
      {
        /**& submit the reference document**/
      }
    }

    if (
      cusLuggageCountRef.current.value != 0 &&
      cusLuggageCountRef.current.value >= tourDetails.luggages
    ) {
      return setSubmitError(
        "You Exceeded the luggage maximum count of this vehical please change the luggage count or change the vehical"
      );
    }

    setTourDetails((prevDetails) => ({
      ...prevDetails,
      customerName: cusNameRef.current.value,
      customerEmail: cusEmailRef.current.value,
      customerMobileNo: cusMobileRef.current.value,
      customerLuggageCount: cusLuggageCountRef.current.value,
      boardShow: boardShow ? otherPrices[0].boardShow : "Rejected",
      totalPrice: (
        parseFloat(tourDetails.convertedPrice) +
        (boardShow
          ? parseFloat(
              (otherPrices[0]?.boardShow * tourDetails.conversionRate).toFixed(
                2
              )
            )
          : 0) +
        (highwayExit &&
        highwayExit !== "None" &&
        highwayCharge !== "No any Charge"
          ? parseFloat(highwayCharge * tourDetails.conversionRate)
          : 0)
      ).toFixed(2),
      totalLKRPrice: (
        parseFloat(tourDetails.price) +
        (boardShow ? parseFloat((otherPrices[0]?.boardShow).toFixed(2)) : 0) +
        (highwayExit &&
        highwayExit !== "None" &&
        highwayCharge !== "No any Charge"
          ? parseFloat(highwayCharge)
          : 0)
      ).toFixed(2),
      pageThreeToken: true,
    }));
    router.push("/tourbooking/summary");
  }

  // Function to handle changes in the input field for customer name
  const handleCustomerNameChange = (e) => {
    const newCustomerName = e.target.value; // Get input value
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      customerName: newCustomerName, // Update customerName in tourDetails
    }));
  };

  const handleCustomerEmailChange = (e) => {
    const newCustomerEmail = e.target.value; // Get input value
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      customerEmail: newCustomerEmail, // Update customerEmail in tourDetails
    }));
  };

  const handleLuggageCountChange = (e) => {
    const newLuggageCount = parseInt(e.target.value); // Parse input value to integer
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      customerLuggageCount: newLuggageCount,
    }));
  };

  useEffect(() => {
    console.log("ui updated");
    setHighwayCharge(tourDetails.highwayCharge);
    setHighwayExit(tourDetails.highwayExit);
  }, [tourDetails.highwayExit, tourDetails.highwayCharge]);

  return (
    <>
      <div className="my-4">
        {tourDetails.vehicleType && (
          <div className="flex flex-col items-center">
            <div className="mt-2 mb-8 w-full flex justify-center">
              <Hierarchy />
            </div>
            <div className="bg-transparent rounded border-[2px] border-primary p-2 mb-14 font-semibold gap-y-1 bigmd:w-[820px] bxs:w-[450px] w-[330px]">
              <div className="text-center text-[30px]">
                Registration Details
              </div>

              <div className="flex flex-col border-2 border-transparent bxs:my-3 my-1 bxs:text-[16px] text-[14px]">
                <div className="flex gap-x-4 border-2 border-transparent bigmd:flex-row flex-col">
                  <div className=" flex-1  h-[200px]  flex items-center justify-center border-2 border-transparent ">
                    <Image
                      src={tourDetails.image}
                      alt=""
                      width={300}
                      height={300}
                      className="border-2 border-transparent object-cover"
                    />
                  </div>

                  {/**vehicle**/}
                  <div className="border-2 border-transparent bigmd:w-[360px] w-full py-4">
                    <div className="text-[16px]">Vehicle</div>
                    <div className="w-full bg-primary h-[2px] mb-4"></div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Selected Vehicle
                      </span>
                      <span className="font-normal">
                        {tourDetails.vehicleType}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Seat Capacity
                      </span>
                      <span className="font-normal">
                        {tourDetails.vehicalSeatCapacityMax} Seats
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Price for Vehical
                      </span>
                      <span className="font-normal">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {tourDetails.convertedPrice}
                      </span>
                    </div>

                    {boardShow && (
                      <div className="bxs:w-[400px] w-full flex ">
                        <span className="bxs:w-[180px] w-[150px] bg-transparent">
                          Board Show
                        </span>
                        <span className="font-normal">
                          {tourDetails.converedCurrencySymbol}{" "}
                          {(
                            otherPrices[0].boardShow *
                            tourDetails.conversionRate
                          ).toFixed(2)}
                        </span>
                      </div>
                    )}

                    {/* 
highwayExit: station,
                    highwayCharge: highwayChargeValue, */}

                    {highwayExit &&
                      highwayExit !== "None" &&
                      highwayCharge !== "No any Charge" && (
                        <div className="bxs:w-[400px] w-full flex ">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Highway Charges
                          </span>
                          <span className="font-normal">
                            {tourDetails.converedCurrencySymbol}{" "}
                            {(
                              highwayCharge * tourDetails.conversionRate
                            ).toFixed(2)}
                          </span>
                        </div>
                      )}

                    <div className="bxs:w-[400px] w-full flex mt-2">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Total Price
                      </span>
                      <span className="font-normal border-double border-y-4  border-black">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {(
                          parseFloat(tourDetails.convertedPrice) + // Convert to float to handle potential string values
                          (boardShow
                            ? parseFloat(
                                (
                                  otherPrices[0]?.boardShow *
                                  tourDetails.conversionRate
                                ).toFixed(2)
                              ) // Apply toFixed to the product of boardShow and conversionRate
                            : 0) +
                          (highwayExit &&
                          highwayExit !== "None" &&
                          highwayCharge !== "No any Charge"
                            ? parseFloat(
                                highwayCharge * tourDetails.conversionRate
                              ) // Convert to float to handle potential string values
                            : 0)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {/**vehicle end**/}
                </div>

                {/****/}

                <div className="flex gap-x-4 border-2 border-transparent bigmd:flex-row flex-col-reverse ">
                  {/**customer**/}
                  <div className="mt-4 flex-1 border-2 border-transparent">
                    <div>Customer</div>
                    <div className="w-full bg-primary h-[2px] mb-4"></div>
                    <form onSubmit={handleSubmit}>
                      <div className="flex gap-y-1 flex-col">
                        <div className="flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 ">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Passengers Name
                          </span>
                          <input
                            onChange={handleCustomerNameChange} // Handle changes to the input field
                            ref={cusNameRef}
                            value={tourDetails.customerName}
                            placeholder="Passenger Name"
                            type="text"
                            min="1"
                            className="p-1 font-normal text-[14px] outline-none bxs:w-[240px] w-full shadow-md rounded border-[1px] border-black "
                          />
                        </div>

                        <div className="flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Email
                          </span>
                          <input
                            onChange={handleCustomerEmailChange} // Handle changes to the input field
                            value={tourDetails.customerEmail}
                            ref={cusEmailRef}
                            placeholder="Passenger Email"
                            type="email"
                            className="p-1 font-normal text-[14px] outline-none bxs:w-[240px] w-full shadow-md rounded border-[1px] border-black "
                          />
                        </div>

                        <div className="flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Mobile No
                          </span>
                          <div className="shadow-md rounded border-[1px] border-black bxs:w-[240px] w-full bg-white p-1 font-normal ">
                            <PhoneInput
                              international
                              countryCallingCodeEditable={false}
                              defaultCountry="LK"
                              value={tourDetails.customerMobileNo || mobValue}
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

                          {/**
                    <input
                      ref={cusMobileRef}
                      placeholder="No.Passengers"
                      type="number"
                      min="1"
                      className="p-1 text-[14px] outline-none w-[220px] shadow-md rounded border-[1px] border-black "
                    />**/}
                        </div>

                        <div className="flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            No of Luggagues
                          </span>
                          <input
                            value={tourDetails.customerLuggageCount}
                            onChange={handleLuggageCountChange} // Handle changes to the input field
                            ref={cusLuggageCountRef}
                            placeholder="No.Luggages"
                            type="number"
                            min="0"
                            className="p-1 font-normal text-[14px] outline-none bxs:w-[240px] w-full shadow-md rounded border-[1px] border-black "
                          />
                        </div>

                        <div className="flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            No of Passengers
                          </span>
                          <span className="font-normal">
                            {tourDetails.noOfPassengers}{" "}
                            {tourDetails.noOfPassengers == 1
                              ? "Passenger"
                              : "Passengers"}
                          </span>
                        </div>

                        <div className="flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                          <span className="bxs:w-[180px] w-full bg-transparent bxs:mb-0 mb-1">
                            Board Show
                            <span className="text-gray-400 text-[12px] font-normal ml-2">
                              {tourDetails.converedCurrencySymbol}{" "}
                              {(
                                otherPrices[0].boardShow *
                                tourDetails.conversionRate
                              ).toFixed(2)}
                            </span>
                          </span>

                          <div className="flex flex-1 text-center gap-x-3 font-normal text-[14px] outline-none bxs:w-[220px] w-full  rounded  ">
                            <div
                              onClick={() => {
                                if (!boardShow) {
                                  setBoardShow(true);
                                }
                              }}
                              className={` ${
                                boardShow
                                  ? "bg-primary text-black shadow-md "
                                  : "border-[1px] border-black"
                              } w-full p-1 rounded transition-all duration-500 hover:cursor-pointer`}
                            >
                              Accept
                            </div>
                            <div
                              onClick={() => {
                                if (boardShow) {
                                  setBoardShow(false);
                                }
                              }}
                              className={` ${
                                !boardShow
                                  ? "bg-primary text-black shadow-md"
                                  : "border-[1px] border-black"
                              } w-full p-1 rounded transition-all duration-500 hover:cursor-pointer`}
                            >
                              Reject
                            </div>
                          </div>
                        </div>

                        <div className=" flex bxs:w-[420px] w-full bxs:items-center bxs:flex-row flex-col bxs:mt-2 bxs:my-0 my-1 justify-center">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Highway Exit
                          </span>
                          <div className="bxs:w-[240px] w-full relative">
                            <CustomHighwayDropDown />
                          </div>
                        </div>

                        {/* 
                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 mb-4">
                        <span className="bxs:w-[180px] pr-3 w-full bg-transparent">
                          NIC / Passport / Driving Licience
                        </span>
                        <input
                          placeholder="No.Passengers"
                          type="file"
                          className="text-[14px] font-normal outline-none w-[220px] rounded border-[1px] border-transparent "
                          onChange={(e) => setFile(e.target.files?.[0])}
                        />
                      </div> */}

                        {submitError && (
                          <div className="text-errorpink my-2 font-normal">
                            {submitError}
                          </div>
                        )}

                        <input
                          type="submit"
                          className="w-full py-2 my-3 bg-black text-white rounded-md"
                          value="Next"
                        />
                      </div>
                    </form>
                  </div>
                  {/**customer over**/}

                  {/**Tour**/}
                  <div className="bigmd:w-[380px] w-full border-2 border-transparent">
                    <div className="mt-4">Tour</div>
                    <div className="w-full bg-primary h-[2px] mb-4"></div>

                    <div className="bxs:w-[400px] w-full  flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Origin
                      </span>
                      <span className="font-normal  bxs:w-[200px] w-[150px]">
                        {tourDetails.origin}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent ">
                        Destination
                      </span>
                      <span className="font-normal bxs:w-[200px] w-[150px] ">
                        {tourDetails.destination}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Distance
                      </span>
                      <span className="font-normal">
                        {tourDetails.distance}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Duration
                      </span>
                      <span className="font-normal">
                        {tourDetails.duration}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex mt-4 mb-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Pickup Date
                      </span>
                      <span className="font-normal">
                        {tourDetails.startDate.toDateString()}
                      </span>
                    </div>
                    <div className="bxs:w-[400px] w-full flex ">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Pickup Time
                      </span>
                      <span className="bxs:w-[180px] w-[150px] font-normal">
                        {tourDetails.startDate.toTimeString()}
                      </span>
                    </div>

                    <div className="bxs:w-[400px] w-full flex mt-4 mb-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Return Date
                      </span>
                      <div className="bxs:w-[180px] w-[150px] font-normal">
                        {tourDetails.returnDate instanceof Date
                          ? tourDetails.returnDate.toDateString()
                          : tourDetails.returnDate}
                      </div>
                    </div>
                    <div className="bxs:w-[400px] w-full flex">
                      {tourDetails.returnDate instanceof Date && (
                        <div className="flex">
                          <span className="bxs:w-[180px] w-[150px] bg-transparent">
                            Return Time
                          </span>
                          <div className="bxs:w-[180px] w-[150px] font-normal">
                            {tourDetails.returnDate.toTimeString()}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/**Tour end**/}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MidSummary;
