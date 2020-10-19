import styled from "styled-components";

export const Container = styled.div`
  /* blogs-container */
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  margin: 2vw 0;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    margin: 4vw 0;
  }
`;

export const Card = styled.a`
  /* blogs-card */
  width: 17vw;
  display: flex;
  flex-direction: column;
  margin-right: 2.5vw;
  box-shadow: 0px 0px 3px #707070;

  @media only screen and (max-width: 600px) {
    width: 40vw;
  }
`;

export const Image = styled.div`
  /* blogs-image */
  width: 17vw;
  height: 18vw;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;

  @media only screen and (max-width: 600px) {
    width: 40vw;
    height: 45vw;
  }
`;

export const Title = styled.div`
  /* blogs-title */
  color: white;
  font-size: 1vw;
  font-weight: 600;
  padding: 0.5vw;
  margin-top: -4vw;

  @media only screen and (max-width: 600px) {
    font-size: 2.7vw;
    padding: 0 1vw;
    margin-top: -9vw;
  }
`;

export const Description = styled.div`
  /* blogs-description */
  background-color: white;
  font-size: 0.8vw;
  font-weight: 300;
  color: black;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  padding: 0.5vw;
  text-align: justify;
  height: 7.3vw;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    font-size: 2vw;
    padding: 1vw;
    height: 17.5vw;
  }
`;

export const ReadMore = styled.span`
  /* blogs-plus */
  font-size: 2vw;
  line-height: 2vw;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 20px;
  background-color: #ff6b6c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw 1vw 1vw 1vw;

  @media only screen and (max-width: 600px) {
    font-size: 5vw;
    line-height: 5vw;
    width: 6vw;
    height: 6vw;
    margin: 6vw 2vw 2vw 3vw;
  }
`;
