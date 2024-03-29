import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

import Layout from "../../components/layout/layout";
import PropertyPage from "../../containers/property-page-new/property-page-new";
import Spinner from "../../components/spinner/spinner";

const Property = ({ property, isAvailability, availability }) => {
  const router = useRouter();

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
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      {router.isFallback ? (
        <Spinner />
      ) : (
        <PropertyPage
          property={property}
          isAvailability={isAvailability}
          availability={availability}
          loadElements={loadElements}
          isServer={isServer}
          screenWidth={screenWidth}
        />
      )}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const getPropertiesListExcel = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const url =
      "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/properties";

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

  const properties = await getPropertiesListExcel();

  const filteredSlugsList = [
    "3176-apartment-in-southgoa",
    "11139 -3bhk-apartment-in-shimla",
  ];

  const pathArray = properties
    .filter(
      (item) =>
        filteredSlugsList.indexOf(item.slug) === -1 &&
        item.visibility.toLowerCase() === "true"
    )
    .map((property) => {
      return {
        params: {
          slug: property.slug,
        },
      };
    });

  return {
    paths: pathArray,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const updateCost = (cost, multiplier) =>
    Math.ceil((cost * multiplier) / 50) * 50;

  const updatePricingObject = (data, multiplier) => {
    const { ultraShort, short, normal, long, ultraLong, monthly } = data;

    return {
      ultraShort: updateCost(ultraShort, multiplier),
      short: updateCost(short, multiplier),
      normal: updateCost(normal, multiplier),
      long: updateCost(long, multiplier),
      ultraLong: updateCost(ultraLong, multiplier),
      monthly: updateCost(monthly, multiplier),
    };
  };

  const updatePrice = (property, multiplier) => {
    const { inventory } = property;
    const newInventory = inventory.map((item, i) => {
      const { pricing } = item;

      const newPricing = pricing.map((subItem) => {
        const { roomOnly, extraBed } = subItem;

        return {
          ...subItem,
          roomOnly: updatePricingObject(roomOnly, 1.5),
          extraBed: extraBed.map((subSubItem) =>
            updatePricingObject(subSubItem, 1.5)
          ),
        };
      });

      return { ...item, pricing: newPricing };
    });

    return { ...property, inventory: newInventory };
  };

  const getPropertyExcel = async (slug) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const url =
      "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/propertyData/" +
      slug.split("-")[0];

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

  const propertyData = await getPropertyExcel(params.slug);

  const isAvailability = !!propertyData.availability;

  const availability = isAvailability ? propertyData.availability : [];

  return {
    props: {
      property: updatePrice(propertyData),
      isAvailability,
      availability,
    },
    revalidate: 1,
  };
};

export default Property;
