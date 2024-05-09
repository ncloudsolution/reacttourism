"use client";

import React, { useContext } from "react";
import { Tailwind, Button } from "@react-email/components";
import { useRouter } from "next/navigation";
import { TourContext } from "@/context/TourContextProvider";

const OwnerEmail = () => {
  const router = useRouter();
  const { tourDetails, setTourDetails } = useContext(TourContext);

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            transitionDuration: {
              2000: "2000ms",
              3000: "3000ms",
            },
            boxShadow: {
              shimmershadow: "0 0 30px 30px rgba(255, 255, 255, 0.05)",
              popshadow:
                "-2px 8px 10px 4px rgba(0, 0, 0, 0.05), 2px -8px 10px 4px rgba(0, 0, 0, 0.05)",
            },

            screens: {
              xxxs: "330px",
              xxs: "380px",
              xs: "480px",
              bxs: "540px",

              bigmd: "860px",

              mobile: "1150px",
              midxl: "1400px",

              //   'sm': '640px',
              //   'md': '768px',
              //   'lg': '1024px',
              //   'xl': '1280px',
              //   '2xl': '1536px',**/
            },
            colors: {
              primary: "#eab308",
              Secondary: "#14d01f",
              errorpink: "#be185d",
              navgray: "#93939311",
            },
          },
        },
      }}
    >
      {/* <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button> */}

      <div className="border-2 border-red-500 w-full mt-0">Hello</div>
      {tourDetails.vehicleType && (
        <div className="flex flex-col items-center">
          <div className=" rounded border-[2px] border-primary  bg-primary text-black p-4 mb-14 font-semibold gap-y-1 w-fit">
            <div className="text-center text-[30px]">Tour Summary</div>

            <div className="flex flex-col border-2 border-transparent  xs:text-[15px] xxs:text-[13px] text-[12px]">
              <div className="flex flex-col ">
                <div className="bg-transparent xs:w-[400px] xxs:w-[300px] w-[260px] -translate-y-2">
                  {/**Name**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Customer Name
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.customerName}
                    </div>
                  </div>
                  {/**Email**/}
                  <div className="flex ">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px] ">
                      Customer Email
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px] break-words">
                      {tourDetails.customerEmail}
                    </div>
                  </div>
                  {/**Mobile**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Mobile No
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.customerMobileNo}
                    </div>
                  </div>

                  <div className="border-b-[1px] border-white border-dashed my-4"></div>

                  {/**flight no**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Flight No
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.customerFlightNo}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Arrival Date
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.arrivalDate.toDateString()}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Arrival Time
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.arrivalDate.toTimeString()}
                    </div>
                  </div>

                  {/**Board Name**/}
                  {tourDetails.cusDisplayName != "" && (
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Board Name
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.cusDisplayName}
                      </div>
                    </div>
                  )}

                  <div className="border-b-[1px] border-white border-dashed my-4"></div>

                  {/**vehical**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Selected Vehicle
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.vehicleType}
                    </div>
                  </div>

                  {/**no fo passengers**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      No.of Passengers
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.noOfPassengers}
                    </div>
                  </div>
                  {/**luggages**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Luggage Count
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.customerLuggageCount}
                    </div>
                  </div>
                  {/**price**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Vehical Price
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.converedCurrencySymbol}{" "}
                      {tourDetails.convertedPrice}
                    </div>
                  </div>
                  {tourDetails.boardShow != 0 && (
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Board Show
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.converedCurrencySymbol}{" "}
                        {(
                          tourDetails.boardShow * tourDetails.conversionRate
                        ).toFixed(2)}
                      </div>
                    </div>
                  )}
                  {tourDetails.highwayExit &&
                    tourDetails.highwayExit !== "None" &&
                    tourDetails.highwayCharge !== "No any Charge" && (
                      <div className="flex">
                        <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                          Highway Charges
                        </div>
                        <div>:</div>
                        <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                          {tourDetails.converedCurrencySymbol}{" "}
                          {(
                            tourDetails.highwayCharge *
                            tourDetails.conversionRate
                          ).toFixed(2)}
                        </div>
                      </div>
                    )}

                  <div className="flex mt-3">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px] ">
                      Total Price
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal w-fit border-double border-y-4 border-black">
                      {tourDetails.converedCurrencySymbol}{" "}
                      {tourDetails.totalPrice}
                    </div>
                  </div>

                  <div className="border-b-[1px] border-white border-dashed my-4"></div>

                  {/**origin**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Origin
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.origin}
                    </div>
                  </div>
                  {/**no fo passengers**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Destination
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.destination}
                    </div>
                  </div>
                  {/**start date**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Start Date
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.startDate.toDateString()}
                    </div>
                  </div>
                  {/**start time**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Start Time
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.startDate.toTimeString()}
                    </div>
                  </div>
                  {/**return date**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Return Date
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.returnDate instanceof Date
                        ? tourDetails.returnDate.toDateString()
                        : tourDetails.returnDate}
                    </div>
                  </div>
                  {/**return time**/}
                  {tourDetails.returnDate instanceof Date && (
                    <div className="flex">
                      <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                        Return Time
                      </div>
                      <div>:</div>
                      <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                        {tourDetails.returnDate.toTimeString()}
                      </div>
                    </div>
                  )}

                  {/**distance**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Distance
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.distance}
                    </div>
                  </div>
                  {/**duration**/}
                  <div className="flex">
                    <div className="xs:w-[180px] xxs:w-[130px] w-[100px]">
                      Duration
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal xs:w-[200px] xxs:w-[150px] w-[120px]">
                      {tourDetails.duration}
                    </div>
                  </div>
                  <form>
                    <input
                      type="submit"
                      className="w-full py-2 bg-black text-white rounded-md mt-10"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Tailwind>
  );
};

export default OwnerEmail;
