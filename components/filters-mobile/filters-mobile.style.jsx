import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 104;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container2 = styled.div`
  position: fixed;
  left: 5%;
  top: ${(props) => (props.isOpen ? "5%" : "110vh")};
  width: 90%;
  height: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  transition: top 0.1s ease-in-out;
`;

export const FilterTitle = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #dddddd;
  box-shadow: 0px 1px 3px #dddddd;
  height: 50px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  background-color: #ff6b6c;
  color: white;
  font-size: 5.5vw;
  border-radius: 15px 15px 0px 0px;
`;

export const CloseButton = styled.a`
  position: absolute;
  left: 10px;
  top: 5px;
  font-size: 25px;
  color: white;
`;

export const FilterList = styled.div`
  width: 90%;
  margin: 3vh auto 0px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3vh;
  column-gap: 2vh;
  z-index: 105;
`;

export const PriceFilter = styled.div`
  width: 70%;
  margin: 60px auto 0px auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;

  span {
    color: silver;
    font-size: 3.8vw;
  }
`;

export const ApplyFilter = styled.a`
  background-color: #ff6b6c;
  margin-top: 25px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 4vw;
  padding: 10px 40px;
  border-radius: 3px;
`;
