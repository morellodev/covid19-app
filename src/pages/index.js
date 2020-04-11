import CountriesDataTable from "../components/CountriesDataTable";
import Layout from "../components/Layout";
import StatsGlobal from "../components/StatsGlobal";
import { fetchCovidSummary } from "../api/covid";
import { useQuery } from "react-query";

const Home = () => {
  const { data, status } = useQuery(fetchCovidSummary.name, fetchCovidSummary);

  return (
    <Layout>
      <div className="lg:mt-8">
        <StatsGlobal
          confirmed={data?.Global.TotalConfirmed}
          recovered={data?.Global.TotalRecovered}
          deaths={data?.Global.TotalDeaths}
          isLoading={status === "loading"}
        />
      </div>
      <div className="mt-8 lg:mt-16">
        <CountriesDataTable
          data={data?.Countries}
          isLoading={status === "loading"}
        />
      </div>
    </Layout>
  );
};

export default Home;
