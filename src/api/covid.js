import fetch from "node-fetch";
import { groupCountryDataByDate } from "../utils/transformers";

const COVID_API_URL = "https://api.covid19api.com";

export async function fetchCovidSummary() {
  const covidRes = await fetch(`${COVID_API_URL}/summary`);
  const covidData = await covidRes.json();

  return covidData;
}

export async function fetchCovidDataByCountry(countrySlug) {
  const [confirmedRes, recoveredRes, deathsRes] = await Promise.all([
    fetch(`${COVID_API_URL}/country/${countrySlug}/status/confirmed`),
    fetch(`${COVID_API_URL}/country/${countrySlug}/status/recovered`),
    fetch(`${COVID_API_URL}/country/${countrySlug}/status/deaths`)
  ]);

  const [confirmedData, recoveredData, deathsData] = await Promise.all([
    confirmedRes.json(),
    recoveredRes.json(),
    deathsRes.json()
  ]);

  return {
    Country: confirmedData[0].Country,
    CountryCode: confirmedData[0].CountryCode,
    Slug: countrySlug,
    Confirmed: groupCountryDataByDate(confirmedData),
    Recovered: groupCountryDataByDate(recoveredData),
    Deaths: groupCountryDataByDate(deathsData)
  };
}
