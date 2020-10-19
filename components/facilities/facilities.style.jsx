import styled from "styled-components";

export const Container = styled.div`
  grid-area: inc;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 50vw;
  overflow: scroll;
  margin-bottom: 2vw;

  @media only screen and (max-width: 900px) {
    width: unset;
    margin: unset;
    align-items: unset;
  }
`;
