import React from "react";

import { Container, Content } from "./about.style";

const About = ({ about }) => (
  <Container>
    <h2>About</h2>
    <Content>
      <p>{about}</p>
    </Content>
  </Container>
);

export default About;
