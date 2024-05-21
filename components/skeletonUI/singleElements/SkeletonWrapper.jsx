import React from "react";

const SkeletonWrapper = ({ customWidths, children }) => {
  return (
    <div
      className={` flex flex-col items-center py-3 rounded-md relative overflow-hidden bg-[#f9f9f9] ${
        customWidths ? customWidths : "" // Apply custom widths
      }`}
    >
      {children}
    </div>
  );
};

export default SkeletonWrapper;
