// Components
import StatsCount from "./StatsCount";

const Stats = ({ data }) => {
  return (
    <div className="bg-white rounded shadow-lg">
      <div className="flex flex-col lg:flex-row">
        <StatsCount count={data.totalConfirmed} label="Confirmed" />
        <StatsCount count={data.totalRecovered} label="Recovered" />
        <StatsCount count={data.totalDeaths} label="Deceased" />
      </div>
    </div>
  );
};

export default Stats;
