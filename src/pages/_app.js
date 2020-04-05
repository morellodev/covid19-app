import "../styles/tailwind.css";
import Head from "next/head";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const CovidApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const gtmId = process.env.GTM_ID;

    if (gtmId) {
      TagManager.initialize({ gtmId });
    }
  }, []);

  return (
    <>
      <Head>
        <title>COVID-19</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CovidApp;
