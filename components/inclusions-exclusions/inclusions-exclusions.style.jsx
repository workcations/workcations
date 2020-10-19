import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: solid 1px silver;
  border-radius: 5px;
  margin: 0px;
`;

export const FlexItem = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Ques = styled.div`
  width: 100%;
  font-size: 1vw;
  padding: 0.7vw 0vw 0.7vw 1vw;
  font-weight: 600;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }

  img {
    height: 1.3vw;
    padding-left: 2vw;

    @media only screen and (max-width: 900px) {
      height: 4vw;
      font-weight: 700;
    }
  }
`;

export const Ans = styled.div`
  font-size: 1vw;
  padding: ${(props) => (props.isOpen ? "1em" : "0em 1em")};
  height: ${(props) => (props.isOpen ? "auto" : "0em")};
  transition-property: height;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 900px) {
    transition: all 0.1s ease-in-out;
    font-size: 3vw;
  }
`;
