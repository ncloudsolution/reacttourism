import daytrips from "@/data/daytrips.json";

function compareByDiscountedPriceForLowToHigh(a, b) {
  const priceA = a.discountedPrice;
  const priceB = b.discountedPrice;
  return priceA - priceB;
}

function compareByDiscountedPriceForHighToLow(a, b) {
  const priceA = a.discountedPrice;
  const priceB = b.discountedPrice;
  return priceB - priceA;
}

export function PriceLowToHigh() {
  // sorting accending
  const sortedTours = [...daytrips].sort(compareByDiscountedPriceForLowToHigh);

  return sortedTours;
}

export function PriceHighToLow() {
  // sorting decending
  const sortedTours = [...daytrips].sort(compareByDiscountedPriceForHighToLow);

  return sortedTours;
}

export function PriceRange(input1, input2) {
  // selective range
  const sortedTours1 = [...daytrips].filter(
    (tour) => tour.discountedPrice >= input1
  );
  const sortedTours2 = [...daytrips].filter(
    (tour) => tour.discountedPrice <= input2
  );

  const finalSortedTour = sortedTours1.filter((tour) =>
    sortedTours2.includes(tour)
  );

  return finalSortedTour;
}
