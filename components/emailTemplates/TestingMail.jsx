import { Tailwind, Button } from "@react-email/components";

const TestingMail = ({ tourDetails }) => {
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
      <>
        {tourDetails.vehicleType && (
          <div className="flex flex-col items-center ">
            <div className=" rounded-xl  font-semibold gap-y-1 w-fit border-2 border-black overflow-hidden">
              <div className="bg-black  text-primary rounded-lg">
                <div className="text-center text-[30px] pt-5 pb-2 text-white border-b-2 border-white mx-5">
                  New Order Received
                </div>

                <div className="flex flex-col p-5 ">
                  <div
                    className="bg-transparent  -translate-y-2"
                    style={{
                      maxWidth: "400px",
                      width: "300px",
                      minWidth: "260px",
                    }}
                  >
                    {/**Name**/}
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "170px",
                          minWidth: "100px",
                        }}
                      >
                        Customer Name
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.customerName}
                      </div>
                    </div>
                    {/**Email**/}
                    <div className="flex ">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "170px",
                          minWidth: "100px",
                        }}
                      >
                        Customer Email
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal  break-words"
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.customerEmail}
                      </div>
                    </div>
                    {/**Mobile**/}
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "170px",
                          minWidth: "100px",
                        }}
                      >
                        Mobile No
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.customerMobileNo}
                      </div>
                    </div>
                    {/**Whatsapp**/}
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "170px",
                          minWidth: "100px",
                        }}
                      >
                        Whatsapp No
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.customerWhatsappMobileNo}
                      </div>
                    </div>

                    {/**nic**/}
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "170px",
                          minWidth: "100px",
                        }}
                      >
                        NIC / Passport No
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.customerNicPassport}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white text-black flex flex-col pt-5 overflow-hidden relative ">
                <div className="px-5">
                  {/**flight no**/}
                  <div className="flex z-10">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Flight No
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.customerFlightNo}
                    </div>
                  </div>

                  {tourDetails.arrivalDate instanceof Date && (
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "150px",
                          minWidth: "100px",
                        }}
                      >
                        Arrival Date
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.arrivalDate.toDateString()}
                      </div>
                    </div>
                  )}

                  {tourDetails.arrivalDate instanceof Date && (
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "150px",
                          minWidth: "100px",
                        }}
                      >
                        Arrival Time
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.arrivalDate.toTimeString()}
                      </div>
                    </div>
                  )}

                  {/**Board Name**/}
                  {tourDetails.cusDisplayName != "" && (
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "150px",
                          minWidth: "100px",
                        }}
                      >
                        Board Name
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.cusDisplayName}
                      </div>
                    </div>
                  )}

                  <div className="border-b-[1px] border-black border-dashed my-4"></div>

                  {/**origin**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Origin
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.origin}
                    </div>
                  </div>
                  {/**no fo passengers**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Destination
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.destination}
                    </div>
                  </div>

                  {/**start date**/}
                  {tourDetails.startDate instanceof Date && (
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "150px",
                          minWidth: "100px",
                        }}
                      >
                        Start Date
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.startDate.toDateString()}
                      </div>
                    </div>
                  )}
                  {/**start time**/}
                  {tourDetails.stratDate instanceof Date && (
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "150px",
                          minWidth: "100px",
                        }}
                      >
                        Start Time
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.startDate.toTimeString()}
                      </div>
                    </div>
                  )}
                  {/**return date**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Return Date
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.returnDate instanceof Date
                        ? tourDetails.returnDate.toDateString()
                        : tourDetails.returnDate}
                    </div>
                  </div>
                  {/**return time**/}
                  {tourDetails.returnDate instanceof Date && (
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "150px",
                          minWidth: "100px",
                        }}
                      >
                        Return Time
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
                        {tourDetails.returnDate.toTimeString()}
                      </div>
                    </div>
                  )}

                  {/**distance**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Distance
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal"
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.distance}
                    </div>
                  </div>
                  {/**duration**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Duration
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.duration}
                    </div>
                  </div>

                  <div className="border-b-[1px] border-black border-dashed my-4"></div>
                </div>

                <div className="bg-primary text-black px-5 py-6 rounded-lg">
                  {/**vehical**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Selected Vehicle
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.vehicleType}
                    </div>
                  </div>

                  {/**no fo passengers**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      No.of Passengers
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.noOfPassengers}
                    </div>
                  </div>
                  {/**luggages**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Luggage Count
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.customerLuggageCount}
                    </div>
                  </div>
                  {/**price**/}
                  <div className="flex">
                    <div
                      className=""
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Vehical Price
                    </div>
                    <div>:</div>
                    <div
                      className="ml-4 font-normal "
                      style={{
                        maxWidth: "200px",
                        width: "150px",
                        minWidth: "120px",
                      }}
                    >
                      {tourDetails.converedCurrencySymbol}{" "}
                      {tourDetails.convertedPrice}
                    </div>
                  </div>
                  {tourDetails.boardShow != 0 && (
                    <div className="flex">
                      <div
                        className=""
                        style={{
                          maxWidth: "180px",
                          width: "150px",
                          minWidth: "100px",
                        }}
                      >
                        Board Show
                      </div>
                      <div>:</div>
                      <div
                        className="ml-4 font-normal "
                        style={{
                          maxWidth: "200px",
                          width: "150px",
                          minWidth: "120px",
                        }}
                      >
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
                      <>
                        <div className="flex">
                          <div
                            className=""
                            style={{
                              maxWidth: "180px",
                              width: "150px",
                              minWidth: "100px",
                            }}
                          >
                            Highway Charges
                          </div>
                          <div>:</div>
                          <div
                            className="ml-4 font-normal "
                            style={{
                              maxWidth: "200px",
                              width: "150px",
                              minWidth: "120px",
                            }}
                          >
                            {tourDetails.converedCurrencySymbol}{" "}
                            {(
                              tourDetails.highwayCharge *
                              tourDetails.conversionRate
                            ).toFixed(2)}
                          </div>
                        </div>

                        <div className="flex">
                          <div
                            className=""
                            style={{
                              maxWidth: "180px",
                              width: "150px",
                              minWidth: "100px",
                            }}
                          >
                            Highway Exit
                          </div>
                          <div>:</div>
                          <div
                            className="ml-4 font-normal "
                            style={{
                              maxWidth: "200px",
                              width: "150px",
                              minWidth: "120px",
                            }}
                          >
                            {tourDetails.highwayExit}
                          </div>
                        </div>
                      </>
                    )}

                  <div className="flex mt-3">
                    <div
                      className=" "
                      style={{
                        maxWidth: "180px",
                        width: "150px",
                        minWidth: "100px",
                      }}
                    >
                      Total Price
                    </div>
                    <div>:</div>
                    <div className="ml-4 font-normal w-fit border-double border-y-4 border-black">
                      {tourDetails.converedCurrencySymbol}{" "}
                      {tourDetails.totalPrice}
                    </div>
                  </div>
                  <div className="flex w-full justify-start mt-5">
                    <a
                      className="p-3 bg-black text-white rounded w-fit"
                      href={`mailto:${tourDetails.customerEmail}`}
                    >
                      Connect Customer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </Tailwind>
  );
};

export default TestingMail;
