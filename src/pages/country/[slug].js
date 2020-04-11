import CountryChart from "../../components/CountryChart";
import Flag from "react-flags";
import Layout from "../../components/Layout";
import Link from "next/link";
import { fetchCovidDataByCountry } from "../../api/covid";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();

  const { data, status } = useQuery(
    router.query.slug && [fetchCovidDataByCountry.name, router.query.slug],
    (key, countrySlug) => fetchCovidDataByCountry(countrySlug)
  );

  return status === "loading" || data ? (
    <Layout>
      {data && (
        <div className="flex items-center px-6 sm:px-0">
          <div className="flex-shrink-0 w-10 h-10">
            <Flag
              basePath="/assets/img/flags"
              className="object-contain w-10 h-10"
              format="svg"
              name={data.CountryCode}
            />
          </div>
          <h1 className="ml-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {data.Country}
          </h1>
        </div>
      )}
      <div className="mt-8 lg:mt-16">
        <CountryChart
          confirmed={data?.Confirmed}
          recovered={data?.Recovered}
          deaths={data?.Deaths}
          isLoading={status === "loading"}
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

export default Country;
