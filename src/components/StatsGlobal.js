import StatsCount from "./StatsCount";

const StatsGlobal = ({ data }) => {
  return (
    <div className="w-full bg-white rounded shadow-md lg:shadow-lg">
      <div className="flex flex-col md:flex-row justify-evenly">
        <StatsCount count={data.totalConfirmed} label="Confirmed" />
        <StatsCount count={data.totalRecovered} label="Recovered" />
        <StatsCount count={data.totalDeaths} label="Deceased" />
      </div>
    </div>
  );
};

export default StatsGlobal;
