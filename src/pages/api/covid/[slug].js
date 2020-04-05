import { fetchCovidDataByCountry } from "../../../api/covid";

export default async (req, res) => {
  const covidCountryData = await fetchCovidDataByCountry(req.query.slug);

  res.status(200).json(covidCountryData);
};
