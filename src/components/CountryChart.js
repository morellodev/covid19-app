import ReactEcharts from "echarts-for-react";

const { format: dateFormat } = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric"
});

const CountryChart = ({ confirmed, recovered, deaths, isLoading }) => {
  return (
    <ReactEcharts
      showLoading={isLoading}
      loadingOption={{ maskColor: "#f7fafc" }}
      style={{ height: "60vh" }}
      option={{
        grid: {
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: confirmed?.map((data) => dateFormat(new Date(data.Date)))
        },
        yAxis: {
          type: "value"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: { data: ["Confirmed", "Recovered", "Deaths"] },
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
            name: "Deaths",
            type: "line"
          }
        ]
      }}
    />
  );
};

export default CountryChart;
