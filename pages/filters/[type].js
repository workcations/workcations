import { useRouter } from "next/router";

import Head from "next/head";

import Layout from "../../components/layout/layout";
import FiltersMobile from "../../components/filters-mobile/filters-mobile";

const MobileFilter = () => {
  const router = useRouter();
  const { type, states, cities, types, min, max } = router.query;

  const handleFilter = (states, cities, min, max, types) => {
    let queryLink = "?";

    if (states && states.length) {
      queryLink += "&states=" + states[0];
      for (let i = 1; i < states.length; i++) {
        queryLink += "-" + states[i];
      }
    }

    if (cities && cities.length) {
      queryLink += "&cities=" + cities[0];
      for (let i = 1; i < cities.length; i++) {
        queryLink += "-" + cities[i];
      }
    }

    if (types && types.length) {
      queryLink += "&types=" + types[0];
      for (let i = 1; i < types.length; i++) {
        queryLink += "-" + types[i];
      }
    }

    if (min) {
      queryLink += "&min=" + min;
    }

    if (max) {
      queryLink += "&max=" + max;
    }

    if (queryLink.length > 1) {
      return encodeURI(queryLink);
    }

    return encodeURI("");
  };

  return (
    <Layout>
      <Head>
        <title>Filter By {type}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <FiltersMobile
        citiesLink={cities}
        statesLink={states}
        typesLink={types}
        minLink={min}
        maxLink={max}
        filterType={type}
        handleFilter={handleFilter}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          type: "type",
        },
      },
      {
        params: {
          type: "states",
        },
      },
      {
        params: {
          type: "price",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default MobileFilter;
