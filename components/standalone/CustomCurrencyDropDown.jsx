"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import currency from "@/data/currency.json";
import { TourContext } from "@/context/TourContextProvider";
import useCurrency from "@/hooks/useCurrency";

const CustomCurrencyDropDown = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);

  const [currencies] = useState(Object.keys(currency));
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(
    tourDetails.convertedCurrencyType || currencies[0]
  );
  const [open, setOpen] = useState(false);

  const selectedCurrency = useCurrency();

  console.log(selectedCurrency, "selected");

  const handleSelectcurrency = (currencies) => {
    setSelected(currencies);
    console.log(currencies, "what currency");

    //instead of selected we use currencies

    console.log(
      350 * selectedCurrency[currencies.toLowerCase()],
      "converted value"
    );

    const conversionRate = selectedCurrency[currencies.toLowerCase()] || 1;

    const convertedCurrencyType = currencies;
    const converedCurrencySymbol = currency[currencies];

    console.log(convertedCurrencyType, converedCurrencySymbol, "both");

    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      conversionRate: conversionRate,
      convertedPrice: (tourDetails.price * conversionRate).toFixed(2),
      convertedCurrencyType: convertedCurrencyType,
      converedCurrencySymbol: converedCurrencySymbol,
      totalPrice: (tourDetails.totalLKRPrice * conversionRate).toFixed(2),
    }));
    setOpen(false);
    setInputValue("");
  };

  const DropDownRef = useRef();

  const handleClickOutside = (e) => {
    if (DropDownRef.current && !DropDownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="font-normal">
      <div className="w-full absolute z-[1] left-0 right-0">
        {/* Dropdown button */}
        <div
          onClick={() => setOpen(!open)}
          className={`bg-primary w-full border-[1px] text-[14px] border-black p-1 flex items-center justify-between rounded  ${
            !selected && "text-[#8e8e8e]"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Currency Type"}
          {/* Dropdown icon */}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        {/* Dropdown list */}
        <ul
          ref={DropDownRef}
          className={`bg-white  overflow-y-auto cursor-pointer  my-2 ${
            open ? "max-h-[250px] border-[1px] border-black rounded" : "max-h-0"
          }`}
        >
          {/* Search input */}
          <div className="flex items-center px-2 sticky top-0 bg-white shadow">
            <AiOutlineSearch size={18} className="text-gray-700" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Preferd Currency"
              className="placeholder:text-gray-700 placeholder:text-[12px] bxs:placeholder:text-[14px] px-2 py-1 outline-none w-full"
            />
          </div>
          {/* Dropdown items */}
          {currencies.map((currency) => (
            <li
              key={currency}
              className={`py-2 px-3 text-[12px] bxs:text-[14px] hover:bg-black hover:text-white flex items-center m-1 rounded ${
                currency?.toLowerCase() === selected?.toLowerCase() &&
                "bg-primary text-black "
              } ${
                currency?.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
              }`}
              onClick={() => handleSelectcurrency(currency)}
            >
              <GiTwoCoins size={20} className="mr-2" />
              {currency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomCurrencyDropDown;
