import { useEffect, useState } from "react";

import Head from "next/head";

import Layout from "../../components/layout/layout";

import Disclaimer from "../../components/disclaimer/disclaimer";

const Home = () => {
  const isServer = typeof window === "undefined";

  const [loadElements, setLoadElements] = useState(false);

  const handleScroll = () => {
    if (isServer || loadElements) return;
    setLoadElements(true);
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <Layout>
      <Head>
        <title>Disclaimer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Disclaimer />
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
