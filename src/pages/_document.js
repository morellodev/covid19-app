import Document, { Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en-US" className="antialiased bg-gray-100">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="World-wide real-time monitoring of COVID-19"
          />
          <meta name="keywords" content="Coronavirus,COVID,COVID19,COVID-19" />
          <meta name="author" content="Dennis Morello" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#f56565"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#f7fafc" />

          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="COVID-19" />
          <meta
            property="og:description"
            content="World-wide real-time monitoring of COVID-19"
          />
          <meta property="og:url" content="https://covid19.morello.dev" />
          <meta
            property="og:image"
            content="https://covid19.morello.dev/og-card.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://covid19.morello.dev/og-card.png"
          />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:type" content="image/png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@DennisMorello" />
          <meta name="twitter:title" content="COVID-19" />
          <meta
            name="twitter:description"
            content="World-wide real-time monitoring of COVID-19"
          />
          <meta name="twitter:url" content="https://covid19.morello.dev" />
          <meta
            name="twitter:image"
            content="https://covid19.morello.dev/twitter-card.png"
          />
        </Head>
        <body className="leading-normal text-gray-900">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
