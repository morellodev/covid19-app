import Layout from "../../components/Layout";
import ReactEcharts from "echarts-for-react";
import { fetchCovidDataByCountry } from "../../api/covid";
import useSWR from "swr";

const { format: dateFormat } = new Intl.DateTimeFormat();

const getUrl = (countrySlug) => `/api/covid/${countrySlug}`;

const Country = ({ countrySlug, initialData }) => {
  const { data } = useSWR(
    getUrl(countrySlug),
    async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    },
    { initialData }
  );

  return (
    <Layout>
      <h1 className="text-3xl font-bold md:text-4xl">{data.Country}</h1>
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
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const countrySlug = params.slug;
  const initialData = await fetchCovidDataByCountry(countrySlug);

  return {
    props: {
      countrySlug,
      initialData
    }
  };
}

export default Country;
