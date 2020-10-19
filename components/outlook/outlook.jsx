import React from "react";

import SectionContainer from "../../style-components/section-container/section-container.style";
import Heading from "../../style-components/heading/heading.style";

import { Flex, FlexItem } from "./outlook.style";

const Outlook = () => (
  <SectionContainer>
    <Heading>
      Break the Vicious Circle of Monotony. Create your <span>own space</span>,
      as you’ve always wanted.
    </Heading>
    <Flex>
      <FlexItem>
        <img src="./room.svg" alt="Economic, Clean & Hygienic Stay" />
        <span>Economic, Clean & Hygienic Stay</span>
      </FlexItem>
      <FlexItem>
        <img src="./workspace.svg" alt="Dedicated Workspace" />
        <span>Dedicated Workspace</span>
      </FlexItem>
      <FlexItem>
        <img src="./recreation.svg" alt="Recreational Activities" />
        <span>Recreational Activities</span>
      </FlexItem>
    </Flex>
  </SectionContainer>
);

export default Outlook;
