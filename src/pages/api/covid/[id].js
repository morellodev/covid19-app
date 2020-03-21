import { fetchCovidDataByCountry } from "../../../api/covid";

export default async (req, res) => {
  const covidCountryData = await fetchCovidDataByCountry(req.query.id);

  res.status(200).json(covidCountryData);
};
