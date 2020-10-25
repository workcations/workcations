import styled from "styled-components";

export const Container = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FlexItem = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9vw;

  @media only screen and (max-width: 900px) {
    font-size: 2.5vw;
  }

  img {
    width: 2em;
    height: auto;
  }
`;

export const GridContent = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 10px 0px;
  width: 50%;

  img {
    height: 1.7vw;
    margin-right: 10px;

    @media only screen and (max-width: 900px) {
      height: 1em;
    }
  }
`;
