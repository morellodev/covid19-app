import useSWR from "swr";

// APIs
import { fetchCovidData } from "../api/covid";

// Components
import Layout from "../components/Layout";
import StatsByArea from "../components/StatsByArea";
import StatsGlobal from "../components/StatsGlobal";

const getUrl = () => `/api/covid`;

const Home = ({ initialData }) => {
  const { data } = useSWR(
    getUrl(),
    async url => {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    },
    { initialData }
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
  const initialData = await fetchCovidData();

  return {
    props: {
      initialData
    }
  };
}

export default Home;
