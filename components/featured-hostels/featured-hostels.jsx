import React, { useRef, Fragment } from "react";
import Link from "next/link";

import {
  FeaturedHostelsPlaceHolder,
  FeaturedVillasPlaceHolder,
  FeaturedHotelsPlaceHolder,
} from "../featured-hostels-placeholder/featured-hostels-placeholder";

import {
  Container,
  FlexContainer,
  ArrowContainer,
  Card,
  Image,
  ImageShimmer,
  ImageLong,
  ImageLongShimmer,
  Price,
  Details,
  Title,
  Location,
  MoreProperties,
} from "./featured-hostels.styles";

const List = new Array(6).fill(true);

const FeaturedHostels = ({ propertyList }) => {
  const cardsContainer = useRef(null);

  const nextCards = () => {
    cardsContainer.current.scrollLeft += 300;
  };

  const previousCards = () => {
    cardsContainer.current.scrollLeft -= 300;
  };

  return (
    <Container>
      <ArrowContainer onClick={previousCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
        </svg>
      </ArrowContainer>
      <FlexContainer ref={cardsContainer} className="remove-scrollbar">
        {propertyList.length > 0 ? (
          <Fragment>
            {propertyList
              .filter((property) => property.visibility === "TRUE")
              .filter((property) => property.type === "hostel")
              .filter((property, i) => i < 6)
              .map((property) => (
                <Link
                  key={property.slug}
                  href={`/property/${property.slug}`}
                  passHref
                >
                  <Card key={property.slug} target="_blank">
                    <ImageLongShimmer>
                      <ImageLong
                        style={{
                          backgroundImage: `url(https://d1xmqx9e0b6ljd.cloudfront.net/${property.slug}/${property.images[0]}.jpg)`,
                        }}
                      >
                        <Price>
                          {Number(property.short).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })}
                          <span>/night</span>
                        </Price>
                      </ImageLong>
                    </ImageLongShimmer>
                    <Details>
                      <Title>{property.title}</Title>
                      <Location>
                        {property.location.city}, {property.location.state}
                      </Location>
                    </Details>
                  </Card>
                </Link>
              ))}
          </Fragment>
        ) : (
          <Fragment>
            {List.map((item, i) => (
              <FeaturedHostelsPlaceHolder key={`hostel${i + 1}`} />
            ))}
          </Fragment>
        )}

        <Link href="/properties?types=hostel" passHref>
          <MoreProperties target="_blank">
            Explore All Hostels<span></span>
          </MoreProperties>
        </Link>
      </FlexContainer>
      <ArrowContainer onClick={nextCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </ArrowContainer>
    </Container>
  );
};

const FeaturedVillas = ({ propertyList }) => {
  const cardsContainer = useRef(null);

  const nextCards = () => {
    cardsContainer.current.scrollLeft += 300;
  };

  const previousCards = () => {
    cardsContainer.current.scrollLeft -= 300;
  };

  return (
    <Container>
      <ArrowContainer onClick={previousCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
        </svg>
      </ArrowContainer>
      <FlexContainer ref={cardsContainer} className="remove-scrollbar">
        {propertyList.length > 0 ? (
          <Fragment>
            {propertyList
              .filter((property) => property.visibility === "TRUE")
              .filter((property) => property.type === "villa")
              .filter((property, i) => i < 6)
              .map((property) => (
                <Link
                  key={property.slug}
                  href={`/property/${property.slug}`}
                  passHref
                >
                  <Card key={property.slug} target="_blank">
                    <ImageShimmer>
                      <Image
                        style={{
                          backgroundImage: `url(https://d1xmqx9e0b6ljd.cloudfront.net/${property.slug}/${property.images[0]}.jpg)`,
                        }}
                      >
                        <Price>
                          {Number(property.short).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })}
                          <span>/night</span>
                        </Price>
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
              ))}
          </Fragment>
        ) : (
          <Fragment>
            {List.map((item, i) => (
              <FeaturedVillasPlaceHolder key={`villa${i + 1}`} />
            ))}
          </Fragment>
        )}

        <Link href="/properties?types=villa" passHref>
          <MoreProperties target="_blank">
            Explore All Villas<span></span>
          </MoreProperties>
        </Link>
      </FlexContainer>
      <ArrowContainer onClick={nextCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </ArrowContainer>
    </Container>
  );
};

const FeaturedHotels = ({ propertyList }) => {
  const cardsContainer = useRef(null);

  const nextCards = () => {
    cardsContainer.current.scrollLeft += 300;
  };

  const previousCards = () => {
    cardsContainer.current.scrollLeft -= 300;
  };

  return (
    <Container>
      <ArrowContainer onClick={previousCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
        </svg>
      </ArrowContainer>
      <FlexContainer ref={cardsContainer} className="remove-scrollbar">
        {propertyList.length > 0 ? (
          <Fragment>
            {propertyList
              .filter((property) => property.visibility === "TRUE")
              .filter((property) => property.type === "hotel")
              .filter((property, i) => i < 6)
              .map((property) => (
                <Link
                  key={property.slug}
                  href={`/property/${property.slug}`}
                  passHref
                >
                  <Card key={property.slug} target="_blank">
                    <ImageLongShimmer>
                      <ImageLong
                        style={{
                          backgroundImage: `url(https://d1xmqx9e0b6ljd.cloudfront.net/${property.slug}/${property.images[0]}.jpg)`,
                        }}
                      >
                        <Price>
                          {Number(property.short).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })}
                          <span>/night</span>
                        </Price>
                      </ImageLong>
                    </ImageLongShimmer>
                    <Details>
                      <Title>{property.title}</Title>
                      <Location>
                        {property.location.city}, {property.location.state}
                      </Location>
                    </Details>
                  </Card>
                </Link>
              ))}
          </Fragment>
        ) : (
          <Fragment>
            {List.map((item, i) => (
              <FeaturedHotelsPlaceHolder key={`hotel${i + 1}`} />
            ))}
          </Fragment>
        )}

        <Link href="/properties?types=hotel" passHref>
          <MoreProperties target="_blank">
            Explore All Hotels<span></span>
          </MoreProperties>
        </Link>
      </FlexContainer>
      <ArrowContainer onClick={nextCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </ArrowContainer>
    </Container>
  );
};

export { FeaturedHostels, FeaturedVillas, FeaturedHotels };
