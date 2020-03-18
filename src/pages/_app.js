import { useEffect } from "react";
import Head from "next/head";
import TagManager from "react-gtm-module";

// Styles
import "../styles/tailwind.css";

const CovidApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.GTM_ID });
  }, []);

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
