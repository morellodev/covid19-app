import useSWR from "swr";

// APIs
import { fetchCovidData } from "../api/covid";

// Components
import Layout from "../components/Layout";
import StatsByArea from "../components/StatsByArea";
import StatsGlobal from "../components/StatsGlobal";

const Home = ({ covidData }) => {
  const { data } = useSWR(
    "/api/covid",
    async url => {
      const res = await fetch(url);
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
  const covidData = await fetchCovidData();

  return {
    props: {
      covidData
    }
  };
}

export default Home;
