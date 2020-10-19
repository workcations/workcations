import styled from "styled-components";

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const HeadingText = styled.div`
  font-size: 3em;
  color: #000000;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const UnderLine = styled.div`
  border-radius: 50px;
  width: 70%;
  height: 0em;
  background-color: #ff3f85;
  margin: 0px auto;
  margin-top: 0em;

  @media screen and (max-width: 768px) {
    height: 0.05em;
  }
`;
