import React, { useRef } from "react";

import {
  Card,
  Image,
  ImageLong,
  Price,
  Details,
  Title,
  Location,
} from "./featured-hostels-placeholder.styles";

const FeaturedHostelsPlaceHolder = () => (
  <Card>
    <ImageLong>
      <Price />
    </ImageLong>
    <Details>
      <Title />
      <Location />
    </Details>
  </Card>
);

const FeaturedVillasPlaceHolder = () => (
  <Card>
    <Image>
      <Price />
    </Image>
    <Details>
      <Title />
      <Location />
    </Details>
  </Card>
);

const FeaturedHotelsPlaceHolder = () => (
  <Card>
    <ImageLong>
      <Price />
    </ImageLong>
    <Details>
      <Title />
      <Location />
    </Details>
  </Card>
);

export {
  FeaturedHostelsPlaceHolder,
  FeaturedVillasPlaceHolder,
  FeaturedHotelsPlaceHolder,
};
