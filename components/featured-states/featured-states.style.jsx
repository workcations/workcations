import styled from "styled-components";

export const Container = styled.div`
  /* states-container */
  display: flex;
  flex-direction: row;
  margin-top: 2vw;

  @media only screen and (min-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    width: 90vw;
    margin-top: 4vw;
    align-items: center;
    overflow: scroll;
  }
`;

export const Card = styled.a`
  /* states-card */
  width: 26vw;
  height: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1vw 1vw 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    to right,
    #d5d5d5 0%,
    #f1f1f1 20%,
    #d5d5d5 40%,
    #d5d5d5 100%
  );

  @media only screen and (max-width: 600px) {
    flex-shrink: 0;
    width: 41vw;
    height: 32vw;
    margin: 0 1.5vw 1.5 0;
  }
`;

export const Text = styled.div`
  /* states-band */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.5vw;
  background-color: rgba(0, 0, 0, 0.45);
  text-transform: capitalize;

  @media only screen and (max-width: 600px) {
    height: 8vw;
  }
`;

export const Title = styled.span`
  /* states-name */
  font-size: 1.6vw;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

export const Count = styled.span`
  /* states-counter */
  font-size: 1.1vw;
  font-weight: 300;

  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;
