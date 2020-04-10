import ReactEcharts from "echarts-for-react";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric"
});

const CountryChart = ({ confirmed, recovered, deaths, isLoading }) => {
  return (
    <ReactEcharts
      className="select-none"
      opts={{ renderer: "svg" }}
      showLoading={isLoading}
      loadingOption={{ maskColor: "#f7fafc" }}
      style={{ height: "60vh" }}
      option={{
        textStyle: { fontFamily: "Inter var" },
        grid: {
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: confirmed?.map((data) =>
            dateFormatter.format(new Date(data.Date))
          )
        },
        yAxis: {
          type: "value"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: { data: ["Confirmed", "Recovered", "Deceased"] },
        series: [
          {
            data: confirmed?.map((data) => data.Cases),
            name: "Confirmed",
            type: "line"
          },
          {
            data: recovered?.map((data) => data.Cases),
            name: "Recovered",
            type: "line"
          },
          {
            data: deaths?.map((data) => data.Cases),
            name: "Deceased",
            type: "line"
          }
        ]
      }}
    />
  );
};

export default CountryChart;
