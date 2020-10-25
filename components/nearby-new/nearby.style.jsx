import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2vw;
  margin: 20px 0px 0px 0px;

  @media only screen and (max-width: 900px) {
    gap: 2vw;
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 2px;
  background-color: #fdfdfd;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  color: rgb(112, 112, 112);
  font-size: 1.2vw;

  @media only screen and (max-width: 900px) {
    background-color: rgb(245, 245, 245);
    font-size: 3vw;
  }
`;

export const GridImage = styled.div`
  height: 4vw;
  width: 30%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 2px 0px 0px 2px;

  @media only screen and (max-width: 900px) {
    height: 12vw;
    width: 40%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9vw;

  @media only screen and (max-width: 900px) {
    justify-content: space-evenly;
    font-size: 2.8vw;
  }
`;

export const Name = styled.span`
  color: #474950;
  font-weight: bold;
  margin: 5px 0px 10px 15px;

  @media only screen and (max-width: 900px) {
    margin: 1vw 0px 0px 2vw;
  }
`;

export const Distance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    padding: 0px 15px;

    @media only screen and (max-width: 900px) {
      padding: 0px 2vw;
    }
  }
`;
