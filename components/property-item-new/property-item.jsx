import React, { useState, Fragment } from "react";
import Link from "next/link";
import Slider from "react-slick";

import {
  Container,
  ImageContainer,
  ImageContainerMobile,
  MainImageMobile,
  MainImage,
  MainImageShimmer,
  Type,
  SmallImageContainer,
  SmallImage,
  SmallImageShimmer,
  Details,
  Title,
  DetailsContainer,
  DetailsWrapper,
  Location,
  Safety,
  AmenitiesContainer,
  AmenitiesItem,
  AmenitiesIcon,
  Pricing,
} from "./property-item.style";

const displayPrice = (price, duration) =>
  `INR ${(
    (duration === "short" ? 1 : duration === "weekly" ? 7 : 30) * price
  ).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })}/-`;

const displayTag = (duration) =>
  duration === "short"
    ? "per day"
    : duration === "weekly"
    ? "per week"
    : "per month";

const PropertyItem = ({
  title,
  slug,
  type,
  features,
  ultrashort,
  short,
  normal,
  long,
  ultralong,
  images,
  location,
  duration,
  price,
}) => {
  const { city, state } = location;
  const [currentImage, setCurrent] = useState(images[0]);

  const settings = {
    dots: false,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    cssEase: "ease-in-out",
    swipeToSlide: true,
  };

  return (
    <Link href={"/property/" + slug} passHref>
      <Container className="propertyItem" target="_blank">
        <ImageContainerMobile>
          <Slider {...settings}>
            {images.map((image, i) => (
              <MainImageMobile
                key={`Main Image ${slug} ${i + 1}`}
                /*style={{
                  backgroundImage: `url(https://d1xmqx9e0b6ljd.cloudfront.net/${slug}/${image}.jpg)`,
                }}*/
              >
                <img
                  /*src={`https://d1xmqx9e0b6ljd.cloudfront.net/${slug}/${image}.jpg`}*/
                  alt={`${slug} ${image}`}
                />
              </MainImageMobile>
            ))}
          </Slider>
        </ImageContainerMobile>
        <ImageContainer>
          <MainImageShimmer>
            <MainImage
            /*style={{
                backgroundImage:
                  "url(https://d1xmqx9e0b6ljd.cloudfront.net/" +
                  slug +
                  "/" +
                  currentImage +
                  ".jpg)",
              }}*/
            >
              <Type tag={type}>{type}</Type>
            </MainImage>
          </MainImageShimmer>
          <SmallImageContainer>
            {images.map((image, i) => (
              <SmallImageShimmer key={`${slug}-image-${i + 1}`}>
                <SmallImage
                  /*style={{
                    backgroundImage:
                      "url(https://d1xmqx9e0b6ljd.cloudfront.net/" +
                      slug +
                      "/" +
                      image +
                      ".jpg)",
                  }}*/
                  onMouseEnter={() => {
                    setCurrent(image);
                  }}
                />
              </SmallImageShimmer>
            ))}
          </SmallImageContainer>
        </ImageContainer>
        <Details>
          <Title>{title}</Title>
          <DetailsContainer>
            <DetailsWrapper>
              <Location>
                {city}, {state}
              </Location>

              <Safety>
                <img src="./safety.svg" alt="Workcations Safety Verified" />
                <span>Workcations Safety Verified</span>
              </Safety>
              <AmenitiesContainer>
                <span>Amenties</span>
                <AmenitiesItem>
                  {features.map((amenity, i) =>
                    amenity === "wifi" ? (
                      <AmenitiesIcon key={i}>
                        <img src="./wifi.svg" alt="WiFi" />
                        <div>WiFi</div>
                      </AmenitiesIcon>
                    ) : amenity === "power backup" ? (
                      <AmenitiesIcon key={i}>
                        <img src="./power.svg" alt="Power Backup" />
                        <div>Power Backup</div>
                      </AmenitiesIcon>
                    ) : amenity === "daily meals" ? (
                      <AmenitiesIcon key={i}>
                        <img src="./meals.svg" alt="Dailyly Meals" />
                        <div>Daily Meals</div>
                      </AmenitiesIcon>
                    ) : null
                  )}
                </AmenitiesItem>
              </AmenitiesContainer>
            </DetailsWrapper>
            <Pricing>
              <span>{displayPrice(price, duration)}</span>
              {displayTag(duration)}
            </Pricing>
          </DetailsContainer>
        </Details>
      </Container>
    </Link>
  );
};

export default PropertyItem;
