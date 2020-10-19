import styled from "styled-components";

export const Container = styled.div`
  /*   cards-container   */
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2vw;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    grid-template-columns: 1fr 1fr;
    margin-top: 4vw;
  }
`;

export const Card = styled.a`
  /*   featured-card   */
  width: 25vw;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  margin: 0 2.5vw 2.5vw 0;
  background-color: white;

  @media only screen and (max-width: 600px) {
    width: 42vw;
    margin: 0 5vw 5vw 0;
  }
`;

export const ImageShimmer = styled.div`
  width: 25vw;
  height: 16vw;
  border-radius: 10px 10px 0px 0px;
  background-color: #d5d5d5;
  background: #d5d5d5;
  background-image: linear-gradient(
    to right,
    #d5d5d5 0%,
    #f1f1f1 20%,
    #d5d5d5 40%,
    #d5d5d5 100%
  );
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

  @media only screen and (max-width: 600px) {
    width: 42vw;
    height: 28vw;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const Image = styled.div`
  /*   featured-card-image   */
  width: 25vw;
  height: 16vw;
  border-radius: 10px 10px 0px 0px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    width: 42vw;
    height: 28vw;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const ImageContainer = styled.div`
  /*   opacity   */
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;

  @media only screen and (max-width: 600px) {
  }
`;

export const Type = styled.div`
  /*   type-tag   */
  width: 4.8vw;
  height: 1.4vw;
  align-self: flex-start;
  font-size: 0.9vw;
  line-height: 1vw;
  font-weight: 400;
  background-color: ${(props) =>
    props.type === "homestay"
      ? "#ff4500"
      : props.type === "hostel"
      ? "#11c170"
      : props.type === "hotel"
      ? "#ea0042"
      : props.type === "resort"
      ? "#9449ea"
      : "#0089ea"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vw 0 0 1vw;
  text-transform: capitalize;

  @media only screen and (max-width: 600px) {
    width: auto;
    padding: 1.5vw 1vw;
    height: auto;
    font-size: 2vw;
    margin: 2vw 0 0 -1vw;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    border-radius: 0px 50px 50px 0px;
  }
`;

export const Price = styled.div`
  /*   price-tag-cost   */
  align-self: flex-end;
  font-size: 1.8vw;
  font-weight: 600;
  margin: 0 0.5vw 0.2vw 0;

  @media only screen and (max-width: 600px) {
    font-size: 3.2vw;
  }

  span {
    /*   per-night   */
    font-size: 1.3vw;
    font-weight: 400;

    @media only screen and (max-width: 600px) {
      font-size: 2.4vw;
      font-weight: 100;
    }
  }
`;

export const Details = styled.div`
  /*   featured-card-details   */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1vw 0.5vw;
  background-color: white;
  border-radius: 0px 0px 10px 10px;

  @media only screen and (max-width: 600px) {
    padding: 2vw 1.5vw;
  }
`;

export const Title = styled.span`
  /*   property-name   */
  font-size: 1.3vw;
  line-height: 1.5vw;
  font-weight: 600;
  margin-bottom: 0.2vw;

  @media only screen and (max-width: 600px) {
    font-size: 2.2vw;
    line-height: 2.5vw;
    margin-bottom: 1vw;
  }
`;

export const Location = styled.span`
  /*   property-location   */
  font-size: 0.95vw;
  line-height: 1.2vw;
  font-weight: 100;
  margin-bottom: 0.5vw;
  text-transform: capitalize;

  @media only screen and (max-width: 600px) {
    font-size: 1.7vw;
    font-weight: 300;
    margin-bottom: 2vw;
  }
`;
