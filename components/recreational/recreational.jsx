import React from "react";

import SectionContainer from "../../style-components/section-container/section-container.style";
import Heading from "../../style-components/heading/heading.style";

import { Flex, FlexItem } from "./recreational.style";

const Recreational = () => (
  <SectionContainer>
    <Heading>
      Weekdays are fun! Weekends are a blast! Indulge in{" "}
      <span>recreational activities</span> to unwind!
    </Heading>
    <Flex>
      <FlexItem>
        <img src="./passion.svg" alt="Follow Your Passion" />
        <span>Follow Your Passion</span>
      </FlexItem>
      <FlexItem>
        <img src="./strolling.svg" alt="Go Strolling Around" />
        <span>Go Strolling Around</span>
      </FlexItem>
      <FlexItem>
        <img src="./nature.svg" alt="Connect with Nature" />
        <span>Connect with Nature</span>
      </FlexItem>
      <FlexItem>
        <img src="./outlive.svg" alt="Outlive Yourself" />
        <span>Outlive Yourself</span>
      </FlexItem>
    </Flex>
  </SectionContainer>
);

export default Recreational;
