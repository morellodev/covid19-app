import Head from "next/head";

// Styles
import "../styles/tailwind.css";

const CovidSpreadApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>COVID-19</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CovidSpreadApp;
