import styled from "styled-components";

export const Container = styled.div`
  margin: 2vw 0vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0vw 4vw;
  font-size: 16px;
  background-color: #fbfbfb;

  @media only screen and (max-width: 900px) {
    margin: 50px 0px;
    padding: 0px;
  }
`;

export const Heading = styled.h2`
  width: 100%;
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

