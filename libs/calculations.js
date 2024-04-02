import vehicle from "@/data/vehicle.json";

export function SelectVehiclesList(noOfPassengers, distance) {
  // Filtering vehicles based on passenger count
  const filteredVehicles = vehicle.filter(
    (v) => v.passengers >= noOfPassengers
  );

  // Creating a new array with filtered vehicles and calculated price
  const selectedVehiclesList = filteredVehicles.map((v) => {
    const price = Math.ceil(v.weightFactor * distance);
    return {
      type: v.type,
      passengers: v.passengers,
      weightFactor: v.weightFactor,
      price: price,
      img: v.img,
    };
  });

  return selectedVehiclesList;
}
