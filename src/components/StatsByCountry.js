const formatter = new Intl.NumberFormat();

const StatsByContry = ({ data }) => {
  return (
    <table className="w-full max-w-4xl bg-white rounded shadow-lg table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Country</th>
          <th className="px-4 py-2">Confirmed</th>
          <th className="px-4 py-2">Recovered</th>
          <th className="px-4 py-2">Deceased</th>
        </tr>
      </thead>
      <tbody>
        {data.areas.map(country => {
          const totalConfirmed = formatter.format(country.totalConfirmed);
          const totalRecovered = formatter.format(country.totalRecovered);
          const totalDeaths = formatter.format(country.totalDeaths);

          return (
            <tr key={country.id} className="border-b-2 last:border-b-0">
              <td className="px-4 py-2">{country.displayName}</td>
              <td className="px-4 py-2 text-center">{totalConfirmed}</td>
              <td className="px-4 py-2 text-center">{totalRecovered}</td>
              <td className="px-4 py-2 text-center">{totalDeaths}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatsByContry;
