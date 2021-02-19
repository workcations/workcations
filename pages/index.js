import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import Layout from "../components/layout/layout";

import Hero from "../components/hero/hero";
import HomePage from "../containers/homepage/homepage";
import Outlook from "../components/outlook/outlook";
import Destinations from "../components/destinations/destinations";
import Recreational from "../components/recreational/recreational";
import Faqs from "../components/faq/faq";

import { setPropertyListStart } from "../redux/property/properties.actions";
import { selectPropertyList } from "../redux/property/properties.selectors";

import SectionContainer from "../style-components/section-container/section-container.style";

const localBusinessObject = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "workcations",
  image: "https://www.workcations.in/logo.png",
  "@id": "https://www.workcations.in/#homepage",
  url: "https://www.workcations.in/",
  telephone: "919870301533",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "UJ Tower, DLF City Phase 3, Near Guru Dronacharya, Metro Station, Sector 26",
    addressLocality: "Gurugram",
    postalCode: "122002",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/Workcations.in/",
    "https://www.facebook.com/Workcations.in/",
    "https://www.youtube.com/c/WanderOn",
    "https://www.linkedin.com/company/workcations-in",
    "https://www.workcations.in/",
  ],
};

const searchSitelinkObject = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "workcations",
  url: "https://www.workcations.in/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.workcations.in/search?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const LocalBusinessSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessObject) }}
  ></script>
);

const SearchSitelinkObjectSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(searchSitelinkObject) }}
  ></script>
);

const Home = () => {
  const dispatch = useDispatch();
  const propertyList = useSelector(selectPropertyList);
  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListStart());
    }
  }, [dispatch, propertyList]);

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
        <title>Workcations - Think Remote Work! Think Workcations!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Enjoy work and vacations from Peaceful destinations with Fast wi-fi and homely meals. We are committed to provide chill and productive work environment at affordable prices."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:description"
          content="Enjoy work and vacations from Peaceful destinations with Fast wi-fi and homely meals. We are committed to provide chill and productive work environment at affordable prices."
        />
        <meta
          property="og:title"
          content="Workcations - Think Remote Work! Think Workcations!"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(searchSitelinkObject),
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessObject),
          }}
        ></script>
      </Head>
      <Hero propertyList={propertyList} />
      <HomePage
        screenWidth={screenWidth}
        propertyList={propertyList}
        loadElements={loadElements}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;

/* <HomePage loadElements={loadElements} /> */

/* <Outlook />
      {loadElements ? <Destinations /> : null}
      {loadElements ? <Recreational /> : null}
      {loadElements ? (
        <SectionContainer>
          <Faqs heading={true} />
        </SectionContainer>
      ) : null}

      */
