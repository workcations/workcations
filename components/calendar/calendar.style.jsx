import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 0px;
`;

export const CheckInCheckOutContainer = styled.div`
  margin: 10px 0px 0px 0px;
  width: 27vw;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin: 20px 0px 0px 0px;
  }
`;

export const CheckInDate = styled.div`
  width: 45%;
  font-size: 1vw;
  border-radius: 4px;
  border: 1px solid #ff6c6b;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;

  span {
    color: #ff6c6b;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
