import StatsCount from "./StatsCount";

const StatsGlobal = ({ confirmed, recovered, deaths }) => {
  return (
    <div className="w-full bg-white rounded shadow-md lg:shadow-lg">
      <div className="flex flex-col md:flex-row justify-evenly">
        <StatsCount count={confirmed} label="Confirmed" />
        <StatsCount count={recovered} label="Recovered" />
        <StatsCount count={deaths} label="Deceased" />
      </div>
    </div>
  );
};

export default StatsGlobal;
