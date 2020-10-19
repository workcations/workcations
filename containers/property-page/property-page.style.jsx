import styled from "styled-components";

export const MegaContainer = styled.div`
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 2.5vw;
  top: 0px;
  left: 0px;
  background: #fdfdfd 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 25px 3vw 25px 8vw;

  @media only screen and (max-width: 900px) {
    background: rgb(245, 245, 245);
    padding: 25px 5vw;
  }
`;

export const Title = styled.div`
  h1 {
    font-weight: 700;
    font-size: 2.5vw;
    color: #1c1c1c;
    text-transform: capitalize;
    margin: 0vw;

    @media only screen and (max-width: 900px) {
      font-size: 4.5vw;
      line-height: 5vw;
      margin: 1vw 0vw;
    }
  }

  div {
    padding: 0px;
    margin: 0px;
    color: #707070;
    font-weight: 400;
    font-size: 1.2vw;
    text-transform: capitalize;

    @media only screen and (max-width: 900px) {
      font-size: 2.5vw;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50vw 39vw;
  grid-template-areas:
    "slideshow booknow"
    "inc booknow"
    "details booknow";

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BookNowContainer = styled.div`
  grid-area: booknow;
`;

export const Details = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Content = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  color: rgb(49, 49, 49);
  font-size: 1.2vw;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 3vw 5vw;
  text-align: justify;

  p {
    margin: 0 0 0.5vw 0;
  }

  @media only screen and (max-width: 900px) {
    font-size: 2.3vw;
    padding: 5vw;

    p {
      margin: 0;
    }
  }
`;

export const About = styled.div`
  margin-bottom: 2vw;

  p {
    font-weight: 300;
  }

  @media only screen and (max-width: 900px) {
    p {
      font-weight: 400;
    }
  }
`;

export const Heading = styled.h2`
  color: #414141;
  font-weight: 600;
  font-size: 1.7vw;
  line-height: 1.8vw;
  margin-tovwp: 0.5vw;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
    line-height: unset;
    margin: 0 0 2vw 0;
  }
`;

export const Internet = styled.div`
  margin-bottom: 2vw;
  display: grid;
  grid-template-columns: 1.2fr 3fr;

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-bottom: 4vw;
  }
`;

export const InternetNote = styled.div`
font-size: 0.9vw;
color: #777777;
margin-bottom: 3vw;
background-color: #efefef;
padding: 1vw;
border-radius: 5px;

@media only screen and (max-width: 900px) {
  font-size: 2.5vw;
  color: #777777;
  margin-bottom: 5vw;
  padding: 3vw;
  border-radius: 3px;
  }

b {
  margin-right: 10px;
  color: black;
}
`;

export const EmptySpace = styled.div`
  margin-bottom: 2vw;

  @media only screen and (max-width: 900px) {
    margin-bottom: 4vw;
  }
`;
