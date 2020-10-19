import styled from "styled-components";

export const OuterContainer = styled.div`
  position: fixed;
  left: ${(props) => (props.isOpen ? "0" : "120vw")};
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 204;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RoomPopupContainer = styled.div`
  position: absolute;
  left: ${(props) => (props.isOpen ? "0" : "120vw")};
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 205;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

export const ActualContainer = styled.div`
  background-color: white;
  width: 70%;
  z-index: 206;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 25px auto 15px;
  grid-gap: 15px;
  grid-template-areas:
    "close close"
    "gallery features";
  padding: 10px;

  @media only screen and (max-width: 900px) {
    width: 90%;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "close"
      "gallery"
      "features";
  }
`;

export const Gallery = styled.div`
  grid-area: gallery;
  height: calc((70vw - 35px) * 2 / 9);
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 0.4s ease-in-out;

  @media only screen and (max-width: 900px) {
    height: calc((90vw - 20px) * 2 / 3);
  }
`;

export const Features = styled.div`
  grid-area: features;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 50vh;
  overflow-y: scroll;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li {
    margin: 0px;
    font-size: 1vw;
    text-transform: capitalize;
    line-height: 2em;
    height: 2em;
  }

  @media only screen and (max-width: 900px) {
    li {
      font-size: 2.2vw;
    }
  }
`;

export const Close = styled.div`
  grid-area: close;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9vw;

  @media only screen and (max-width: 900px) {
    font-size: 2vw;
  }

  span {
    color: white;
    background-color: black;
    cursor: pointer;
    padding: 5px 15px;
    border-radius: 100px;
  }
`;

export const GalleryArrow = styled.div`
  width: 90%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 2vw;
    fill: white;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 2px;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 900px) {
      height: 7vw;
    }

    :hover {
      transform: scale(1.05);
    }
  }
`;
