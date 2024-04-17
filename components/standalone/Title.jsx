import React from "react";

const Title = ({ title }) => {
  return (
    <div className="text-primary  mobile:text-[36px] sm:text-[30px] xxs:text-[24px]  text-[18px] font-semibold my-3">
      {title}
    </div>
  );
};

export default Title;
