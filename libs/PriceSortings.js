import daytrips from "@/data/daytrips.json";

function compareByDiscountedPrice(a, b) {
  const priceA = a.discountedPrice;
  const priceB = b.discountedPrice;
  return priceA - priceB;
}

export function PriceLowToHigh() {
  // sorting accending
  const sortedTours = [...daytrips].sort(compareByDiscountedPrice);

  return sortedTours;
}
