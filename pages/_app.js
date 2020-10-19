import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { resetFilters } from "../redux/property/properties.actions";

import * as gtag from "../components/ga";
import { useRouter } from "next/router";

import { wrapper } from "../redux/store";

const theme = {
  colors: {
    primary: "#ff6b6c",
  },
};

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      router.pathname.split("/")[1] !== "properties" &&
      router.pathname.split("/")[1] !== "filters"
    ) {
      dispatch(resetFilters());
    }
  }, [router]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
