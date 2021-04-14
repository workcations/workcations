import { useRouter } from "next/router";

import Head from "next/head";

import Layout from "../../components/layout/layout";
import FiltersMobile from "../../components/filters-mobile-new/filters-mobile-new";
import { useEffect, useState } from "react";

const MobileFilter = ({
  propertiesData,
  properties,
  statesArray,
  featuresArray,
  typesArray,
  pricing,
  pricingCategories,
  pricingDaily,
  pricingWeekly,
  pricingMonthly,
}) => {
  const router = useRouter();

  const [queryLink, setQueryLink] = useState(router.query);

  const routerPath = router.asPath.split("?")[1];

  useEffect(() => {
    setQueryLink(router.query);
  }, [router.query]);

  return (
    <Layout>
      <Head>
        <title>Filter Properties</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <FiltersMobile
        routerPath={routerPath}
        queryLink={queryLink}
        propertiesData={propertiesData}
        properties={properties}
        statesArray={statesArray}
        featuresArray={featuresArray}
        typesArray={typesArray}
        pricing={pricing}
        pricingCategories={pricingCategories}
        pricingDaily={pricingDaily}
        pricingWeekly={pricingWeekly}
        pricingMonthly={pricingMonthly}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const getPropertiesList = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const url = "https://api.wanderon.in/properties";

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  };

  const propertiesData = await getPropertiesList();

  const properties = propertiesData.filter(
    (item) => item.visibility === "TRUE"
  );

  let citiesRawArray = [];
  let statesRawArray = [];
  let featuresRawArray = [];
  let typesRawArray = [];

  let citiesSet = new Set();
  let statesSet = new Set();
  let featuresSet = new Set();
  let typesSet = new Set();

  properties.map((item) => {
    citiesSet.add(item.location.city.toLowerCase());
    citiesRawArray.push(item.location.city.toLowerCase());

    statesSet.add(item.location.state.toLowerCase());
    statesRawArray.push(item.location.state.toLowerCase());

    item.featuresAll.map((subItem) => {
      featuresSet.add(subItem.toLowerCase());
      featuresRawArray.push(subItem.toLowerCase());
    });

    typesSet.add(item.type.toLowerCase());
    typesRawArray.push(item.type.toLowerCase());
  });

  const citiesArray = [...citiesSet].map((item) => {
    return {
      city: item,
      state: statesRawArray[citiesRawArray.indexOf(item)],
    };
  });
  const statesArray = [...statesSet].map((item) => {
    return {
      count: statesRawArray.filter((subItem) => subItem === item).length,
      title: item,
      cities: citiesArray
        .filter((subItem) => subItem.state === item)
        .map((subItem) => {
          return {
            title: subItem.city,
            count: citiesRawArray.filter(
              (subSubItem) => subItem.city === subSubItem
            ).length,
          };
        }),
    };
  });
  const featuresArray = [...featuresSet].map((item) => {
    return {
      title: item,
      count: featuresRawArray.filter((subItem) => subItem === item).length,
    };
  });
  const typesArray = [...typesSet].map((item) => {
    return {
      title: item,
      count: typesRawArray.filter((subItem) => subItem === item).length,
    };
  });

  const pricing = {
    ultraShort: {
      min: Math.min(...properties.map((item) => item.ultrashort)),
      max: Math.max(...properties.map((item) => item.ultrashort)),
    },
    short: {
      min: Math.min(...properties.map((item) => item.short)),
      max: Math.max(...properties.map((item) => item.short)),
    },
    normal: {
      min: Math.min(...properties.map((item) => item.normal)),
      max: Math.max(...properties.map((item) => item.normal)),
    },
    long: {
      min: Math.min(...properties.map((item) => item.long)),
      max: Math.max(...properties.map((item) => item.long)),
    },
    ultraLong: {
      min: Math.min(...properties.map((item) => item.ultralong)),
      max: Math.max(...properties.map((item) => item.ultralong)),
    },
  };

  const pricingCategories = [
    {
      min: pricing.ultraLong.min,
      max: 999,
    },
    {
      min: 1000,
      max: 2499,
    },
    {
      min: 2500,
      max: 4999,
    },
    {
      min: 5000,
      max: 9999,
    },
    {
      min: 10000,
      max: 19999,
    },
    {
      min: 20000,
      max: 29999,
    },
    {
      min: 30000,
      max: pricing.ultraShort.max,
    },
  ];

  const pricingDaily = pricingCategories.map((item) =>
    properties.filter(
      (subItem) =>
        subItem.ultrashort >= item.min && subItem.ultrashort <= item.max
    )
  );

  const pricingWeekly = pricingCategories.map((item) =>
    properties.filter(
      (subItem) => subItem.short >= item.min && subItem.short <= item.max
    )
  );

  const pricingMonthly = pricingCategories.map((item) =>
    properties.filter(
      (subItem) =>
        subItem.ultralong >= item.min && subItem.ultralong <= item.max
    )
  );

  return {
    props: {
      propertiesData: propertiesData,
      properties: properties,
      statesArray: statesArray,
      featuresArray: featuresArray,
      typesArray: typesArray,
      pricing: pricing,
      pricingCategories: pricingCategories,
      pricingDaily: pricingDaily,
      pricingWeekly: pricingWeekly,
      pricingMonthly: pricingMonthly,
    },
  };
};

export default MobileFilter;
