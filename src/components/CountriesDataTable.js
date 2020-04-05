import { useCallback } from "react";
import { useRouter } from "next/router";

const { format: numberFormat } = new Intl.NumberFormat();

const { format: percentFormat } = new Intl.NumberFormat(undefined, {
  style: "percent",
  maximumFractionDigits: 2
});

const CountriesDataTable = ({ data, isLoading }) => {
  const router = useRouter();

  const navigateToCountry = useCallback(
    (countrySlug) => {
      router.push("/country/[slug]", `/country/${countrySlug}`);
    },
    [router]
  );

  const renderRow = useCallback(
    (country) => {
      const totalConfirmed = numberFormat(country.TotalConfirmed);
      const totalRecovered = numberFormat(country.TotalRecovered);
      const totalDeaths = numberFormat(country.TotalDeaths);
      const mortality = country.TotalConfirmed
        ? percentFormat(country.TotalDeaths / country.TotalConfirmed)
        : "–";

      const onRowClicked = () => navigateToCountry(country.Slug);

      return (
        <tr
          key={country.CountryCode}
          className="transition duration-200 ease-in-out border-b-2 cursor-pointer last:border-b-0 hover:bg-gray-100"
          onClick={onRowClicked}
        >
          <td className="px-4 py-2 text-left">{country.Country}</td>
          <td className="px-4 py-2 text-right variant-tabular-nums">
            {totalConfirmed}
          </td>
          <td className="px-4 py-2 text-right variant-tabular-nums">
            {totalRecovered}
          </td>
          <td className="px-4 py-2 text-right variant-tabular-nums">
            {totalDeaths}
          </td>
          <td className="px-4 py-2 text-right variant-tabular-nums">
            {mortality}
          </td>
        </tr>
      );
    },
    [navigateToCountry]
  );

  return isLoading ? null : (
    <div className="overflow-x-auto rounded shadow-md lg:shadow-lg">
      <table className="w-full bg-white table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left" scope="col">
              Country
            </th>
            <th className="px-4 py-2 text-right" scope="col">
              Confirmed
            </th>
            <th className="px-4 py-2 text-right" scope="col">
              Recovered
            </th>
            <th className="px-4 py-2 text-right" scope="col">
              Deceased
            </th>
            <th className="px-4 py-2 text-right" scope="col">
              Mortality
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort(
              (countryA, countryB) =>
                countryB.TotalConfirmed - countryA.TotalConfirmed
            )
            .map((country) => renderRow(country))}
        </tbody>
      </table>
    </div>
  );
};

export default CountriesDataTable;
