import React from "react";

import {
  Card,
  Image,
  Tag,
  Price,
  Details,
  Title,
  Location,
} from "./featured-stays-placeholder.style";

const FeaturedStaysPlaceHolder = () => (
  <Card>
    <Image>
      <Tag />
      <Price />
    </Image>
    <Details>
      <Title />
      <Location />
    </Details>
  </Card>
);

export default FeaturedStaysPlaceHolder;
