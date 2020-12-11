import React, { useEffect, useState, Fragment } from "react";
import Head from "next/head";

import Layout from "../components/layout/layout";

import styled from "styled-components";

const Container = styled.div`
  padding: 5vh 10vw;

  @media only screen and (max-width: 600px) {
    padding: 25px 5vw;
  }
`;

const Text = styled.div`
  font-size: 1.3vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 3.5vw;
    padding-bottom: 5vw;
  }

  strong {
    text-transform: capitalize;
    color: #ff6c6b;
    font-size: 1.2em;
  }
`;

const List = styled.div`
  margin: 50px 0px 10px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 25px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 25px 0px;
  }
`;

const ListFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px #dddddd;
`;

const ItemTitle = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: #ff6c6b;
  color: white;
  padding: 5px 15px;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    padding: 10px 15px;
    font-size: 4.4vw;
  }
`;

const ItemData = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
  padding: 10px 15px;
  color: #333333;
  border: 1.5px solid #dddddd;
  border-top: 0px;
  border-radius: 0px 0px 5px 5px;

  div {
    display: flex;
    align-items: flex-start;
    line-height: 1.2vw;

    @media only screen and (max-width: 600px) {
      line-height: 4.5vw;
    }
  }

  img {
    margin-top: 0.2vw;
    width: 1vw;
    margin-right: 10px;

    @media only screen and (max-width: 600px) {
      width: 4.5vw;
    }
  }
`;

const thingsToCarry = [
  {
    title: "Your Equipment",
    data: [
      "Your Laptop, mobiles, earphones and their chargers.",
      "Extension Chord",
      "Power Bank",
    ],
  },
  {
    title: "Regarding your Safety",
    data: ["Multiple Facemasks (N-95 preferred)", "Hand Sanitizer"],
  },
  {
    title: "Clothes",
    data: [
      "A woollen cap",
      "UV protected sunglasses",
      "Inner Thermals",
      "Cotton T-shirts",
      "Fleece Jacket ",
      "Down Jacket",
      "1 Pair of Gloves",
      "Long Pants",
      "Sets of Undergarments",
      "Multiple pair of warm and cotton socks ",
      "Towel",
      "A rain jacket or a poncho",
      "A light blanket/ shawl for transit",
    ],
  },
  {
    title: "Footwear",
    data: [
      "Above-the-ankle waterproof and breathable hiking boots with good grip.",
      "Bathroom Slippers",
    ],
  },
  {
    title: "Personal Accessories",
    data: [
      "Toothpaste, Toothbrush, Comb and other toileteries.",
      "Paper Soap/Sanitizer",
      "An SPF 40+ Sunscreen ,Lip Balm, Coldcreams",
      "Body Spray",
      "Led Torch Light",
    ],
  },
  {
    title: "For Weekend Outbound",
    data: ["A rucksack and a day pack", "Water Bottle"],
  },
];

const ThingsToCarry = () => {
  return (
    <Layout>
      <Head>
        <title>Things to Carry for your workcation in mountains</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Just a Gentle Reminder to our workcationist! Things to Carry for your workcation in mountains."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:description"
          content="Just a Gentle Reminder to our workcationist! Things to Carry for your workcation in mountains."
        />
        <meta
          property="og:title"
          content="Things to Carry for your workcation in mountains"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Text>
          Just a <strong>Gentle Reminder</strong> to our workcationist!
        </Text>
        <Text>
          <strong>Things to Carry</strong> for your workcation in mountains
        </Text>
        <List>
          <ListFlex>
            {thingsToCarry.map((item, i) =>
              i === 0 || i === 3 || i === 5 ? (
                <ListItem key={`ttc ${i + 1}`}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemData>
                    {item.data.map((subItem, j) => (
                      <div key={`${item.title} no ${j + 1}`}>
                        <img src="/check-tick.svg" /> {subItem}
                      </div>
                    ))}
                  </ItemData>
                </ListItem>
              ) : null
            )}
          </ListFlex>
          <ListFlex>
            {thingsToCarry.map((item, i) =>
              i === 1 || i === 4 ? (
                <ListItem key={`ttc ${i + 1}`}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemData>
                    {item.data.map((subItem, j) => (
                      <div key={`${item.title} no ${j + 1}`}>
                        <img src="/check-tick.svg" /> {subItem}
                      </div>
                    ))}
                  </ItemData>
                </ListItem>
              ) : null
            )}
          </ListFlex>
          <ListFlex>
            {thingsToCarry.map((item, i) =>
              i === 2 ? (
                <ListItem key={`ttc ${i + 1}`}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemData>
                    {item.data.map((subItem, j) => (
                      <div key={`${item.title} no ${j + 1}`}>
                        <img src="/check-tick.svg" /> {subItem}
                      </div>
                    ))}
                  </ItemData>
                </ListItem>
              ) : null
            )}
          </ListFlex>
        </List>
        <Text>
          And most importantly carry <strong>a happy vibe!</strong>
        </Text>
        <Text>
          We welcome you to the world of <strong>Workcations!</strong>
        </Text>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default ThingsToCarry;
