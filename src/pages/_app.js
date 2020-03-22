import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import TagManager from "react-gtm-module";

// Styles
import "../styles/tailwind.css";
import "../styles/nprogress.css";

// NProgress Set-up
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
