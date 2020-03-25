import Error from "next/error";
import useSWR from "swr";

// APIs
import { fetchCovidDataByCountry } from "../../api/covid";

// Components
import Layout from "../../components/Layout";
import StatsByArea from "../../components/StatsByArea";
import StatsGlobal from "../../components/StatsGlobal";

const getUrl = (countryId, errorCode) =>
  errorCode ? false : `/api/covid/${countryId}`;

const Country = ({ countryId, errorCode, initialData }) => {
  const { data } = useSWR(
    getUrl(countryId, errorCode),
    async url => {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    },
    { initialData }
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
          <StatsByArea data={data} areaColumnLabel="Area" canNavigate={false} />
        </div>
      ) : null}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const countryId = params.id;
  const initialData = await fetchCovidDataByCountry(countryId);

  return {
    props: {
      countryId,
      errorCode: initialData ? false : 404,
      initialData
    }
  };
}

export default Country;
