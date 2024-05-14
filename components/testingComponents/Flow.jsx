import React from "react";

const Flow = () => {
  const lists = [
    {
      id: 1,
      heading: "Enter your route and select car",
      description:
        "Enter all the required data in the search field and then choose the desired vehicle",
    },
    {
      id: 2,
      heading: "Complete booking form",
      description:
        "Enter the details of the lead passenger, add extras if you wish. Proceed to payment and receive your voucher",
    },
    {
      id: 3,
      heading: "Meet your driver",
      description:
        "You will receive your driver's details 6 hours prior to pickup and he will be waiting for you on-site with a Name Sign.",
    },
  ];
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-fit justify-center items-center  py-5 px-7 rounded-lg   bg-primary text-black">
        <div className=" w-fit mb-7 pb-1 font-semibold text-[22px] border-b-4 border-b-black border-dashed">
          How does it work
        </div>
        <div className="flex bigmd:flex-row flex-col gap-5">
          {lists.map((list, index) => (
            <div
              key={index}
              className="flex items-start gap-3 w-[230px] xxs:w-[260px] bxs:w-[400px] bigmd:w-[250px] mobile:w-[320px]"
            >
              <div className="bg-black text-white rounded-full size-[40px]  flex justify-center items-center font-semibold xxs:text-[18px] text-[16px] ">
                {list.id}
              </div>
              <div className="flex flex-col w-[170px] xxs:w-[210px] bxs:w-[350px] bigmd:w-[200px] mobile:w-[270px]">
                <div className="pb-2 font-semibold xxs:text-[16px] text-[14px]">
                  {list.heading}
                </div>
                <div className="xxs:text-[14px] text-[12px]">
                  {list.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;
