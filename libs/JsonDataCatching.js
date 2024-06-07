import daytrips from "@/data/daytrips.json";

export function GetDescriptionParaData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const paragraphArray = data.fullDescriptionParas;

  return paragraphArray;
}

export function GetIncludeData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const IncludeArray = data.include;

  return IncludeArray;
}

export function GetExcludeData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const ExcludeArray = data.exclude;

  return ExcludeArray;
}
