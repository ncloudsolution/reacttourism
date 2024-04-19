import daytrips from "@/data/daytrips.json";

export function SelectiveMinMaxDuration(selectedMinRange, selectedMaxRange) {
  // sorting time duration
  const sortedMinBoundry = [...daytrips].filter(
    (tour) => tour.minduration >= selectedMinRange
  );
  const sortedMaxBoundry = [...daytrips].filter(
    (tour) => tour.minduration <= selectedMaxRange
  );

  const finalSortedTour = sortedMinBoundry.filter((tour) =>
    sortedMaxBoundry.includes(tour)
  );

  return finalSortedTour;
}
