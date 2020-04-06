import StatsCount from "./StatsCount";

const StatsGlobal = ({ confirmed, recovered, deaths, isLoading }) => {
  return (
    <div className="w-full bg-white shadow sm:rounded-lg">
      <div className="flex flex-col md:flex-row justify-evenly">
        <StatsCount count={confirmed} label="Confirmed" isLoading={isLoading} />
        <StatsCount count={recovered} label="Recovered" isLoading={isLoading} />
        <StatsCount count={deaths} label="Deceased" isLoading={isLoading} />
      </div>
    </div>
  );
};

export default StatsGlobal;
