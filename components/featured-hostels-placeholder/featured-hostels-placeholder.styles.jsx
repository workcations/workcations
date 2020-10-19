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

const Dark = css`
  background: #8b8e92;
  background-image: linear-gradient(
    to right,
    #8b8e92 0%,
    #afafaf 20%,
    #8b8e92 40%,
    #8b8e92 100%
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

const Long = css`
  @media screen and (max-width: 600px) {
    height: 35vw;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const Card = styled.div`
  /*  type-card  */

  flex-shrink: 0;
  width: 19vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  margin-right: 4vw;

  @media screen and (max-width: 600px) {
    width: 30vw;
    margin-right: 3vw;
  }
`;

export const Image = styled.div`
  /*  type-image light shimmer  */

  width: 19vw;
  height: 14.75vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 10px;

  ${Light}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    width: 30vw;
    height: 22vw;
  }
`;

export const ImageLong = styled(Image)`
  /*  type-image long light shimmer  */

  ${Long}
`;

export const Price = styled.div`
  /*  type-price dark shimmer  */

  width: 8vw;
  height: 3vw;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -0.5vw 1vw 0;

  ${Dark}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    width: 14vw;
    height: 5vw;
  }
`;

export const Details = styled.div`
  /*  type-details  */

  padding: 0.5vw;

  @media screen and (max-width: 600px) {
    padding: 1vw;
  }
`;

export const Title = styled.div`
  /*  type-name dark shimmer  */

  height: 3vw;
  width: 12vw;
  margin-bottom: 0.2vw;

  ${Dark}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    height: 4vw;
    width: 20vw;
  }
`;

export const Location = styled.div`
  /*  type-location light shimmer  */

  height: 1vw;
  width: 12vw;

  ${Light}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    height: 2vw;
    width: 20vw;
  }
`;
