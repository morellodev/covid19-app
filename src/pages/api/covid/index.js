import fetch from "node-fetch";

export default async (req, res) => {
  const covidRes = await fetch("https://bing.com/covid/data");
  const covidData = await covidRes.json();

  res.status(200).json(covidData);
};
