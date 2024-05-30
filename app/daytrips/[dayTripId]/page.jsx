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
      <div className="flex w-full justify-center my-10">
        <div className="flex flex-col w-[1320px] border-2 border-transparent rounded-md p-5 ">
          {/**heading**/}
          <div className="text-slate-600 text-[16px] font-semibold uppercase translate-y-1">
            Day Trip
          </div>
          {/**name of package**/}
          <div className="font-semibold text-[30px]">{decodedDescription}</div>
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
          <div className="my-3 flex justify-between">
            <div className="w-[700px]">
              <div className="h-[350px] rounded-lg relative overflow-hidden">
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                  className="transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-right flex-flex-col">
                <div className="line-through text-[24px] ">
                  $ {initialPrice}
                </div>
                <div className="text-primary text-[84px] font-semibold -translate-y-6">
                  $ {discountedPrice}
                </div>
                <div className="text-[24px] font-semibold -translate-y-12">
                  Per Person
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayTripDetails;
