import Error from "next/error";
import useSWR from "swr";

// APIs
import { fetchCovidDataByCountry } from "../../api/covid";

// Components
import Layout from "../../components/Layout";
import StatsByArea from "../../components/StatsByArea";
import StatsGlobal from "../../components/StatsGlobal";

const Country = ({ errorCode, covidCountryData, countryId }) => {
  const { data } = useSWR(
    errorCode ? false : ["/api/covid", countryId],
    async (url, id) => {
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();

      return data;
    },
    { initialData: covidCountryData }
  );

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold md:text-4xl">{data.displayName}</h1>
      <div className="mt-4 lg:mt-8">
        <StatsGlobal data={data} />
      </div>

      {data.areas?.length ? (
        <div className="mt-8 lg:mt-16">
          <StatsByArea
            data={data}
            areaColumnLabel="State"
            canNavigate={false}
          />
        </div>
      ) : null}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const countryId = params.id;
  const covidCountryData = await fetchCovidDataByCountry(countryId);

  return {
    props: {
      covidCountryData,
      countryId,
      errorCode: covidCountryData ? false : 404
    }
  };
}

export default Country;
