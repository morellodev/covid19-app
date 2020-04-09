import Flag from "react-flags";
import { useCallback } from "react";
import { useRouter } from "next/router";

const numberFormatter = new Intl.NumberFormat();

const percentFormatter = new Intl.NumberFormat(undefined, {
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
      const totalConfirmed = numberFormatter.format(country.TotalConfirmed);
      const totalRecovered = numberFormatter.format(country.TotalRecovered);
      const totalDeaths = numberFormatter.format(country.TotalDeaths);
      const mortality = country.TotalConfirmed
        ? percentFormatter.format(country.TotalDeaths / country.TotalConfirmed)
        : "–";

      const onRowClicked = () => navigateToCountry(country.Slug);

      return (
        <tr
          key={country.CountryCode}
          className="transition duration-200 ease-in-out cursor-pointer hover:bg-gray-50"
          onClick={onRowClicked}
        >
          <td className="px-6 py-4 text-left border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10">
                <Flag
                  basePath="/assets/img/flags"
                  className="object-cover w-10 h-10 rounded-full"
                  format="svg"
                  name={country.CountryCode}
                />
              </div>
              <div className="ml-4">{country.Country}</div>
            </div>
          </td>
          <td className="px-6 py-4 text-right border-b border-gray-200 variant-tabular-nums">
            {totalConfirmed}
          </td>
          <td className="px-6 py-4 text-right border-b border-gray-200 variant-tabular-nums">
            {totalRecovered}
          </td>
          <td className="px-6 py-4 text-right border-b border-gray-200 variant-tabular-nums">
            {totalDeaths}
          </td>
          <td className="px-6 py-4 text-right border-b border-gray-200 variant-tabular-nums">
            {mortality}
          </td>
        </tr>
      );
    },
    [navigateToCountry]
  );

  return isLoading ? null : (
    <div className="flex flex-col">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Country
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Confirmed
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Recovered
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Deceased
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Mortality
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data
                .sort(
                  (countryA, countryB) =>
                    countryB.TotalConfirmed - countryA.TotalConfirmed
                )
                .map((country) => renderRow(country))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CountriesDataTable;
