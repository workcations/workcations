import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

import PropertyList from "../../containers/property-list-new/property-list";
import Layout from "../../components/layout/layout";

const Properties = ({
  minPrice,
  maxPrice,
  durationPrice,
  statesList,
  citiesList,
  typesList,
  maxPageCount,
}) => {
  const router = useRouter();

  const { asPath } = router;

  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);
  const [duration, setDuration] = useState(durationPrice);
  const [states, setStates] = useState(
    statesList.map((item) => {
      return {
        title: item.title,
        count: item.count,
        status: false,
      };
    })
  );
  const [cities, setCities] = useState(
    citiesList.map((item) => {
      return {
        title: item.title,
        count: item.count,
        status: false,
      };
    })
  );
  const [types, setTypes] = useState(
    typesList.map((item) => {
      return {
        title: item.title,
        count: item.count,
        status: false,
      };
    })
  );
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(maxPageCount);
  const [pagesList, setPagesList] = useState(
    new Array(maxPageCount)
      .fill("not started")
      .map((item, i) => (i === 0 ? "initial" : item))
  );
  const [isLoader, setIsLoader] = useState(true);

  console.log(pagesList);

  useEffect(() => {
    const ongoingList = pagesList.filter((item) => item === "ongoing");
    const finishedList = pagesList.filter((item) => item === "finished");

    if (ongoingList.length === 0) {
      if (finishedList.length === pagesList.length) {
        setIsLoader(false);
      } else if (pagesList[0] === "initial") {
        const newPagesList = pagesList.map((item, i) =>
          i === 0 ? "ongoing" : item
        );
        setPagesList(newPagesList);
      }
    } else {
      const newPage = pagesList.indexOf("ongoing") + 1;
      const query = `?page=${newPage}${
        asPath.split("?").length > 1 ? `&${asPath.split("?")[1]}` : ""
      }`;

      const slugsList = list.map((item) => item.slug);
      axios({
        method: "get",
        url: `https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/filter${query}`,
      }).then((data) => {
        const {
          list: newItems,
          maxPage: newMaxPage,
          min: newMin,
          max: newMax,
          duration: newDuration,
          state: newState,
          city: newCity,
          type: newType,
          statesList: newStatesList,
          citiesList: newCitiesList,
          typesList: newTypesList,
        } = data.data;

        const newList = [
          ...list,
          ...newItems.filter((item) => slugsList.indexOf(item.slug) === -1),
        ];

        setList(newList);

        let newPagesList = pagesList.map((item, i) =>
          i === newPage - 1 ? "finished" : item
        );

        if (newPage === 1) {
          setMaxPage(newMaxPage);
          newPagesList = newPagesList.filter((item, i) => i < newMaxPage);
        }

        setPagesList(newPagesList);
      });
    }
  }, [pagesList]);

  return (
    <Layout>
      <Head>
        <title>Workcations Properties</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PropertyList
        min={min}
        max={max}
        duration={duration}
        states={states}
        cities={cities}
        types={types}
        list={list}
        page={page}
        pagesList={pagesList}
        isLoader={isLoader}
        setPagesList={setPagesList}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await axios({
    method: "get",
    url: "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/filterInitial",
  });

  const { min, max, statesList, citiesList, typesList, maxPage } = data.data;
  return {
    props: {
      minPrice: min,
      maxPrice: max,
      durationPrice: "weekly",
      statesList: statesList,
      citiesList: citiesList,
      typesList: typesList,
      maxPageCount: maxPage,
    },
  };
};

export default Properties;
