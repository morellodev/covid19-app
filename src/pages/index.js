import fetch from "node-fetch";

// Components
import Layout from "../components/Layout";
import Stats from "../components/Stats";
import StatsByCountry from "../components/StatsByCountry";

const Home = ({ data }) => {
  return (
    <Layout>
      <Stats data={data} />
      <div className="my-8" />
      <StatsByCountry data={data} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://bing.com/covid/data");
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default Home;
