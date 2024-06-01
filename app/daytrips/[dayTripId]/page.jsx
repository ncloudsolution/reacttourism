import DayTripsForm from "@/components/DayTripsFoRm";
import Image from "next/image";
import React from "react";

const DayTripDetails = ({ params, searchParams }) => {
  const decodedDescription = decodeURIComponent(params.dayTripId);

  const type = searchParams.type;
  const minDuration = searchParams.minduration;
  const maxDuration = searchParams.maxduration;
  const initialPrice = searchParams.initialPrice;
  const discountedPrice = searchParams.discountedPrice;
  const img = searchParams.img;

  const allTags = searchParams.tags;
  const decodedTagsString = decodeURIComponent(allTags);
  const tagsArray = decodedTagsString.split(",");
  console.log(tagsArray); // Output: ["Small Groups", "Pickup available"]

  return (
    <>
      {/* <div>Description : {decodedDescription}</div>
      <div>type : {type}</div>
      <div>Min duration : {minDuration}</div>
      <div>Max duration : {maxDuration}</div>
      <div>Initial Price : {initialPrice}</div>
      <div>Discounded Price : {discountedPrice}</div>

      <div>
        Tags:
        {tagsArray.map((tag, index) => (
          <div key={index} className="flex items-center">
            <div>{tag}</div>
          </div>
        ))}
      </div>

      <Image alt="" src={searchParams.img} width={300} height={300} /> */}
      <div className="flex w-full justify-center xs:my-10 my-2">
        <div className="flex flex-col  midxl:w-[1320px] mobile:w-[1100px] border-2 border-transparent rounded-md xxs:py-7 xxs:px-7 py-5 px-5">
          {/**heading**/}
          <div className="text-slate-600 text-[16px] font-semibold uppercase translate-y-1 mb-2 bxs:mb-0">
            Day Trip
          </div>
          {/**name of package**/}
          <div className="font-semibold midxl:text-[30px] bxs:text-[26px] xs:text-[22px] text-[18px] mb-1 bxs:mb-0">
            {decodedDescription}
          </div>
          {/**tag list**/}
          <div className="flex gap-3 my-1">
            {tagsArray.map((tag, index) => (
              <div key={index} className="flex items-center ">
                <div className="px-3 py-1 bg-slate-200 rounded text-[14px] ">
                  {tag}
                </div>
              </div>
            ))}
          </div>
          {/**image area and pricing**/}
          <div className="my-3 flex mobile:flex-row flex-col">
            <div className="midxl:w-[700px] mobile:w-[500px] w-full">
              <div className="midxl:h-[350px] bxs:h-[300px] xxs:h-[250px] xxxs:h-[200px] h-[150px] rounded-lg relative overflow-hidden mt-2 xxs:mt-0">
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center mobile:ml-[100px] xs:w-fit w-full mobile:mt-0 xs:mt-10 mt-3">
              <div className=" flex flex-col gap-y-0 ">
                <div className="border-2 border-transparent flex-col shadow-lg xs:px-8 px-4 xxxs:pt-8 pt-5 rounded-lg">
                  <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
                    {type}
                  </div>

                  <div className="flex gap-2 text-primary midxl:text-[44px] xxs:text-[36px] text-[30px] font-semibold midxl:-translate-y-3 -translate-y-2">
                    <div>{minDuration}</div>
                    {maxDuration != "null" && (
                      <div>
                        {" - "} {maxDuration}
                      </div>
                    )}
                    <div>hours</div>
                  </div>
                </div>

                <div className="border-2 border-transparent xs:px-8 px-4 xs:py-8 py-5  rounded-lg">
                  <div className="flex gap-3 ">
                    <div className="midxl:text-[24px] xxs:text-[22px] text-[20px] font-serif ">
                      Per Person
                    </div>
                    {initialPrice != "null" && (
                      <div className="line-through midxl:text-[24px] xxs:text-[22px] text-[20px] font-semibold">
                        $ {initialPrice}
                      </div>
                    )}
                  </div>

                  <div className="text-primary midxl:text-[84px] xxs:text-[70px] text-[50px] font-semibold leading-[80px] xxs:translate-y-0 -translate-y-3 ">
                    $ {discountedPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**form area**/}
          <div>
            <DayTripsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default DayTripDetails;
