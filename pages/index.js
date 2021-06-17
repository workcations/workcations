import { useEffect, useState } from "react";
import Head from "next/head";

import Layout from "../components/layout/layout";

import Hero from "../components/hero/hero";
import HomePage from "../containers/homepage/homepage";

import {
  getFeaturedProperties,
  getStatesList,
  filterByType,
} from "../utilities/properties";

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

const Home = ({
  featuredProperties,
  statesList,
  hostelsList,
  villasList,
  hotelsList,
}) => {
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
      <Hero />
      <HomePage
        screenWidth={screenWidth}
        loadElements={loadElements}
        featuredProperties={featuredProperties}
        statesList={statesList}
        hostelsList={hostelsList}
        villasList={villasList}
        hotelsList={hotelsList}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const featured = await getFeaturedProperties();
  const featuredProperties = JSON.stringify(featured);

  const states = await getStatesList();
  const statesList = JSON.stringify(states);

  const hostels = await filterByType("hostel");
  const hostelsList = JSON.stringify(hostels);

  const villas = await filterByType("villa");
  const villasList = JSON.stringify(villas);

  const hotels = await filterByType("hotel");
  const hotelsList = JSON.stringify(hotels);

  return {
    props: {
      featuredProperties,
      statesList,
      hostelsList,
      villasList,
      hotelsList,
    },
    revalidate: 1,
  };
};

export default Home;
