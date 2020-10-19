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

export const Card = styled.div`
  /*  property-box  */

  width: 25vw;
  border-radius: 10px;
  background-color: #efefef;
  box-shadow: rgba(0, 0, 0, 0.16) 3px 3px 6px;
  margin: 0px 2.5vw 2.5vw 0px;

  @media screen and (max-width: 600px) {
    width: 42vw;
    margin: 0 5vw 5vw 0;
  }
`;

export const Image = styled.div`
  /*  property-top light shimmer  */

  width: 25vw;
  height: 16vw;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: #d5d5d5;

  ${Light}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    width: 42vw;
    height: 28vw;
  }
`;

export const Tag = styled.div`
  /*  property-tag dark shimmer  */

  width: 4.8vw;
  height: 1.4vw;
  align-self: flex-start;
  font-size: 0.9vw;
  line-height: 1vw;
  font-weight: 400;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 1vw 0px 0px 1vw;
  text-transform: capitalize;

  ${Dark}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    width: 6vw;
    height: 2vw;
    margin: 2vw 0 0 2vw;
  }
`;

export const Price = styled.div`
  /*  property-price dark shimmer  */

  align-self: flex-end;
  height: 2vw;
  width: 7vw;
  margin: 0px 0.5vw 0.2vw 0px;
  background-color: #8b8e92;

  ${Dark}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    height: 3.5vw;
    width: 10vw;
  }
`;

export const Details = styled.div`
  /*  property-bottom  */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1vw 0.5vw;

  @media screen and (max-width: 600px) {
    padding: 2vw 1.5vw;
  }
`;

export const Title = styled.div`
  /*  property-name dark shimmer  */
  height: 1.5vw;
  width: 20vw;
  margin-bottom: 0.2vw;
  background-color: #8b8e92;

  ${Dark}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    height: 2.5vw;
    width: 35vw;
    margin-bottom: 1vw;
  }
`;

export const Location = styled.div`
  /*  property-location dark shimmer  */

  height: 1.2vw;
  width: 15vw;
  margin-bottom: 0.5vw;
  background-color: #8b8e92;

  ${Dark}
  ${Shimmer}

  @media screen and (max-width: 600px) {
    height: 1.7vw;
    margin-bottom: 2vw;
  }
`;
