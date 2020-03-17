import Document, { Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en-US" className="antialiased bg-gray-100">
        <Head />
        <body className="leading-normal text-gray-900">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
