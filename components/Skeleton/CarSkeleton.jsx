import Image from "next/image";
import car from "@/public/Vehicles/sportscar.png";
import car2 from "@/public/Vehicles/sportscar2.png";
import React from "react";

const CarSkeleton = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center border-2 border-transparent relative">
        {/** for car 1
        <div className="text-[40px] font-medium absolute -translate-y-[150px] animate-cartext">
          Find your Driver
        </div> **/}

        {/** for car 2**/}
        <div className=" font-medium absolute  text-[30px] bg-transparent z-[-1] animate-cartext2">
          Find your Driver
        </div>

        {/** <Image src={car} alt="" className="size-[100%] animate-carmoving" /> **/}
        <div className="bxs:w-[350px] w-[250px] bxs:h-[250px] h-[150px] ">
          {/** line 1 give hieght and width to container**/}
          <Image
            layout="responsive"
            src={car2}
            alt=""
            className="object-cover border-2 border-transparent animate-carmoving2 "
            priority
          />
          {/** line 2 give layout as responsible**/}
          {/** line 3 give priority to load first line 4 give placeholder="blur" to give initial blur as before loading**/}
        </div>
      </div>
    </>
  );
};

export default CarSkeleton;
