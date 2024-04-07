"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";
import { useState, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const CustomDatePicker = ({ type }) => {
  const [startDate, setStartDate] = useState(new Date());

  const datePickerRef = useRef(null);

  const handleOuterDivClick = () => {
    // Programmatically trigger click event on the DatePicker (to set click the outer div)
    datePickerRef.current && datePickerRef.current.setOpen(true);
  };

  return (
    <div
      className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded border-[1px] border-black flex justify-between"
      onClick={handleOuterDivClick}
    >
      <DatePicker
        ref={datePickerRef}
        className="outline-none"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
        minDate={new Date()}
      />
      <MdOutlineDateRange className="text-[20px]" />
    </div>
  );
};

export default CustomDatePicker;
