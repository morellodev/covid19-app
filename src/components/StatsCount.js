const formatter = new Intl.NumberFormat();

const StatsCount = ({ count, label }) => {
  return (
    <div className="flex flex-col px-4 py-3 border-b-2 md:px-8 md:py-6 md:border-b-0 last:border-b-0">
      <p className="text-4xl font-bold text-center text-gray-600 variant-tabular-nums lg:text-6xl">
        {formatter.format(count)}
      </p>
      {label && (
        <p className="text-lg font-medium text-center text-gray-500">{label}</p>
      )}
    </div>
  );
};

export default StatsCount;
