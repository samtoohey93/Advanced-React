import { GetInitialProps } from "next/dist/next-server/lib/utils";
import Document, { Html, Head, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static GetInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <>
        <Html lang="en-AU">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
