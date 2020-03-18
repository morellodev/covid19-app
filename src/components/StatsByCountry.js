const { format: numberFormat } = new Intl.NumberFormat();

const { format: percentFormat } = new Intl.NumberFormat(undefined, {
  style: "percent",
  maximumFractionDigits: 2
});

const StatsByCountry = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded shadow-md lg:shadow-lg">
      <table className="w-full bg-white table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Country</th>
            <th className="px-4 py-2 text-right">Confirmed</th>
            <th className="px-4 py-2 text-right">Recovered</th>
            <th className="px-4 py-2 text-right">Deceased</th>
            <th className="px-4 py-2 text-right">Mortality</th>
          </tr>
        </thead>
        <tbody>
          {data.areas.map(country => {
            const totalConfirmed = numberFormat(country.totalConfirmed);
            const totalRecovered = numberFormat(country.totalRecovered);
            const totalDeaths = numberFormat(country.totalDeaths);
            const mortality = percentFormat(
              country.totalDeaths / country.totalConfirmed
            );

            return (
              <tr key={country.id} className="border-b-2 last:border-b-0">
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
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StatsByCountry;
