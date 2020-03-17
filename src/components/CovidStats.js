import { useQuery } from "react-query";

// APIs
import { getCovidData } from "../api/covid-data";

// Components
import StatsCount from "./StatsCount";

const Stats = () => {
  const { data } = useQuery("covidData", getCovidData);

  return (
    <div className="overflow-hidden bg-gray-200 rounded shadow-lg">
      <div className="flex flex-col lg:flex-row">
        <StatsCount count={data?.totalConfirmed ?? "..."} label="Confirmed" />
        <StatsCount count={data?.totalRecovered ?? "..."} label="Recovered" />
        <StatsCount count={data?.totalDeaths ?? "..."} label="Deceased" />
      </div>
    </div>
  );
};

export default Stats;
