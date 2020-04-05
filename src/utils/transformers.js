import groupBy from "lodash/groupBy";

export function groupCountryDataByDate(countryData) {
  const byDate = groupBy(countryData, "Date");

  return Object.entries(byDate).map(([date, regions]) => {
    return regions.reduce((acc, value) => {
      return {
        Country: value.Country,
        CountryCode: value.CountryCode,
        Cases: value.Cases + (acc?.Cases ?? 0),
        Status: value.Status,
        Date: date
      };
    }, {});
  });
}
