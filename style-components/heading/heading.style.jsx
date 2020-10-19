import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 1.4em;
  margin-bottom: 20px;

  span {
    color: #ff6b6c;
  }

  @media only screen and (max-width: 1196px) {
    font-size: 1.2em;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1em;
    font-weight: 700;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
    font-weight: 600;
  }
`;

export default Heading;
