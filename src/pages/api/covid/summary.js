import { fetchCovidSummary } from "../../../api/covid";

export default async (req, res) => {
  const covidData = await fetchCovidSummary();

  res.status(200).json(covidData);
};
