import "../styles/nprogress.css";
import "../styles/tailwind.css";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

// NProgress Set-up
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => {
  if (url !== Router.pathname) {
    NProgress.start();
  }
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
        <title>COVID-19</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CovidApp;
