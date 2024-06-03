import daytrips from "@/data/daytrips.json";

export function GetDescriptionParaData(title) {
  // sorting time duration
  const data = [...daytrips].find((trip) => trip.description === title);

  const paragraphArray = data.fullDescriptionParas;

  return paragraphArray;
}
