import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 70px 20px 20px 20px;
`;

export const ListContainer = styled.div`
  padding: 16px;
  padding-top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3vw;

  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 1fr;
    row-gap: 6vw;
    padding: 0vw 3vw;
  }
`;
