import CountryChart from "../../components/CountryChart";
import Layout from "../../components/Layout";
import Link from "next/link";
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

  return data ? (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-700 md:text-4xl">
        {data.Country}
      </h1>
      <div className="mt-8 lg:mt-16">
        <CountryChart
          confirmed={data.Confirmed}
          recovered={data.Recovered}
          deaths={data.Deaths}
        />
      </div>
    </Layout>
  ) : (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-700 md:text-4xl">No data</h1>
      <div className="mt-4 lg:mt-8">
        <Link href="/">
          <a className="text-gray-500 transition duration-200 ease-in-out hover:text-gray-700">
            &larr; Back
          </a>
        </Link>
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
