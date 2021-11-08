import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import {
  setPropertyListStart,
  resetFilters,
  setPropertyListSuccess,
} from "../../redux/property/properties.actions";
import { selectPropertyList } from "../../redux/property/properties.selectors";

import { toggleContactPopupPosition } from "../../redux/contact-popup/contact-popup.actions";

import Filters from "../../components/filters/filters";
import PropertyList from "../../containers/property-list/property-list";

import { Container, Heading } from "../../styles/properties/style";

import Layout from "../../components/layout/layout";

const Properties = ({ propertiesList }) => {
  const router = useRouter();
  const { cities, max, min, states, types } = router.query;

  const dispatch = useDispatch();
  const propertyList = useSelector(selectPropertyList);

  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListSuccess(propertiesList));
      //dispatch(setPropertyListStart());
    }
  }, [dispatch, propertyList]);

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
      router.replace(`${encodeURI(queryLink)}`, undefined, { shallow: true });
    } else {
      router.replace(`${encodeURI("")}`, undefined, { shallow: true });
    }
  };

  return (
    <Layout>
      <Head>
        <title>Workcations Properties</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Filters
          citiesLink={cities}
          statesLink={states}
          typesLink={types}
          minLink={min}
          maxLink={max}
          handleFilter={handleFilter}
        />
        <PropertyList
          cities={cities}
          states={states}
          types={types}
          min={min}
          max={max}
          loadElements={loadElements}
        />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const updateCost = (cost, multiplier) =>
    Math.ceil((cost * multiplier) / 50) * 50;

  const updatePrice = (property, multiplier) => {
    const { ultrashort, short, normal, long, ultralong, monthly } = property;

    return {
      ...property,
      ultrashort: updateCost(ultrashort, multiplier),
      short: updateCost(short, multiplier),
      normal: updateCost(normal, multiplier),
      long: updateCost(long, multiplier),
      ultralong: updateCost(ultralong, multiplier),
      monthly: updateCost(monthly, multiplier),
    };
  };

  const data = await axios({
    method: "get",
    url: "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/properties",
  });

  const propertiesList = data.data;

  return {
    props: {
      propertiesList: propertiesList
        .filter((item) => item.visibility === "TRUE")
        .map((item) => updatePrice(item, 1.15)),
    },
  };
};

export default Properties;
