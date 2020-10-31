import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout/layout";
import WorkcationsForTeams from "../../containers/workcations-for-teams/workcations-for-teams";

const WorkcationsForTeamsPage = () => {
  const isServer = typeof window === "undefined";

  const [loadElements, setLoadElements] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScroll = () => {
    if (isServer || loadElements) return;
    setLoadElements(true);
  };

  useEffect(() => {
    if (!isServer) {
      setScreenWidth(window.screen.width);
    }
  }, [isServer]);

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
        <title>Workcations For Teams</title>
        <meta
          property="og:image"
          content="/workation-to-workcation/workation-to-workcation.jpg"
        />
        <meta property="og:title" content="Workcations For Teams" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WorkcationsForTeams
        screenWidth={screenWidth}
        loadElements={loadElements}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default WorkcationsForTeamsPage;
