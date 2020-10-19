import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin-top: 40px;

  @media only screen and (max-width: 768px) {
    width: 45%;
  }

  img {
    width: 100%;
    height: auto;
  }

  span {
    width: 100%;
    text-align: center;
    font-size: 1em;
    padding: 15px 0px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.9em;
  }
`;
