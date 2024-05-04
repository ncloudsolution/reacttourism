import highway from "@/data/highwayCharges.json";

export function SetHighwayCharge(vehicleType, exitPoint) {
  // Find the charge array for the specified exit point
  const chargeArray = highway[exitPoint];

  if (exitPoint === "None") {
    return "No any Charge";
  }

  // If the charge array exists
  if (chargeArray) {
    // Return the array value based on vehicle type
    if (vehicleType === "A") {
      return chargeArray[0];
    } else if (vehicleType === "B") {
      return chargeArray[1];
    } else {
      return chargeArray[2];
    }
  }
  return null;
}
