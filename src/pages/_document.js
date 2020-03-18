import Document, { Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en-US" className="antialiased bg-gray-100">
        <Head>
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
        </Head>
        <body className="leading-normal text-gray-900">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
