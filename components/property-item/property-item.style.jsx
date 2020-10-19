import styled, { css } from "styled-components";

const Light = css`
  background: #d5d5d5;
  background-image: linear-gradient(
    to right,
    #d5d5d5 0%,
    #f1f1f1 20%,
    #d5d5d5 40%,
    #d5d5d5 100%
  );
`;

const Shimmer = css`
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  background-repeat: no-repeat;
  background-size: 800px 1040px;
  position: relative;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

export const Container = styled.a`
  width: 22vw;
  border: solid 1px #bababa;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  padding: 0.5vw;
  cursor: pointer;
  margin-bottom: 3vw;

  @media only screen and (max-width: 900px) {
    padding: 1vw;
    width: 100%;
    margin-bottom: 0vw;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const MainImageShimmer = styled.div`
  width: 21vw;
  height: 12vw;
  border-radius: 5px;

  ${Light}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 49vw;
  }
`;

export const MainImage = styled.div`
  width: 21vw;
  height: 12vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  transition: background 0.4s ease-in-out;

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 49vw;
  }
`;

export const Type = styled.span`
  text-transform: uppercase;
  color: white;
  font-size: 0.9vw;
  font-weight: 600;
  padding: 0.5vw 1vw;
  border-radius: 3px;
  margin: 1.5vw 0vw 0vw -1vw;
  background-color: ${(props) =>
    props.tag === "homestay"
      ? "#ff4500"
      : props.tag === "hostel"
      ? "#11c170"
      : props.tag === "hotel"
      ? "#ea0042"
      : props.tag === "resort"
      ? "#9449ea"
      : "#0089ea"};

  @media only screen and (max-width: 900px) {
    display: inline;
    font-size: 2vw;
    padding: 1.5vw 4vw;
    margin: 5vw 0vw 0vw -2vw;
  }
`;

export const SmallImageContainer = styled.div`
  margin-top: 0.5vw;
  width: 21vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const SmallImageShimmer = styled.div`
  width: 4.95vw;
  height: 3.2vw;
  border-radius: 2px;

  ${Light}
  ${Shimmer}
`;

export const SmallImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 4.95vw;
  height: 3.2vw;
  border-radius: 2px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media only screen and (max-width: 900px) {
    padding: 2vw;
  }
`;

export const Title = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.1vw;
  line-height: 2.5em;
  color: black;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
    line-height: 1em;
    overflow: unset;
    text-overflow: unset;
    white-space: unset;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Location = styled.div`
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.3vw;
  font-size: 0.9vw;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }
`;

export const Safety = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5vw 0vw;

  @media only screen and (max-width: 900px) {
    width: 34vw;
    margin: 3vw 0vw;
    border-radius: 5px;
    background-color: rgb(46 220 220 / 0.08);
    border: solid 2px rgb(46 220 220);
    padding: 1vw;
  }
  img {
    height: 2vw;

    @media only screen and (max-width: 900px) {
      height: 4vw;
    }
  }
  span {
    margin-left: 0.3vw;
    color: rgb(71, 159, 153);
    font-size: 0.8vw;
    font-weight: 600;

    @media only screen and (max-width: 900px) {
      font-size: 2vw;
      margin-left: 1vw;
      font-weight: 400;
    }
  }
`;

export const AmenitiesContainer = styled.div`
  width: 100%;

  span {
    display: none;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }
`;

export const AmenitiesItem = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;
    font-size: 2.5vw;
  }
`;

export const AmenitiesIcon = styled.div`
  display: flex;
  font-size: 0.9vw;
  justify-content: flex-start;
  align-items: center;
  color: rgb(112, 112, 112);

  @media only screen and (max-width: 900px) {
    margin: 0.5vw 3vw 0.5vw 0vw;
    font-size: 2.5vw;
  }

  img {
    height: 1em;
    margin-right: 10px;

    @media only screen and (max-width: 900px) {
      height: 3vw;
      margin-right: 1vw;
    }
  }

  div {
  }
`;

export const Pricing = styled.div`
  width: 8vw;
  display: flex;
  font-size: 0.9vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ff6b6c;
  border-radius: 3px;
  margin-right: -20px;
  padding: 0.5vw 1vw;
  span {
    font-size: 1.3vw;
    font-weight: 600;

    @media only screen and (max-width: 900px) {
      font-size: 4vw;
      margin: 0px 2vw;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 33vw;
    font-size: 3vw;
    padding: 2vw 0px;
  }
`;
