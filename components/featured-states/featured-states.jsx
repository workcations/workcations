import React, { Fragment } from "react";
import Link from "next/link";

import { Container, Card, Text, Title, Count } from "./featured-states.style";

const List = [
  {
    title: "himachal pradesh",
    image: "himachal",
  },
  {
    title: "uttarakhand",
    image: "uttarakhand",
  },
  {
    title: "goa",
    image: "goa",
  },
  {
    title: "karnataka",
    image: "karnataka",
  },
  {
    title: "maharashtra",
    image: "maharashtra",
  },
  {
    title: "rajasthan",
    image: "rajasthan",
  },
];

const FeaturedStates = ({ propertyList }) => (
  <Container className="remove-scrollbar">
    {List.map((item) => (
      <Link
        key={item.title}
        href={`/properties?states=${encodeURI(item.title)}`}
        passHref
      >
        <Card style={{ backgroundImage: `url(${item.image}.png)` }}>
          <Text>
            <Title>{item.title}</Title>
            <Count>
              {propertyList.filter(
                (property) =>
                  property.location.state === item.title &&
                  property.visibility === "TRUE"
              ).length > 0 ? (
                <Fragment>
                  {
                    propertyList.filter(
                      (property) =>
                        property.location.state === item.title &&
                        property.visibility === "TRUE"
                    ).length
                  }{" "}
                  Properties
                </Fragment>
              ) : null}
            </Count>
          </Text>
        </Card>
      </Link>
    ))}
  </Container>
);

export default FeaturedStates;
