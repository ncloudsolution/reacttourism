import Image from "next/image";
import React from "react";
import ellaodyssey from "@/public/Vehicles/ellaodyssey.jpg";
import dunhindaodyssey from "@/public/Vehicles/dunhindaodyssey.jpg";

const page = () => {
  const trainCardDetails = [
    {
      trainName: "Ella Odyssey",
      img: ellaodyssey,
      stops: [
        "Horsetail Waterfall view point - (2 minutes)",
        "Sri Pada (Adam's Peak) view point - (2 minutes)",
        "St Clair Waterfall view point - (2 minutes)",
        "Elgin Waterfall view point - (2 minutes)",
        "Sumit Level - (2 minutes)",
        "No 18 Tunnel - (3 minutes)",
        "Kithal Ella Waterfall view point - (3 minutes)",
        "Nine Arches Bridge - (10 minutes)",
      ],
    },
    {
      trainName: "Dunhinda Odyssey",
      img: dunhindaodyssey,
      stops: [
        "Horsetail Waterfall view point - (2 minutes)",
        "Sri Pada (Adam's Peak) view point - (2 minutes)",
        "St Clair Waterfall view point - (2 minutes)",
        "Elgin Waterfall view point - (2 minutes)",
        "Sumit Level - (2 minutes)",
        "No 18 Tunnel - (3 minutes)",
        "Kithal Ella Waterfall view point - (3 minutes)",
        "Nine Arches Bridge - (10 minutes)",
        "Windbreak",
        "Demodara Tunnel & Bridge",
      ],
    },
  ];
  return (
    <div className="flex bigmd:w-[900px] w-full items-center">
      <div className="py-4 px-10 w-full h-full grid bigmd:grid-cols-2 grid-cols-1 gap-5">
        {trainCardDetails.map((train, index) => {
          return (
            <div key={index} className="flex flex-col w-full">
              <div className=" h-[320px]  rounded-t-lg relative overflow-hidden ">
                <Image
                  src={train.img}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                  className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute z-50 bg-primary font-semibold text-black w-full py-2 bottom-0 text-center text-[22px]">
                  {train.trainName}
                </div>
              </div>

              <div className="px-5 py-3 flex flex-col flex-1  shadow-md border-[3px] border-t-0 rounded-t-none border-primary rounded-xl">
                <div className="flex flex-col border-2 border-transparent">
                  <div className="font-semibold flex break-keep overflow-y-auto scrollbar-thin scrollbar-thumb-customGray-900 scrollbar-track-customGray-400 ">
                    {train.name}
                  </div>
                </div>

                <div className="flex  flex-col border-2 border-transparent">
                  <div className="text-black font-semibold text-[15px]">
                    {train.stops.map((place, index) => (
                      <div key={index}>
                        <div>{place}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
