import fetch from "node-fetch";

export async function fetchCovidData() {
  const covidRes = await fetch("https://bing.com/covid/data");

  if (covidRes.ok) {
    const covidData = await covidRes.json();
    return covidData;
  }

  return null;
}

export async function fetchCovidDataByCountry(countryId) {
  const covidData = await fetchCovidData();

  const covidCountryData = covidData.areas.find(
    (area) => area.id === countryId
  );

  return covidCountryData ?? null;
}
