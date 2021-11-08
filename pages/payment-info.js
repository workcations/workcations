import React from "react";

import Head from "next/head";

import Layout from "../components/layout/layout";

import Payment from "../components/payment/payment";

const PaymentInfo = () => {
  return (
    <Layout>
      <Head>
        <title>Workcations Payment Details</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Payment />
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default PaymentInfo;
