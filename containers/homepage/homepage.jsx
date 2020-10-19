import React, { useState, useEffect } from "react";
import Link from "next/link";

import FeaturedStays from "../../components/featured-stays/featured-stays";
import FeaturedStates from "../../components/featured-states/featured-states";
import {
  FeaturedHostels,
  FeaturedVillas,
  FeaturedHotels,
} from "../../components/featured-hostels/featured-hostels";
import Blogs from "../../components/blogs-homepage/blogs-homepage";
import PressRelease from "../../components/press-release/press-release";

import {
  MegaContainer,
  Container,
  SubContainer,
  Heading,
  SubHeading,
  Button,
} from "./homepage.style";

const HomePage = ({ screenWidth, loadElements, propertyList }) => {
  const [featured, setFeatured] = useState(() => {
    if (screenWidth < 601) {
      return 4;
    }
    return 6;
  });

  useEffect(() => {
    if (screenWidth < 601 && !loadElements) {
      setFeatured(2);
    } else if (screenWidth < 601 && loadElements) {
      setFeatured(4);
    } else if (!loadElements) {
      setFeatured(0);
    } else {
      setFeatured(6);
    }
  }, [screenWidth, loadElements]);
  return (
    <MegaContainer>
      <Container>
        <SubContainer>
          <Heading>Featured Stays</Heading>
          <SubHeading>Our Recommendation for Exotic Properties</SubHeading>
          <FeaturedStays featured={featured} propertyList={propertyList} />
          {featured === 6 ? (
            <Button
              onClick={() => {
                setFeatured(9);
              }}
            >
              Load More
            </Button>
          ) : featured === 4 ? (
            <Button
              onClick={() => {
                setFeatured(8);
              }}
            >
              Load More
            </Button>
          ) : (
            <Link href="/properties" passHref>
              <Button target="_blank">Explore All</Button>
            </Link>
          )}
        </SubContainer>
        <SubContainer>
          <Heading>Browse By States</Heading>
          <SubHeading>
            Some Amazing Destinations Curated for Your Perfect Vacation
          </SubHeading>
          {loadElements ? <FeaturedStates propertyList={propertyList} /> : null}
        </SubContainer>
        <SubContainer>
          <Heading>Hostels To Stop By</Heading>
          <SubHeading>
            Check out these wide range of Hostels for pocket friendly stays!
          </SubHeading>
          <FeaturedHostels propertyList={propertyList} />
          {/*loadElements ? (
            <FeaturedHostels propertyList={propertyList} />
          ) : null*/}
          <Link href="/properties?types=hostel" passHref>
            <Button target="_blank">Explore All Hostels</Button>
          </Link>
        </SubContainer>
        <SubContainer>
          <Heading>Entire Villas</Heading>
          <SubHeading>
            Villa Stays to Cater all your Family needs! Group of Friends? Hop
            On!
          </SubHeading>
          <FeaturedVillas propertyList={propertyList} />
          {/*loadElements ? <FeaturedVillas propertyList={propertyList} /> : null*/}
          <Link href="/properties?types=villa" passHref>
            <Button target="_blank">Explore All Villas</Button>
          </Link>
        </SubContainer>
        <SubContainer>
          <Heading>Economic Hotel Stays</Heading>
          <SubHeading>
            We have got your budgets sorted. Check In to the most Comfortable
            Hotel Properties
          </SubHeading>
          <FeaturedHotels propertyList={propertyList} />
          {/*loadElements ? <FeaturedHotels propertyList={propertyList} /> : null*/}
          <Link href="/properties?types=hotel" passHref>
            <Button target="_blank">Explore All Hotels</Button>
          </Link>
        </SubContainer>
        <SubContainer>
          <Heading>Some Good Reads</Heading>
          <SubHeading>
            Tune in to our Blog Section to Find out about the nuances of Work
            and Travel
          </SubHeading>
          {loadElements ? <Blogs /> : null}
        </SubContainer>
        <SubContainer>
          <Heading>Featured On</Heading>
          {loadElements ? <PressRelease /> : null}
        </SubContainer>
      </Container>
    </MegaContainer>
  );
};

export default HomePage;

/*
        <SubContainer>
          <Heading>Testimonials</Heading>
          <SubHeading>See what the Community has to Offer!</SubHeading>
        </SubContainer>

        */
