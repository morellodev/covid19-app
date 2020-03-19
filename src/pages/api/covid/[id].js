import fetch from "node-fetch";

export default async (req, res) => {
  const covidRes = await fetch("https://bing.com/covid/data");
  const covidData = await covidRes.json();

  const covidCountryData =
    covidData.areas.find(area => area.id === req.query.id) ?? null;

  res.status(200).json(covidCountryData);
};
