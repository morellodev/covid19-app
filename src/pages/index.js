import fetch from "node-fetch";
import useSWR from "swr";

// Components
import Layout from "../components/Layout";
import Stats from "../components/Stats";
import StatsByCountry from "../components/StatsByCountry";

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
      <Stats data={data} />
      <StatsByCountry data={data} className="mt-8 lg:mt-16" />
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
