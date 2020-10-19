import React, { Fragment } from "react";

import Carousel from "../carousel/carousel";

const SimilarProperties = ({ slug, type, city, state }) => (
  <Fragment>
    <Carousel slug={slug} type={type} city={city} state={state} />
  </Fragment>
);

export default SimilarProperties;
