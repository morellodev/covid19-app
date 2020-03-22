import { fetchCovidData } from "../../../api/covid";

export default async (req, res) => {
  console.log(req.headers);
  const covidData = await fetchCovidData();

  res.status(200).json(covidData);
};
