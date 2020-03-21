import { fetchCovidData } from "../../../api/covid";

export default async (req, res) => {
  const covidData = await fetchCovidData();

  res.status(200).json(covidData);
};
