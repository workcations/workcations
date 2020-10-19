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
  /*    property-container   */

  width: 22vw;
  border: solid 1px #bababa;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 0.5vw;
  margin-bottom: 5vw;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  /*    property-image-container   */

  display: flex;
  flex-direction: column;
  margin-bottom: 0.6vw;
`;

export const MainImage = styled.div`
  /*    property-main-image light shimmer   */

  width: 21vw;
  height: 12vw;
  background-color: #d5d5d5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  margin-bottom: 0.35vw;

  ${Light}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 49vw;
  }
`;

export const Tag = styled.div`
  /*    property-details-type dark shimmer   */

  height: 2.5vw;
  width: 7vw;
  margin: 1.5vw 0vw 0vw -1vw;
  border-radius: 3px;

  ${Dark}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 20vw;
    height: 6vw;
    margin: 5vw 0vw 0vw -2vw;
  }
`;

export const SmallImageContainer = styled.div`
  /*    property-small-image-container   */

  width: 21vw;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const SmallImage = styled.div`
  /*    property-small-image light shimmer   */

  background-color: #d5d5d5;
  width: 4.95vw;
  height: 3.2vw;
  border-radius: 2px;

  ${Light}
  ${Shimmer}
`;

export const Details = styled.div`
  /*    property-details   */

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    padding: 2vw;
  }
`;

export const Title = styled.div`
  /*    property-details-name dark shimmer   */

  width: 19vw;
  height: 2.6vw;
  margin-bottom: 0.6vw;

  ${Dark}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 80vw;
    height: 6vw;
    margin-bottom: 1vw;
  }
`;

export const DetailsContainer = styled.div`
  /*    property-details-container   */

  height: 100%;
  width: 21vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const DetailsWrapper = styled.div`
  /*    property-details-wrapper   */

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Location = styled.div`
  /*    property-details-location light shimmer   */

  width: 11vw;
  height: 1vw;
  background-color: #d5d5d5;
  margin-bottom: 0.6vw;

  ${Light}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 40vw;
    height: 4vw;
    margin-bottom: 3vw;
  }
`;

export const Safety = styled.div`
  /*    property-details-safety light shimmer   */

  width: 13vw;
  height: 2vw;
  background-color: #d5d5d5;
  margin-bottom: 0.5vw;

  ${Light}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 42vw;
    height: 6vw;
    margin-bottom: 3vw;
  }
`;

export const AmenitiesContainer = styled.div`
  /*    property-details-amenities-container   */
`;

export const IconsContainer = styled.div`
  /*    property-details-amenities-icons-container   */

  width: 13vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    width: 50vw;
  }
`;

export const Icon = styled.div`
  /*    property-details-amenities-icon light shimmer   */

  height: 1.5vw;
  width: 6vw;
  background-color: #d5d5d5;
  margin-bottom: 0.2vw;

  ${Light}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 23vw;
    height: 5vw;
  }
`;

export const Pricing = styled.div`
  /*    property-pricing-container dark shimmer   */

  width: 8vw;
  height: 4vw;
  border-radius: 3px;
  margin-right: -20px;

  ${Dark}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    width: 33vw;
    height: 12vw;
  }
`;
