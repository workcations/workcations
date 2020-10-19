import { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Fuse from "fuse.js";

import { setPropertyListStart } from "../../redux/property/properties.actions";
import { selectPropertyList } from "../../redux/property/properties.selectors";

import { Container, Heading } from "../../styles/properties/style";

import Layout from "../../components/layout/layout";
import PropertyListSearch from "../../containers/property-list-search/property-list-search";

const convertTitleState = (title, state) => {
  const arr = title.split(" ");
  let finalString = "" + arr[0] + " ";
  for (let i = 1; i < arr.length - 1; i++) {
    finalString += arr[i] + " ";
  }
  finalString += state;

  return finalString;
};

const slugToString = (slug) => {
  const arr = slug.split("-");
  let finalString = "" + arr[0];
  for (let i = 1; i < arr.length; i++) {
    finalString += " " + arr[i];
  }
  return finalString;
};

const Properties = () => {
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    if (!isServer) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    } 
  }, [search]);

  const dispatch = useDispatch();
  const propertyList = useSelector(selectPropertyList);

  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListStart());
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

  const [pattern, setPattern] = useState(search);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setPattern(search);
  }, [search]);

  useEffect(() => {
    setDisplayList(
      propertyList.map((property) => {
        return {
          titleState: convertTitleState(
            property.title,
            property.location.state
          ),
          slugString: slugToString(property.slug),
          slugStringState: convertTitleState(
            slugToString(property.slug),
            property.location.state
          ),
          ...property,
        };
      })
    );
  }, [propertyList]);

  const options = {
    // isCaseSensitive: false,
    includeScore: true,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: [
      {
        name: "titleState",
        weight: 2,
      },
      {
        name: "slugStringState",
        weight: 3,
      },
      {
        name: "slugString",
        weight: 3.1,
      },
      {
        name: "slug",
        weight: 0.1,
      },
      {
        name: "title",
        weight: 2.1,
      },
      {
        name: "type",
        weight: 1.2,
      },
      {
        name: "location.city",
        weight: 1.3,
      },
      {
        name: "location.state",
        weight: 1.4,
      },
      /*{
        name: "filtersAll",
        weight: 2,
      },*/
    ],
  };

  const fuse = new Fuse(displayList, options);

  const FilteredList = fuse.search(pattern);

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
          list={FilteredList}
          loadElements={loadElements}
          pattern={pattern}
        />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Properties;
