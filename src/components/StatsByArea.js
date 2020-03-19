import { useCallback } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

const { format: numberFormat } = new Intl.NumberFormat();

const { format: percentFormat } = new Intl.NumberFormat(undefined, {
  style: "percent",
  maximumFractionDigits: 2
});

const StatsByArea = ({
  areaColumnLabel = "Country",
  canNavigate = true,
  data
}) => {
  const { push } = useRouter();

  const navigateToCountry = useCallback(countryId => {
    push("/country/[id]", `/country/${countryId}`);
  }, []);

  const renderRow = useCallback(country => {
    const totalConfirmed = numberFormat(country.totalConfirmed);
    const totalRecovered = numberFormat(country.totalRecovered);
    const totalDeaths = numberFormat(country.totalDeaths);
    const mortality = country.totalConfirmed
      ? percentFormat(country.totalDeaths / country.totalConfirmed)
      : "–";

    const onRowClicked = canNavigate
      ? () => navigateToCountry(country.id)
      : undefined;

    return (
      <tr
        key={country.id}
        className={classNames(
          { "cursor-pointer": canNavigate },
          "transition duration-200 ease-in-out border-b-2 last:border-b-0 hover:bg-gray-100"
        )}
        onClick={onRowClicked}
      >
        <td className="px-4 py-2">{country.displayName}</td>
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
  }, []);

  return (
    <div className="overflow-x-auto rounded shadow-md lg:shadow-lg">
      <table className="w-full bg-white table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">{areaColumnLabel}</th>
            <th className="px-4 py-2 text-right">Confirmed</th>
            <th className="px-4 py-2 text-right">Recovered</th>
            <th className="px-4 py-2 text-right">Deceased</th>
            <th className="px-4 py-2 text-right">Mortality</th>
          </tr>
        </thead>
        <tbody>
          {data.areas
            .sort((a, b) => b.totalConfirmed - a.totalConfirmed)
            .map(country => renderRow(country))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsByArea;