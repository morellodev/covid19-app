import CountryChart from "../../components/CountryChart";
import Layout from "../../components/Layout";
import { fetchCovidDataByCountry } from "../../api/covid";
import useSWR from "swr";

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
      <div className="mt-8 lg:mt-16">
        <CountryChart
          confirmed={data.Confirmed}
          recovered={data.Recovered}
          deaths={data.Deaths}
        />
      </div>
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
