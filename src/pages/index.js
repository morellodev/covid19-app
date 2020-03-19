import fetch from "node-fetch";
import useSWR from "swr";

// Components
import Layout from "../components/Layout";
import StatsByArea from "../components/StatsByArea";
import StatsGlobal from "../components/StatsGlobal";

const Home = ({ covidData }) => {
  const { data } = useSWR(
    "/api/covid",
    async path => {
      const res = await fetch(path);
      const data = await res.json();

      return data;
    },
    { initialData: covidData }
  );

  return (
    <Layout>
      <StatsGlobal data={data} />
      <div className="mt-8 lg:mt-16">
        <StatsByArea data={data} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const covidRes = await fetch("https://bing.com/covid/data");
  const covidData = await covidRes.json();

  return {
    props: {
      covidData
    }
  };
}

export default Home;
