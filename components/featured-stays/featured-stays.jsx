import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";

import FeaturedStaysPlaceHolder from "../featured-stays-placeholder/featured-stays-placeholder";

import {
  Container,
  Card,
  ImageShimmer,
  Image,
  ImageContainer,
  Type,
  Price,
  Details,
  Title,
  Location,
} from "./featured-stays.style";

const FeaturedStays = ({ featured, featuredProperties }) => {
  const [tiles, setTiles] = useState(new Array(featured).fill(true));

  useEffect(() => {
    setTiles(new Array(featured).fill(true));
  }, [featured]);

  const featuredList = JSON.parse(featuredProperties);

  return (
    <Container>
      {!!featuredList && featuredList.length > 0 ? (
        <Fragment>
          {featuredList.map((property, i) =>
            featured > i ? (
              <Link
                key={property.slug}
                href={`/property/${property.slug}`}
                passHref
              >
                <Card key={property.slug} target="_blank">
                  <ImageShimmer>
                    <Image
                      style={{
                        backgroundImage: `linear-gradient(to top,rgba(0,0,0,.7) 15%,rgba(0,0,0,0) 35%),url(https://d1xmqx9e0b6ljd.cloudfront.net/${property.slug}/${property.images[0]}.jpg)`,
                      }}
                    >
                      <ImageContainer>
                        <Type type={property.type}>{property.type}</Type>
                        {/*  <Price>
                          {Number(property.ultrashort).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })}
                          <span>/night</span>
                        </Price> */}
                      </ImageContainer>
                    </Image>
                  </ImageShimmer>
                  <Details>
                    <Title>{property.title}</Title>
                    <Location>
                      {property.location.city}, {property.location.state}
                    </Location>
                  </Details>
                </Card>
              </Link>
            ) : null
          )}
        </Fragment>
      ) : (
        <Fragment>
          {tiles.map((tile, i) => (
            <FeaturedStaysPlaceHolder key={`tile${i}`} />
          ))}
        </Fragment>
      )}
    </Container>
  );
};

export default FeaturedStays;
