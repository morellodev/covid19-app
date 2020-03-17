const formatter = new Intl.NumberFormat();

const StatsCount = ({ count, label }) => {
  return (
    <div className="flex flex-col px-8 py-6">
      <p className="text-6xl font-bold text-center text-gray-500 transition duration-200 ease-in-out">
        {typeof count === "number" ? formatter.format(count) : count}
      </p>
      {label && (
        <p className="text-lg font-medium text-center text-gray-500">{label}</p>
      )}
    </div>
  );
};

export default StatsCount;