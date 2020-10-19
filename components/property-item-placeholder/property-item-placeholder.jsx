import React, { useState } from "react";

import {
  Card,
  ImageContainer,
  MainImage,
  Tag,
  SmallImageContainer,
  SmallImage,
  Details,
  Title,
  DetailsContainer,
  DetailsWrapper,
  Location,
  Safety,
  AmenitiesContainer,
  IconsContainer,
  Icon,
  Pricing,
} from "./property-item-placeholder.style";

const PropertyItemPlaceHolder = () => (
  <Card>
    <ImageContainer>
      <MainImage>
        <Tag />
      </MainImage>
      <SmallImageContainer>
        <SmallImage />
        <SmallImage />
        <SmallImage />
        <SmallImage />
      </SmallImageContainer>
    </ImageContainer>
    <Details>
      <DetailsContainer>
        <DetailsWrapper>
          <Location />
          <Safety />
          <AmenitiesContainer>
            <IconsContainer>
              <Icon />
              <Icon />
            </IconsContainer>
          </AmenitiesContainer>
        </DetailsWrapper>
        <Pricing />
      </DetailsContainer>
    </Details>
  </Card>
);

export default PropertyItemPlaceHolder;
