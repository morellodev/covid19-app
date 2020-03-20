import fetch from "node-fetch";
import Error from "next/error";
import useSWR from "swr";

// Components
import Layout from "../../components/Layout";
import StatsByArea from "../../components/StatsByArea";
import StatsGlobal from "../../components/StatsGlobal";

const Country = ({ errorCode, covidCountryData }) => {
  const { data } = useSWR(
    errorCode ? false : `/api/covid/${covidCountryData.id}`,
    async path => {
      const res = await fetch(path);
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
  const covidRes = await fetch("https://bing.com/covid/data");
  const covidData = await covidRes.json();

  const covidCountryData =
    covidData.areas.find(area => area.id === params.id) ?? null;

  return {
    props: {
      covidCountryData,
      errorCode: covidCountryData ? false : 404
    }
  };
}

export default Country;
