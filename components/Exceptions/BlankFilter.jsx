import Image from "next/image";
import React from "react";

import cone from "@/public/Exceptions/cone.png";

const BlankFilter = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="size-[200px]">
          <Image src={cone} alt="" className="h-full w-full" />
        </div>

        <div className=" bxs:text-[30px] xxs:text-[20px] text-[16px]">
          There is no any matching activities
        </div>
        <div className=" bxs:text-[20px] text-[14px] text-primary">
          Try out a different filter
        </div>
      </div>
    </div>
  );
};

export default BlankFilter;
