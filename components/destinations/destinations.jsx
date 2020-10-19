import React from "react";
import Link from "next/link";

import Carousel from "../carousel/carousel";

import SectionContainer from "../../style-components/section-container/section-container.style";
import Heading from "../../style-components/heading/heading.style";
import Button from "../../style-components/button/button.style";

const Destinations = () => (
  <SectionContainer>
    <Heading>
      Your Home <span>away from Home</span>
    </Heading>
    <Carousel slug={""} type={""} city={""} state={""} className="carousel" />
    <Link href="/properties" passHref>
      <Button>Explore</Button>
    </Link>
  </SectionContainer>
);

export default Destinations;
