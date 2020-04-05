import CountriesDataTable from "../components/CountriesDataTable";
import Layout from "../components/Layout";
import StatsGlobal from "../components/StatsGlobal";
import { useQuery } from "react-query";

const getUrl = () => `/api/covid/summary`;

const Home = () => {
  const { data, status } = useQuery(getUrl(), async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  });

  return (
    <Layout>
      <StatsGlobal
        confirmed={data?.Global.TotalConfirmed}
        recovered={data?.Global.TotalRecovered}
        deaths={data?.Global.TotalDeaths}
        isLoading={status === "loading"}
      />
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
