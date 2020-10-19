import React from "react";

import { HeadingContainer, HeadingText, UnderLine } from "./heading.style";

const Heading = ({ children }) => (
  <HeadingContainer>
    <HeadingText>
      {children}
      <UnderLine />
    </HeadingText>
  </HeadingContainer>
);

export default Heading;
