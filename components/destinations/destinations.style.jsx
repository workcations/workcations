import styled from "styled-components";

import { Link } from "react-router-dom";

export const Carousel2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
  margin: 1vw 0px;
  padding-bottom: 5px;
`;

export const CarouselItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-right: 0.5vw;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 3px;

  @media only screen and (max-width: 900px) {
    margin-right: 2vw;
    border-radius: 3px;
  }
`;

export const Image = styled.div`
  width: 16.5vw;
  height: 11vw;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0px 0px;
  background-color: rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 900px) {
    width: 40vw;
    height: 30vw;
    border-radius: 3px 3px 0px 0px;
  }
`;

export const ImageText = styled.div`
  width: 16.5vw;
  height: 11vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 5px 5px 0px 0px;
  background-color: rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 900px) {
    width: 40vw;
    height: 30vw;
    display: flex;
    border-radius: 3px 3px 0px 0px;
  }
`;

export const Tag = styled.span`
  text-transform: capitalize;
  color: white;
  font-size: 1vw;
  font-weight: 600;
  padding: 0.4vw 0.8vw;
  background-color: #ff6b6c;

  @media only screen and (max-width: 900px) {
    font-size: 2.4vw;
    padding: 0.93vw 1.93vw;
  }
`;

export const CarouselPrice = styled.span`
  color: white;
  font-size: 1.7vw;
  font-weight: 600;
  padding: 0.2vw;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
    padding: 0.5vw;
  }

  span {
    font-size: 1.4vw;
    font-weight: 400;

    @media only screen and (max-width: 900px) {
      font-size: 3.35vw;
    }
  }
`;

export const CarouselDetails = styled.div`
  width: 100%;
  height: 4.5vw;
  padding-left: 0.6vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border-radius: 0px 0px 5px 5px;

  @media only screen and (max-width: 900px) {
    height: 10.8vw;
    padding-left: 1.46vw;
    justify-content: center;
    border-radius: 0px 0px 3px 3px;
  }

  div {
    font-size: 1.2vw;
    font-weight: 600;
    color: #474950;
    margin: 0.1vw 0vw;

    @media only screen and (max-width: 900px) {
      font-size: 3vw;
      margin: 0.24vw 0vw;
    }
  }

  span {
    font-size: 0.9vw;
    font-weight: 400;
    color: #474950;
    margin: 0.3vw 0vw;

    @media only screen and (max-width: 900px) {
      font-size: 2.2vw;
      margin: 0.46vw 0vw;
    }
  }
`;
