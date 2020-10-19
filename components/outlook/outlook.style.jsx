import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FlexItem = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 90%;
    margin-bottom: 10px;

    @media only screen and (max-width: 768px) {
      width: 80%;
    }
  }

  span {
    width: 100%;
    font-weight: 600;
    text-align: center;
    font-size: 0.8em;

    @media only screen and (max-width: 768px) {
      font-weight: 400;
      font-size: 1em;
    }
  }
`;
