import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const AddButton = styled.div`
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  width: 100%;
  color: white;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.7vw;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.95vw;

  @media only screen and (max-width: 900px) {
    height: 6vw;
    font-size: 3.5vw;
  }
`;

export const QuantityContainer = styled.div`
  width: 100%;
  height: 1.7vw;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.95vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 900px) {
    height: 6vw;
    font-size: 3.5vw;
  }
`;

export const MinusButton = styled.span`
  background-color: #ff6c6b;
  color: white;
  cursor: pointer;
  border-top: 1.5px solid #ff6c6b;
  border-bottom: 1.5px solid #ff6c6b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px 0px 0px 3px;
`;

export const Quantity = styled.span`
  border-top: 1.5px solid #ff6c6b;
  border-bottom: 1.5px solid #ff6c6b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusButton = styled.span`
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  color: white;
  cursor: pointer;
  border-top: 1.5px solid ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  border-bottom: 1.5px solid
    ${(props) => (props.isMaxed ? "#cccccc" : "#ff6c6b")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 3px 3px 0px;
`;
