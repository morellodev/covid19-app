import CountriesDataTable from "../components/CountriesDataTable";
import Layout from "../components/Layout";
import StatsGlobal from "../components/StatsGlobal";
import { fetchCovidSummary } from "../api/covid";
import useSWR from "swr";

const getUrl = () => `/api/covid/summary`;

const Home = ({ initialData }) => {
  const { data } = useSWR(
    getUrl(),
    async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    },
    { initialData }
  );

  return (
    <Layout>
      <StatsGlobal
        confirmed={data.Global.TotalConfirmed}
        recovered={data.Global.TotalRecovered}
        deaths={data.Global.TotalDeaths}
      />
      <div className="mt-8 lg:mt-16">
        <CountriesDataTable data={data.Countries} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const initialData = await fetchCovidSummary();

  return {
    props: {
      initialData
    }
  };
}

export default Home;
