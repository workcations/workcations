import styled from "styled-components";

export const Container = styled.div`
  background-color: #ff6b6c;
  color: white;
  font-size: 0.8em;
  padding: 15px 10vw;
  grid-gap: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "about connect";

  @media only screen and (max-width: 768px) {
    padding: 15px 5vw;
    grid-template-columns: 1fr;
    grid-template-areas:
      "about"
      "connect";
  }
`;

export const About = styled.div`
  grid-area: about;

  p {
    font-size: 0.8em;
    text-align: justify;
    width: 80%;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Destinations = styled.div`
  grid-area: destinations;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    margin: 5px 0px;
  }
`;

export const Information = styled.div`
  grid-area: information;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    margin: 5px 0px;
  }
`;

export const Connect = styled.div`
  grid-area: connect;

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    margin: 5px 0px;
    display: flex;
    align-items: center;
    color: white;

    img {
      height: 1.5em;
      width: auto;
      margin-right: 20px;
    }
  }
`;

export const Heading = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2em;
`;

export const SubFooter = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dd6061;
  font-weight: 600;
  position: relative;

  a {
    text-decoration: none;
    color: white;
  }
`;

