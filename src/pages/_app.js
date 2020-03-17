import Head from "next/head";

// Styles
import "../styles/tailwind.css";

const CovidApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="World-wide real-time monitoring of COVID-19"
        />
        <title>COVID-19</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CovidApp;
