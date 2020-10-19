import styled from "styled-components";

export const Container = styled.div`
  width: 10vw;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 1.7vw;
    padding-bottom: 0.5vw;

    @media only screen and (max-width: 900px) {
      width: 4vw;
      padding: 0px;
      margin-bottom: 0.5vw;
    }
  }

  span {
    text-align: center;
    font-size: 1vw;

    @media only screen and (max-width: 900px) {
      font-size: 2vw;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 3vw 7vw 1vw 0vw;
    width: auto;
    max-width: 22vw;
  }
`;
