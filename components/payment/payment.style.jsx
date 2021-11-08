import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }

  li {
    margin: 15px 0px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;
