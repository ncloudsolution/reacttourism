"use client";
import { useContext, useState } from "react";
import { SelectVehiclesList } from "../libs/calculations";
import { SingleVehicleContext } from "../context/SingleVehicalContextProvider";

const First = () => {
  const [distance, setDistance] = useState("");
  const [passengers, setPassengers] = useState("");
  const [selectedVehiclesList, setSelectedVehiclesList] = useState([]);
  const { vehicle, setVehicle } = useContext(SingleVehicleContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse distance and passengers to numbers
    const distanceNumber = parseFloat(distance);
    const passengersNumber = parseInt(passengers);

    // Call SelectVehicles with form values
    const selectedVehiclesListValue = SelectVehiclesList(
      passengersNumber,
      distanceNumber
    );
    setSelectedVehiclesList(selectedVehiclesListValue);
  };

  // const handleSingleSelected = () => {
  //   setSingleSelectedVehicle({
  //     type: vehicle.type,
  //     passengers: vehicle.passengers,
  //     weightFactor: vehicle.weightFactor,
  //     price: vehicle.price,
  //   });
  // };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-2">
          <div>input your distance</div>
          <input
            className="bg-red-900 text-white"
            type="text"
            value={distance}
            onChange={(e) => {
              setDistance(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex gap-x-2">
          <div>input no of passengers</div>
          <input
            className="bg-green-900 text-white"
            type="text"
            value={passengers}
            onChange={(e) => {
              setPassengers(e.target.value);
            }}
          ></input>
        </div>
        <input
          type="submit"
          value={"submit"}
          className="bg-black px-3 py-1 text-white rounded my-3"
        />
      </form>

      {selectedVehiclesList.map((vehicle, index) => (
        <div key={index} className="bg-black text-white w-[300px] flex my-3">
          <div className="flex flex-col">
            <div>{vehicle.type}</div>
            <div className="text-yellow-300 ">
              No of passengers {vehicle.passengers}
            </div>
            <div>Price {vehicle.price}</div>
          </div>
          <button
            className="bg-yellow-500 px-6 ml-5"
            onClick={() => {
              //console.log(vehicle.price);
              setVehicle({
                type: vehicle.type,
                passengers: vehicle.passengers,
                weightFactor: vehicle.weightFactor,
                price: vehicle.price,
              });
            }}
          >
            select
          </button>
        </div>
      ))}
    </>
  );
};

export default First;
