"use client";
import React, { useContext, useRef, useState } from "react";
import { TourContext } from "../context/TourContextProvider";
import Image from "next/image";

import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

const TourSummary = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const cusNameRef = useRef();
  const cusEmailRef = useRef();
  const cusMobileRef = useRef();
  const cusLuggageCountRef = useRef();

  const [mobValue, setMobValue] = useState();

  return (
    <>
      <div className="my-4">
        {tourDetails.vehicleType && (
          <div className="bg-transparent rounded border-[2px] border-primary p-2 mb-14 font-semibold gap-y-1 bigmd:w-[820px] bxs:w-[450px] w-[330px]">
            <div className="text-center text-[30px]">Tour Summary</div>

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
                      {tourDetails.vehicalSeatCapacity} Seats
                    </span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:w-[180px] w-[150px] bg-transparent">
                      Price
                    </span>
                    <span className="font-normal">
                      Rs.{tourDetails.price}.00
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
                  <div className="flex gap-y-1 flex-col">
                    <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Passengers Name
                      </span>
                      <input
                        ref={cusNameRef}
                        placeholder="No.Passengers"
                        type="text"
                        min="1"
                        className="p-1 text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                      />
                    </div>

                    <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Email
                      </span>
                      <input
                        ref={cusEmailRef}
                        placeholder="No.Passengers"
                        type="email"
                        className="p-1 text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                      />
                    </div>

                    <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        Mobile No
                      </span>
                      <div className="shadow-md rounded border-[1px] border-black bxs:w-[220px] w-full bg-white p-1 ">
                        <PhoneInput
                          international
                          countryCallingCodeEditable={false}
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

                      {/**
                    <input
                      ref={cusMobileRef}
                      placeholder="No.Passengers"
                      type="number"
                      min="1"
                      className="p-1 text-[14px] outline-none w-[220px] shadow-md rounded border-[1px] border-black "
                    />**/}
                    </div>

                    <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                      <span className="bxs:w-[180px] w-[150px] bg-transparent">
                        No of Luggagues
                      </span>
                      <input
                        ref={cusLuggageCountRef}
                        placeholder="No.Passengers"
                        type="number"
                        min="0"
                        className="p-1 text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded border-[1px] border-black "
                      />
                    </div>

                    <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
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

                    <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1 mb-4">
                      <span className="bxs:w-[180px] w-full bg-transparent">
                        NIC / Passport / Driving Licience
                      </span>
                      <input
                        ref={cusEmailRef}
                        placeholder="No.Passengers"
                        type="file"
                        className="text-[14px] outline-none w-[220px] rounded border-[1px] border-transparent "
                      />
                    </div>

                    <input
                      type="submit"
                      className="w-full py-2 bg-black text-white rounded-md"
                      value="Submit"
                    />
                  </div>
                </div>
                {/**customer over**/}

                {/**Tour**/}
                <div className="bigmd:w-[360px] w-full border-2 border-transparent">
                  <div className="mt-4">Tour</div>
                  <div className="w-full bg-primary h-[2px] mb-4"></div>

                  <div className="bxs:bxs:w-[400px] w-full flex ">
                    <span className="bxs:w-[180px] w-[150px] bg-transparent">
                      Origin
                    </span>
                    <span className="font-normal">{tourDetails.origin}</span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:w-[180px] w-[150px] bg-transparent">
                      Destination
                    </span>
                    <span className="font-normal">
                      {tourDetails.destination}
                    </span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:w-[180px] w-[150px] bg-transparent">
                      Distance
                    </span>
                    <span className="font-normal">{tourDetails.distance}</span>
                  </div>

                  <div className="bxs:w-[400px] w-full flex ">
                    <span className="bxs:w-[180px] w-[150px] bg-transparent">
                      Duration
                    </span>
                    <span className="font-normal">{tourDetails.duration}</span>
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
        )}
      </div>
    </>
  );
};

export default TourSummary;
