import Image from "next/image";
import car from "@/public/Vehicles/sportscar.png";
import car2 from "@/public/Vehicles/sportscar2.png";
import React from "react";

const CarSkeleton = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center border-2 border-black relative">
        {/** for car 1
        <div className="text-[40px] font-medium absolute -translate-y-[150px] animate-cartext">
          Find your Driver
        </div> **/}

        {/** for car 2**/}
        <div className=" font-medium absolute animate-cartext2 ">
          Find your Driver
        </div>

        <div className="h-[200px]">
          {/** <Image src={car} alt="" className="size-[100%] animate-carmoving" /> **/}
          <Image src={car2} alt="" className="size-[100%] animate-carmoving2" />
        </div>
      </div>
    </>
  );
};

export default CarSkeleton;
