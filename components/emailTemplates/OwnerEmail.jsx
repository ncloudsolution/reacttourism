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
      <div style={styles.container}>
        <div className="border-2 border-red-500 w-full mt-0">Hello</div>
        {tourDetails.vehicleType && (
          <div className="flex flex-col items-center">
            <div className="rounded border-[2px] border-primary bg-primary text-black p-4 mb-14 font-semibold gap-y-1 w-fit">
              <div className="text-center text-[30px]">Tour Summary</div>
              <div
                className="flex flex-col border-2 border-transparent"
                style={styles.mediaQueryContainer}
              >
                <div className="flex flex-col ">
                  <div className="bg-transparent" style={styles.innerContainer}>
                    <div className="flex">
                      <div style={styles.label}>Customer Name</div>
                      <div>:</div>
                      <div style={styles.value}>{tourDetails.customerName}</div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Customer Email</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.customerEmail}
                      </div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Mobile No</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.customerMobileNo}
                      </div>
                    </div>
                    <div className="border-b-[1px] border-white border-dashed my-4"></div>
                    <div className="flex">
                      <div style={styles.label}>Flight No</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.customerFlightNo}
                      </div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Arrival Date</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.arrivalDate.toDateString()}
                      </div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Arrival Time</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.arrivalDate.toTimeString()}
                      </div>
                    </div>
                    {tourDetails.cusDisplayName !== "" && (
                      <div className="flex">
                        <div style={styles.label}>Board Name</div>
                        <div>:</div>
                        <div style={styles.value}>
                          {tourDetails.cusDisplayName}
                        </div>
                      </div>
                    )}
                    <div className="border-b-[1px] border-white border-dashed my-4"></div>
                    <div className="flex">
                      <div style={styles.label}>Selected Vehicle</div>
                      <div>:</div>
                      <div style={styles.value}>{tourDetails.vehicleType}</div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>No.of Passengers</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.noOfPassengers}
                      </div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Luggage Count</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.customerLuggageCount}
                      </div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Vehicle Price</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.converedCurrencySymbol}{" "}
                        {tourDetails.convertedPrice}
                      </div>
                    </div>
                    {tourDetails.boardShow !== 0 && (
                      <div className="flex">
                        <div style={styles.label}>Board Show</div>
                        <div>:</div>
                        <div style={styles.value}>
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
                          <div style={styles.label}>Highway Charges</div>
                          <div>:</div>
                          <div style={styles.value}>
                            {tourDetails.converedCurrencySymbol}{" "}
                            {(
                              tourDetails.highwayCharge *
                              tourDetails.conversionRate
                            ).toFixed(2)}
                          </div>
                        </div>
                      )}
                    <div className="flex mt-3">
                      <div style={styles.label}>Total Price</div>
                      <div>:</div>
                      <div style={styles.totalPrice}>
                        {tourDetails.converedCurrencySymbol}{" "}
                        {tourDetails.totalPrice}
                      </div>
                    </div>
                    <div className="border-b-[1px] border-white border-dashed my-4"></div>
                    <div className="flex">
                      <div style={styles.label}>Origin</div>
                      <div>:</div>
                      <div style={styles.value}>{tourDetails.origin}</div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Destination</div>
                      <div>:</div>
                      <div style={styles.value}>{tourDetails.destination}</div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Start Date</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.startDate.toDateString()}
                      </div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Start Time</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.startDate.toTimeString()}
                      </div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Return Date</div>
                      <div>:</div>
                      <div style={styles.value}>
                        {tourDetails.returnDate instanceof Date
                          ? tourDetails.returnDate.toDateString()
                          : tourDetails.returnDate}
                      </div>
                    </div>
                    {tourDetails.returnDate instanceof Date && (
                      <div className="flex">
                        <div style={styles.label}>Return Time</div>
                        <div>:</div>
                        <div style={styles.value}>
                          {tourDetails.returnDate.toTimeString()}
                        </div>
                      </div>
                    )}
                    <div className="flex">
                      <div style={styles.label}>Distance</div>
                      <div>:</div>
                      <div style={styles.value}>{tourDetails.distance}</div>
                    </div>
                    <div className="flex">
                      <div style={styles.label}>Duration</div>
                      <div>:</div>
                      <div style={styles.value}>{tourDetails.duration}</div>
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
      </div>
    </Tailwind>
  );
};

const styles = {
  container: {
    width: "100%",
  },
  button: {
    backgroundColor: "#007291",
    padding: "8px 12px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  },
  mediaQueryContainer: {
    width: "100%",
    "@media (min-width: 380px)": {
      width: "300px",
    },
    "@media (min-width: 480px)": {
      width: "260px",
    },
    // Add more media queries as needed
  },
  innerContainer: {
    width: "100%",
    "@media (min-width: 380px)": {
      width: "130px",
    },
    "@media (min-width: 480px)": {
      width: "150px",
    },
    // Add more media queries as needed
  },
  label: {
    width: "200px", // Adjust width as needed
  },
  value: {
    marginLeft: "4px", // Adjust spacing as needed
  },
  totalPrice: {
    border: "double",
    borderBottomWidth: "4px",
    borderColor: "black",
    width: "fit-content",
  },
};

export default OwnerEmail;
