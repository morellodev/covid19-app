import { useCallback } from "react";
import Link from "next/link";

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
  const renderCellContent = useCallback((countryId, children) => {
    return canNavigate ? (
      <Link href="/country/[id]" as={`/country/${countryId}`}>
        <a className="block px-4 py-2">{children}</a>
      </Link>
    ) : (
      <span className="block px-4 py-2">{children}</span>
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
            .map(country => {
              const totalConfirmed = numberFormat(country.totalConfirmed);
              const totalRecovered = numberFormat(country.totalRecovered);
              const totalDeaths = numberFormat(country.totalDeaths);
              const mortality = country.totalConfirmed
                ? percentFormat(country.totalDeaths / country.totalConfirmed)
                : "–";

              return (
                <tr
                  key={country.id}
                  className="transition duration-200 ease-in-out border-b-2 last:border-b-0 hover:bg-gray-100"
                >
                  <td>{renderCellContent(country.id, country.displayName)}</td>
                  <td className="text-right variant-tabular-nums">
                    {renderCellContent(country.id, totalConfirmed)}
                  </td>
                  <td className="text-right variant-tabular-nums">
                    {renderCellContent(country.id, totalRecovered)}
                  </td>
                  <td className="text-right variant-tabular-nums">
                    {renderCellContent(country.id, totalDeaths)}
                  </td>
                  <td className="text-right variant-tabular-nums">
                    {renderCellContent(country.id, mortality)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StatsByArea;
