import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  height: calc(100vh - 280px);

  @media only screen and (max-width: 900px) {
    width: 90%;
    height: 48vh;
  }

  li {
    margin: 15px 0px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;
