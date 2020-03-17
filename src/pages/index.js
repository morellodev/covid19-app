import fetch from "node-fetch";

// Components
import Layout from "../components/Layout";
import CovidStats from "../components/CovidStats";

const Home = ({ data }) => {
  return (
    <Layout>
      <CovidStats data={data} />
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
