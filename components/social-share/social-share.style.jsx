import styled from "styled-components";

const getButtonColor = (props) => {
  if (props.color) {
    return props.color;
  }
  return "#ff6b6c";
};

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #00000020;
  margin-bottom: 20px;

  @media screen and (max-width: 650px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  span {
    font-size: 16px;
    color: #ff6b6c;
    margin-right: 20px;

    @media screen and (max-width: 650px) {
      margin-right: 0px;
    }
  }
`;

export const Button = styled.a`
  margin: 0px 10px;
  background-color: ${getButtonColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 3px;

  img {
    width: 20px;
    height: 20px;

    @media screen and (max-width: 650px) {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (max-width: 650px) {
    margin: 0px 5px;
    padding: 5px;
  }
`;
