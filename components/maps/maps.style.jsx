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

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  height: 26vw;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;

  ${Light}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    height: 35vh;
  }
`;

export const MainMarker = styled.div`
  width: 12vw;
  display: flex;
  flex-wrap: nowrap;

  @media only screen and (max-width: 900px) {
    width: 40vw;
  }

  img {
    width: 3vw;
    height: 3vw;
    z-index: 999;

    @media only screen and (max-width: 900px) {
      width: 10vw;
      height: 10vw;
    }
  }

  span {
    display: flex;
    justify-content: center;
    padding: 0 0.2vw;
    align-items: center;
    background-color: white;
    text-align: center;
    border-radius: 3px;
    font-weight: 500;
    color: #777777;
    font-size: 0.8vw;
    box-shadow: 0px 0px 3px #cccccc;
    z-index: 999;

    @media only screen and (max-width: 900px) {
      font-size: 2vw;
    }
  }
`;

export const AuxMarker = styled.div`
  width: 10vw;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  img {
    width: 2vw;
  }

  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0.3vw 0.2vw;
    align-items: center;
    background-color: white;
    text-align: center;
    border-radius: 3px;
    font-weight: 400;
    color: #777777;
    font-size: 0.6vw;
    box-shadow: 0px 0px 3px #cccccc;
  }

  @media only screen and (max-width: 900px) {
    width: 32vw;

    img {
      width: 8vw;
    }

    span {
      font-size: 2vw;
      padding: 1vw 0.3vw;
    }
  }
`;

export const ClusterMarker = styled.div`
  color: #fff;
  background: #ff6c6b;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
