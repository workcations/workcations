import React, { useEffect } from "react";
import Head from "next/head";

import * as gtag from "../components/ga";

import Layout from "../components/layout/layout";

const Internal = () => {
  /*const isServer = typeof window === "undefined";

  useEffect(() => {
    if (!isServer) {
      gtag.internalTraffic();
    }
  }, [isServer]);*/

  return (
    <Layout>
      <Head>
        <title>Filter Internal Traffic</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-175449839-1', 'auto');ga('send', 'pageview',{'dimension1':'employee'});`,
          }}
        ></script>
      </Head>
      <div>Congrats you have opted out from GA Tracking on this website.</div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Internal;

/*

<script type="text/javascript">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-175449839-1', 'auto');
ga('send', 'pageview',{'dimension1':'employee'});
</script>

*/

/*

<script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-175449839-1', 'auto');ga('send', 'pageview',{'dimension1':'employee'});ga('set', 'dimension1', 'employee')`,
          }}
        ></script>

        */
