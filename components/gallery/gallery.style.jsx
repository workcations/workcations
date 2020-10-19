import styled from "styled-components";

export const Container = styled.div`
  grid-area: slideshow;
  height: 37vw;
  margin-top: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 900px) {
    height: 61vw;
    align-items: center;
  }
`;

export const SlickContainer = styled.div`
  height: 30vw;
  width: 50vw;
  margin-bottom: 0.5vw;
  border-radius: 10px;
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

  @media only screen and (max-width: 900px) {
    height: 50vw;
    width: 90vw;
    margin-bottom: 1.5vw;
  }
`;

export const SlickContainer2 = styled.div`
  height: 3.7vw;
  width: 90%;

  @media only screen and (max-width: 900px) {
    height: 7vw;
    width: 100%;
  }
`;

export const HeroImage = styled.div`
  height: 30vw;
  width: 50vw;

  @media only screen and (max-width: 900px) {
    height: 50vw;
    width: 90vw;
  }

  div {
    height: 100%;
    border-radius: 10px;
    background-color: white;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    span {
      font-size: 1.5vw;
      color: white;
      background-color: rgba(0, 0, 0, 0.8);
      margin: 0px 10px 10px 0px;
      border-radius: 5px;
      padding: 0.3vw 1vw;

      @media only screen and (max-width: 900px) {
        font-size: 3.5vw;
        font-weight: 600;
        border-radius: 3px;
        padding: 1vw 3vw;
      }
    }
  }
`;

export const ThumbnailImage = styled.div`
  height: 3.7vw;
  width: 7vw;
  cursor: pointer;
  margin-right: 50px;

  @media only screen and (max-width: 900px) {
    height: 7vw;
    width: 12vw;
  }

  div {
    width: 90%;
    background-color: #d5d5d5;
    height: 100%;
    border-radius: 3px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

export const GalleryArrow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 3vw;
    fill: white;

    @media only screen and (max-width: 900px) {
      height: 7vw;
    }

    :hover {
      transform: scale(1.2);
    }
  }
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  max-width: 50vw;
  margin-top: 10px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    margin-top: 10px;
    grid-template-columns: 1fr;
  }
`;

export const ArrowContainer = styled.div`
  height: 4vw;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2px;

  @media only screen and (max-width: 900px) {
    height: 7vw;
    display: none;
  }

  svg {
    fill: white;
    height: 2.5vw;

    @media only screen and (max-width: 900px) {
      height: 4vw;
    }
  }
`;

export const Thumbnails = styled.div`
  height: 5vw;
  width: 100%;
  max-width: calc(50vw - 80px);
  display: flex;
  flex-direction: row;
  overflow: scroll;
  scroll-behavior: smooth;

  @media only screen and (max-width: 900px) {
    height: 10vw;
    max-width: 90vw;
  }

  div {
    height: 4vw;
    width: 6vw;
    flex-shrink: 0;
    background-size: cover;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.29);
    border-radius: 2px;
    margin-right: 0.5vw;

    @media only screen and (max-width: 900px) {
      height: 7vw;
      width: 13vw;
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.29);
      margin-right: 1.5vw;
    }

    :hover {
      transform: scale(1.1);
    }
  }
`;
