import fetch from "node-fetch";
import useSWR from "swr";

// Components
import Layout from "../components/Layout";
import StatsByCountry from "../components/StatsByCountry";
import StatsGlobal from "../components/StatsGlobal";

const Home = ({ covidData }) => {
  const { data } = useSWR(
    "/api/covid",
    async () => {
      const res = await fetch("/api/covid");
      const data = await res.json();

      return data;
    },
    { initialData: covidData }
  );

  return (
    <Layout>
      <StatsGlobal data={data} />
      <div className="mt-8 lg:mt-16">
        <StatsByCountry data={data} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://bing.com/covid/data");
  const covidData = await res.json();

  return {
    props: {
      covidData
    }
  };
}

export default Home;
