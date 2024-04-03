"use client";

import React, { useState } from "react";
import MapDirections from "@/components/maps/MapDirections";

import { GoogleMap, useLoadScript, Autocomplete } from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

export const MapFinalCongifs = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>loading..........</div>;

  return <MapAutoSearch />;
};

export const MapAutoSearch = ({}) => {
  const {
    setValue,
    ready,
    value,
    suggestions: { status, data, clearSuggestions },
  } = usePlacesAutocomplete();

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleFromValue = (e) => {
    setFromValue(e.target.value);
  };

  const handleToValue = (e) => {
    setToValue(e.target.value);
    // Handle second input logic here if needed
  };

  const handleSelect = (address) => {
    setFromValue(address, false);
    clearSuggestions();
  };

  console.log(fromValue);
  console.log(toValue);

  return (
    <>
      <div>
        <div className="flex justify-between px-[100px]">
          {/* <Combobox onSelect={handleSelect}> */}
          <div className="flex">
            <div className=" bg-black rounded text-white text-[14px] px-3 py-2">
              From
            </div>
            <Autocomplete>
              <input
                value={fromValue}
                onChange={handleFromValue}
                onSelect={(e) => setFromValue(e.target.value)}
                placeholder="From where"
                className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded"
              />
            </Autocomplete>
          </div>
          {/* <ComboboxPopover>
              <ComboboxList>
                {status === "OK" &&
                  data.map(({ place_id, description }) => (
                    <ComboboxOption key={place_id} value={description} />
                  ))}
              </ComboboxList>
            </ComboboxPopover> */}
          {/* </Combobox> */}

          <div className="flex">
            <div className=" bg-black rounded text-white text-[14px] px-3 py-2">
              To
            </div>
            <Autocomplete>
              <input
                value={toValue}
                onChange={handleToValue}
                onSelect={(e) => setToValue(e.target.value)}
                placeholder="From where"
                className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded"
              />
            </Autocomplete>
          </div>
        </div>
      </div>
      <MapDirections fromValue={fromValue} toValue={toValue} />
    </>
  );
};
