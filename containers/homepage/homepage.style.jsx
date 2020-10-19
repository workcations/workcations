import styled from "styled-components";

export const MegaContainer = styled.div`
  width: 100%;
  background: rgb(245, 245, 245);
`;

export const Container = styled.div`
  /* page-container */
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0 5%;

  @media only screen and (max-width: 600px) {
  }
`;

export const SubContainer = styled.div`
  /* section-container */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vw;

  @media only screen and (max-width: 600px) {
    margin-top: 10vw;
    width: 90vw;
  }
`;

export const Heading = styled.span`
  /* section-heading */
  font-size: 2.5vw;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const SubHeading = styled.span`
  /* section-sub-heading */
  font-size: 1.2vw;
  font-weight: 300;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 2.5vw;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background-color: #ff6b6c;
  color: white;
  padding: 1.5vw 0vw;
  border-radius: 5px;
  font-size: 1.2vw;
  width: 12vw;
  margin: 5vw 0 2vw 0;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    padding: 1vw 0vw;
    font-size: 2.5vw;
    width: 30vw;
    height: 8vw;
    margin: 3vw 0vw 0vw 0vw;
  }
`;
