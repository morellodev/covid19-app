import ReactEcharts from "echarts-for-react";

const { format: dateFormat } = new Intl.DateTimeFormat();

const CountryChart = ({ data }) => {
  return (
    <ReactEcharts
      style={{ height: "60vh" }}
      option={{
        xAxis: {
          type: "category",
          data: data.Confirmed.map((data) => data.Date),
          axisLabel: {
            formatter: (value) => dateFormat(new Date(value))
          }
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
            data: data.Confirmed.map((data) => data.Cases),
            name: "Confirmed",
            type: "line"
          },
          {
            data: data.Recovered.map((data) => data.Cases),
            name: "Recovered",
            type: "line"
          },
          {
            data: data.Deaths.map((data) => data.Cases),
            name: "Deaths",
            type: "line"
          }
        ]
      }}
    />
  );
};

export default CountryChart;
