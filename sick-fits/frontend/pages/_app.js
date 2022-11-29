import Page from "../components/Page";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
import "../components/styles/nprogress.css";
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData"



Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
       <Page>
      <Component {...pageProps} />
    </Page>
    </ApolloProvider>
    
  );
}

MyApp.getInitialProps = async function ({Component, ctx}) { 
}

export default withData(MyApp)