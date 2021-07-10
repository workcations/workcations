import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import { Container, Heading } from "../../styles/properties/style";

import Layout from "../../components/layout/layout";
import PropertyList from "../../containers/property-list-staycation/property-list-staycation";

const Properties = ({ propertiesList }) => {
  return (
    <Layout>
      <Head>
        <title>Staycation Properties</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Heading>
          find your <span>Staycation</span>
        </Heading>
        <PropertyList propertiesList={propertiesList} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await axios({
    method: "get",
    url: "https://api.workcations.in/getPrimes",
  });

  const propertiesList = data;

  return {
    props: { propertiesList: propertiesList },
  };
};

export default Properties;
