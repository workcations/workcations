import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

import { Container, Heading } from "../../styles/properties/style";

import Layout from "../../components/layout/layout";
import PropertyListSearch from "../../containers/property-list-search/property-list-search";

const Properties = ({ maxPage, properties, search }) => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([...properties]);
  const [isLoader, setIsLoader] = useState(true);
  const [pagesList, setPagesList] = useState(
    new Array(maxPage)
      .fill(true)
      .map((item, i) => (i === 0 ? "initial" : "not started"))
  );

  useEffect(() => {
    let newPagesList = [...pagesList];
    const index = newPagesList.indexOf("ongoing");

    if (index !== -1) {
      const pageNo = index + 1;
      newPagesList = newPagesList.map((item, i) =>
        i === index ? "finished" : item
      );

      const url = `https://api.workcations.in/search/${search}/${pageNo}`;
      const config = {
        method: "get",
        url,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const slugsList = list.map((item) => item.item.slug);

      axios(config)
        .then((data) => {
          const newList = data.data.list.filter(
            (item) => slugsList.indexOf(item.item.slug) === -1
          );

          setList([...list, ...newList]);
          setPagesList(newPagesList);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const finishedList = pagesList.filter((item) => item === "finished");

      if (finishedList.length === pagesList.length) {
        setIsLoader(false);
      }
    }
  }, [pagesList]);

  useEffect(() => {
    if (!isServer) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [search]);

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

  const [pattern, setPattern] = useState(search);

  useEffect(() => {
    setPattern(search);
  }, [search]);

  return (
    <Layout>
      <Head>
        <title>Workcations Properties</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Heading>
          find your <span>Workcation</span>
        </Heading>
        <PropertyListSearch
          list={list}
          loadElements={loadElements}
          pattern={pattern}
          pagesList={pagesList}
          setPagesList={setPagesList}
          isLoader={isLoader}
        />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ query: { search } }) => {
  const url = `https://api.workcations.in/search/${search}/1`;

  const config = {
    method: "get",
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = await axios(config).then((data) => {
    return { maxPage: data.data.maxPage, properties: data.data.list };
  });

  return {
    props: {
      maxPage: data.maxPage,
      properties: data.properties,
      search: search,
    },
  };
};

export default Properties;
