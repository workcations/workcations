import styled from "styled-components";

const Button = styled.a`
  margin: 40px auto 0px auto;
  font-weight: 700;
  font-size: 1.1em;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6b6c;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;

  @media only screen and (max-width: 1438px) {
    font-size: 0.99em;
  }

  @media only screen and (max-width: 1174px) {
    font-size: 0.88em;
  }

  @media only screen and (max-width: 956px) {
    font-size: 1.05em;
  }

  @media only screen and (max-width: 716px) {
    font-size: 0.9em;
  }

  @media only screen and (max-width: 650px) {
    width: 150px;
    height: 40px;
  }

  @media only screen and (max-width: 574px) {
    font-size: 0.75em;
  }

  @media only screen and (max-width: 364px) {
    width: 120px;
    height: 35px;
  }
`;

export default Button;
