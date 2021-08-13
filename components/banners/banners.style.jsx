import styled from "styled-components";

export const Container = styled.div`
  /* states-container */
  display: flex;
  flex-direction: row;
  margin-top: 2vw;
  align-items: center;
  overflow: scroll;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    margin-top: 4vw;
  }
`;

export const Card = styled.div`
  /* states-card */
  width: 550px;
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
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    flex-shrink: 0;
    width: 85vw;
    margin: 0 2.5vw 1.5vw 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
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
