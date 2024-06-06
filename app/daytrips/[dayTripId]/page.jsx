import CurrencyFullBar from "@/components/CurrencyFullBar";
import DayTripsForm from "@/components/DayTripsForm";
import DayTripsPriceCrad from "@/components/DayTripsPriceCrad";
import { GetDescriptionParaData } from "@/libs/JsonDataCatching";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

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

  const allExperience = searchParams.experience; //plain text from frontend
  const decodedExperience = decodeURIComponent(allExperience); // decode
  const experienceArray = JSON.parse(decodedExperience); //convert it to again json format
  console.log(experienceArray);

  const DescriptionParagraph = GetDescriptionParaData(decodedDescription);
  console.log(DescriptionParagraph);

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
      <CurrencyFullBar />
      <div className="flex w-full justify-center xs:my-5 my-2">
        <div className="flex flex-col  midxl:w-[1320px] mobile:w-[1100px] border-2 border-transparent rounded-md xxs:pb-7 xxs:px-7 pb-5 px-5">
          {/**heading**/}
          <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold translate-y-1 mb-2 bxs:mb-0">
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

                <DayTripsPriceCrad
                  initialPrice={initialPrice}
                  discountedPrice={discountedPrice}
                />
              </div>
            </div>
          </div>

          {/**description& experince area**/}
          <div className="mobile:mt-7 bxs:mt-3 mt-0 flex mobile:flex-row flex-col items-start">
            <div className="midxl:w-[700px] mobile:w-[500px] w-full ">
              <div className="flex flex-col gap-2  w-full">
                <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
                  Description
                </div>
                <div className="my-2 ">
                  {DescriptionParagraph.map((des, index) => (
                    <div key={index}>
                      <div className=" md:text-[15px] text-[14px]  w-full py-2">
                        {des}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center mobile:ml-[100px] xs:w-fit w-full mobile:mt-0 xs:mt-10 mt-3">
              <div className=" flex flex-col gap-y-0 ">
                <div className="uppercase text-slate-600 midxl:text-[20px] xxs:text-[18px] text-[16px] font-semibold">
                  Experience
                </div>
                <div className="flex  flex-col gap-5 my-7 relative">
                  <div className="border-dashed border-[1px] border-black absolute flex flex-col h-[85%] left-[18px] -z-10"></div>
                  {experienceArray.map((experience, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-black text-primary rounded-full size-[40px]  flex justify-center items-center font-semibold xxs:text-[18px] text-[16px] ">
                        {index == 0 || index == experienceArray.length - 1 ? (
                          <FaLocationDot />
                        ) : (
                          <GoDotFill />
                        )}
                      </div>

                      <div className="flex flex-col flex-1">
                        <div className="pb-2 font-semibold xxs:text-[16px] text-[14px]">
                          {experience.heading}
                        </div>
                        <div className="xxs:text-[14px] text-[12px] w-full xs:w-3/4">
                          {experience.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/**form area**/}
          <div>
            <DayTripsForm
              planPrice={discountedPrice}
              trip={decodedDescription}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DayTripDetails;
