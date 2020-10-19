import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 2vw 0 2vw 0;

  @media only screen and (max-width: 600px) {
    justify-content: space-around;
    width: 90vw;
    margin: 4vw 0;
  }
`;

export const Card = styled.a`
  width: 14vw;
  text-align: center;

  img {
    width: 70%;
    height: auto;
    margin-bottom: 4vw;
  }

  @media only screen and (max-width: 600px) {
    width: 25vw;
    margin-bottom: 10vw;
  }
`;
