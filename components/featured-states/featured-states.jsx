import React, { Fragment } from "react";
import Link from "next/link";

import { Container, Card, Text, Title, Count } from "./featured-states.style";

const List = [
  {
    title: "goa",
    image: "goa",
  },
  {
    title: "himachal pradesh",
    image: "himachal",
  },
  {
    title: "uttarakhand",
    image: "uttarakhand",
  },
  {
    title: "kerala",
    image: "kerala",
  },
  {
    title: "karnataka",
    image: "karnataka",
  },
  {
    title: "rajasthan",
    image: "rajasthan",
  },
];

const FeaturedStates = ({ statesList }) => {
  const states = JSON.parse(statesList);
  return (
    <Container className="remove-scrollbar">
      {List.map((item, i) => (
        <Link
          key={item.title}
          href={`/properties?states=${encodeURI(item.title)}`}
          passHref
        >
          <Card style={{ backgroundImage: `url(${item.image}.png)` }}>
            <Text>
              <Title>{item.title}</Title>
              <Count>
                {!!states & (states.length > 0) ? (
                  <Fragment>{states[i].length} Properties</Fragment>
                ) : null}
              </Count>
            </Text>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default FeaturedStates;
