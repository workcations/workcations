import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import publicIp from "public-ip";

import { resetFilters } from "../redux/property/properties.actions";

import * as gtag from "../components/ga";
import { useRouter } from "next/router";

import { wrapper } from "../redux/store";

const theme = {
  colors: {
    primary: "#ff6b6c",
  },
};

/*const getClientIp = async () =>
  await publicIp.v4({
    fallbackUrls: ["https://ifconfig.co/ip"],
  });*/

const MyApp = ({ Component, pageProps }) => {
  /*getClientIp()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    });*/
  const router = useRouter();
  const dispatch = useDispatch();

  const site = "https://www.workcations.in";
  const canonicalURL = `${site}${
    router.route === "/properties" ? "/properties" : router.asPath
  }`;

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
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
