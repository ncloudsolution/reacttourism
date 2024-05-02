"use client";
import React, { useContext, useRef, useState } from "react";
import { TourContext } from "../context/TourContextProvider";
import Image from "next/image";

import { useRouter } from "next/navigation";

const TourSummary = () => {
  const router = useRouter();

  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //const [file, setFile] = useState(null);

  const [submitError, setSubmitError] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const emailText = `New Customer Details:
Name: ${tourDetails.customerName}
Email: ${tourDetails.customerEmail}
Mobile No: ${tourDetails.customerMobileNo}
-------------------------------------------------
selected Vehicle: ${tourDetails.vehicleType}
No.of Passengers: ${tourDetails.noOfPassengers}
Requested Luggage Count: ${tourDetails.customerLuggageCount}
Estimated Price: ${tourDetails.price}
-------------------------------------------------
Origin: ${tourDetails.origin}
Destination: ${tourDetails.destination}
Start Date : ${tourDetails.startDate}
Return: ${tourDetails.returnDate}
Distance : ${tourDetails.distance}
Duration: ${tourDetails.duration}`;

    // Start loading
    setResponseMessage("");

    const formData = new FormData();
    //formData.append("file", file);
    formData.append("to", process.env.NEXT_PUBLIC_MY_EMAIL.split(",")); // Set the recipient's email here
    //formData.append("subject", "Sending you a file!");
    formData.append("text", emailText);
    formData.append("clientmail", tourDetails.customerEmail); // Set the sender's email here

    try {
      const response = await fetch("/api/bookingEmail", {
        method: "POST",
        body: formData, // FormData will be sent as `multipart/form-data`
      });
      const result = await response.json();
      console.log(result);
      //alert(result.message);
      setIsLoading(false); // Stop loading
      setResponseMessage(result.message); // Set the message from the server

      setTimeout(() => {
        router.push("/"); // Redirect to the homepage after 2 seconds
      }, 2000);

      console.log("msg send");
    } catch (error) {
      console.error("Error:", error);
      // alert("Failed to send the file.");
      setIsLoading(false); // Stop loading
      setResponseMessage("Failed to make the order. Please try again.");

      setTimeout(() => {
        router.push("/"); // Redirect to the homepage after 2 seconds
      }, 2000);
    }

    setSubmitError("");
  }

  return (
    <>
      <div className="my-4">
        {(isLoading || responseMessage) && (
          <div className="w-full h-[90vh] flex items-center justify-center">
            {/* Your form or component elements go here */}
            {isLoading && <div>Sending email...</div>}{" "}
            {/* Display a loading message */}
            {responseMessage && <div>{responseMessage}</div>}
            {/* Display the response message */}
          </div>
        )}

        {!isLoading && !responseMessage && tourDetails.vehicleType && (
          <div className="bg-transparent rounded border-[2px] border-primary p-2 mb-14 font-semibold gap-y-1 w-fit">
            <div className="text-center text-[30px]">Tour Summary</div>

            <div className="flex flex-col border-2 border-transparent bxs:my-3 my-1 bxs:text-[18px] text-[16px]">
              <div className="flex flex-col gap-x-4 border-2 border-transparent items-center">
                <div className=" flex-1  h-[200px]  flex items-center justify-center border-2 border-transparent ">
                  <Image
                    src={tourDetails.image}
                    alt=""
                    width={350}
                    height={350}
                    className="border-2 border-transparent object-cover -translate-y-10"
                  />
                </div>

                <div className="bg-transparent w-[400px] -translate-y-12">
                  {/**Name**/}
                  <div className="flex">
                    <div className="w-[150px]">Customer Name</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.customerName}
                    </div>
                  </div>
                  {/**Email**/}
                  <div className="flex">
                    <div className="w-[150px]">Customer Email</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.customerEmail}
                    </div>
                  </div>
                  {/**Mobile**/}
                  <div className="flex">
                    <div className="w-[150px]">Mobile No</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.customerMobileNo}
                    </div>
                  </div>

                  <div className="border-b-[1px] border-black border-dashed my-2"></div>

                  {/**vehical**/}
                  <div className="flex">
                    <div className="w-[150px]">selected Vehicle</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.vehicleType}
                    </div>
                  </div>
                  {/**no fo passengers**/}
                  <div className="flex">
                    <div className="w-[150px]">No.of Passengers</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.noOfPassengers}
                    </div>
                  </div>
                  {/**luggages**/}
                  <div className="flex">
                    <div className="w-[150px]">Requested Luggage Count</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.customerLuggageCount}
                    </div>
                  </div>
                  {/**price**/}
                  <div className="flex">
                    <div className="w-[150px]">Estimated Price</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">{tourDetails.price}</div>
                  </div>

                  <div className="border-b-[1px] border-black border-dashed my-2"></div>

                  {/**origin**/}
                  <div className="flex">
                    <div className="w-[150px]">Origin</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">{tourDetails.origin}</div>
                  </div>
                  {/**no fo passengers**/}
                  <div className="flex">
                    <div className="w-[150px]">Destination</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.destination}
                    </div>
                  </div>
                  {/**start date**/}
                  <div className="flex">
                    <div className="w-[150px]">Start Date</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.startDate}
                    </div>
                  </div>
                  {/**return**/}
                  <div className="flex">
                    <div className="w-[150px]">Return</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.returnDate}
                    </div>
                  </div>
                  {/**distance**/}
                  <div className="flex">
                    <div className="w-[150px]">Distance</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.distance}
                    </div>
                  </div>
                  {/**return**/}
                  <div className="flex">
                    <div className="w-[150px]">Duration</div>
                    <div>:</div>
                    <div className="ml-4 font-normal">
                      {tourDetails.duration}
                    </div>
                  </div>
                </div>
                {/* 
                //vehical
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
              //vehicalend
                 */}
              </div>

              {/****/}

              {/* <div className="flex gap-x-4 border-2 border-transparent bigmd:flex-row flex-col-reverse ">
                //customer
                <div className="mt-4 flex-1 border-2 border-transparent">
                  <div>Customer</div>
                  <div className="w-full bg-primary h-[2px] mb-4"></div>
                  <form onSubmit={handleSubmit}>
                    <div className="flex gap-y-1 flex-col">
                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:w-[180px] w-[150px] bg-transparent">
                          Passengers Name
                        </span>
                        <div className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded  ">
                          {tourDetails.customerName}
                        </div>
                      </div>

                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:w-[180px] w-[150px] bg-transparent">
                          Email
                        </span>
                        <div className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded ">
                          {tourDetails.customerEmail}
                        </div>
                      </div>

                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:w-[180px] w-[150px] bg-transparent">
                          Mobile No
                        </span>
                        <div className="shadow-md rounded  bxs:w-[220px] w-full bg-white p-1 font-normal ">
                          <div>{tourDetails.customerMobileNo}</div>
                        </div>

                        //
                    <input
                      ref={cusMobileRef}
                      placeholder="No.Passengers"
                      type="number"
                      min="1"
                      className="p-1 text-[14px] outline-none w-[220px] shadow-md rounded border-[1px] border-black "
                   //
                      </div>

                      <div className="flex bxs:w-[400px] w-full bxs:items-center bxs:flex-row flex-col bxs:my-0 my-1">
                        <span className="bxs:w-[180px] w-[150px] bg-transparent">
                          No of Luggagues
                        </span>
                        <div className="p-1 font-normal text-[14px] outline-none bxs:w-[220px] w-full shadow-md rounded ">
                          {tourDetails.customerLuggageCount}
                        </div>
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
                      // 
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
                      </div> //

                      {submitError && (
                        <div className="text-errorpink my-2 font-normal">
                          {submitError}
                        </div>
                      )}

                      <input
                        type="submit"
                        className="w-full py-2 bg-primary text-white rounded-md"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              //cusover

              //tour
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
               //tour end
              </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TourSummary;
