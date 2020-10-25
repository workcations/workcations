import React from "react";

import { Container, Content } from "./about.style";

const About = ({ about }) => (
  <Container>
    <h2>About</h2>
    <Content>
      {about.split("***").map((item, i) => (
        <p key={`about {i+1}`}>{item}</p>
      ))}
    </Content>
  </Container>
);

export default About;
