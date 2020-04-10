const numberFormatter = new Intl.NumberFormat();

const StatsCount = ({ count, label, isLoading }) => {
  return (
    <div className="flex flex-col px-6 py-4 border-b border-gray-200 md:px-8 md:py-6 md:border-b-0 last:border-b-0">
      <p className="text-4xl font-bold text-center text-gray-600 variant-tabular-nums lg:text-5xl">
        {isLoading ? "..." : numberFormatter.format(count)}
      </p>
      {label && (
        <p className="text-lg font-medium text-center text-gray-500">{label}</p>
      )}
    </div>
  );
};

export default StatsCount;
