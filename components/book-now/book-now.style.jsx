import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  margin: 2.5vw 0vw 0vw 7vw;
  top: 0px;
  height: 98vh;
  max-height: 100%;
  width: 29vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.29);

  @media only screen and (max-width: 900px) {
    margin: 0px;
    position: unset;
    max-height: unset;
    height: auto;
    width: 90vw;
    margin-top: 40px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
    border-radius: 5px;
    margin-bottom: 4vw;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 10px;
  height: 98vh;

  @media only screen and (max-width: 900px) {
    height: auto;
    width: auto;
    justify-content: unset;
    border-radius: 0px;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media only screen and (max-width: 900px) {
    width: 90vw;
    background-color: white;
  }
`;

export const Heading = styled.h2`
  font-size: 1.6vw;
  color: rgb(65 65 65);
  line-height: 2vw;
  margin: 1.5vw 0vw;

  @media only screen and (max-width: 900px) {
    font-size: 5vw;
    line-height: 8vw;
    margin: 3vw 0vw;
    font-weight: 600;
  }
`;

export const CinCoutContainer = styled.div`
  height: 3.5vw;
  width: 100%;
  margin-bottom: 1.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    height: auto;
    width: 80vw;
  }
`;

export const CinCoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0.5vw 0.5vw;
  font-size: 1vw;
  line-height: 2vw;

  @media only screen and (max-width: 900px) {
    font-size: unset;
    line-height: unset;
  }
`;

export const CinCoutHeading = styled.span`
  font-size: 1.2vw;
  font-weight: bold;
  color: #414141;
  line-height: 2vw;
  margin: 0.5vw;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
    line-height: 10vw;
    margin: 2vw 0vw;
  }
`;

export const DatePickerDiv = styled.div`
  text-align: center;
  border-bottom: 1.5px solid #ff6b6c;
  cursor: pointer;
  width: 12vw;
  height: 2vw;
  font-size: 0.9vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;

  @media only screen and (max-width: 900px) {
    width: 38vw;
    height: 9vw;
    font-size: 3.5vw;
  }
`;

export const Disclaimer = styled.span`
  align-self: flex-start;
  font-size: 0.8vw;
  margin-left: 0.5vw;
  color: #ff6b6c;
  font-weight: 600;
  line-height: 2vw;

  @media only screen and (max-width: 900px) {
    align-self: unset;
    margin: unset;
    width: 80vw;
    font-size: 3vw;
    line-height: 3vw;
    margin-bottom: 3vw;
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 0;

  @media only screen and (max-width: 900px) {
    width: 95%;
    height: 1px;
    border-width: 0;
    color: silver;
    background-color: silver;
  }
`;

export const RoomsContainer = styled.div`
  max-height: 50vh;
  width: 26.5vw;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  overflow: scroll;
  padding-bottom: 1vw;

  @media only screen and (max-width: 900px) {
    max-height: 1000vw;
    width: 80vw;
    padding-bottom: 4vw;
  }
`;

export const RoomCard = styled.div`
  width: 25vw;
  margin-top: 1vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    width: 75vw;
    margin-top: 4vw;
  }
`;

export const ImageCon = styled.div`
  @media only screen and (max-width: 900px) {
    width: 25vw;
  }
`;

export const RoomImage = styled.div`
  height: 6vw;
  width: 9vw;
  margin: 0.4vw 0vw 0vw 0.5vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    height: 17vw;
    width: 25vw;
    margin: 0.7vw 0vw 0.7vw 0.5vw;
  }
`;

export const MicroDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8vw;
  padding: 0.5vw 0vw;
  color: #414141;

  @media only screen and (max-width: 900px) {
    font-size: 2.2vw;
    padding: 1vw 0vw;
  }

  span {
    padding-left: 0.6vw;
    text-transform: capitalize;

    @media only screen and (max-width: 900px) {
      padding-left: 1vw;
    }
  }
`;

export const RoomDetails = styled.div`
  width: 15vw;
  margin: 0.5vw 0.5vw 1.5vw 0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #424950;

  @media only screen and (max-width: 900px) {
    width: 46vw;
    margin: 1vw 2vw;
  }
`;

export const Category = styled.span`
  font-size: 1.4vw;
  font-weight: 600;
  padding-left: 5px;

  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
    font-weight: 600;
  }
`;

export const SubCategory = styled.div`
  background-color: white;
  margin-top: 0.6vw;
  margin-bottom: 0.6vw;

  @media only screen and (max-width: 900px) {
    margin-top: 2.25vw;
    margin-bottom: 2.25vw;
  }
`;

export const RoomSharing = styled.div`
  display: flex;
  align-items: center;
  font-size: 1vw;
  font-weight: 600;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }

  img {
    height: 1vw;

    @media only screen and (max-width: 900px) {
      height: 3vw;
    }
  }

  span {
    padding-left: 5px;
  }
`;

export const RoomQuantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RoomPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PriceObject = styled.div`
  padding-left: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Striked = styled.span`
  text-decoration: line-through;
  margin-right: 0.5vw;
  font-size: 1vw;
  font-weight: 600;
  color: #949494;
  margin-bottom: 0.2vw;
  width: 100%;

  @media only screen and (max-width: 900px) {
    margin-right: 2vw;
    font-size: unset;
    font-weight: unset;
    color: unset;
    margin-bottom: unset;
  }
`;

export const RoomPrice = styled.span`
  font-size: 1.5vw;
  font-weight: 700;
  margin-right: 0.3vw;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
    margin-right: 1vw;
  }
`;

export const Discount = styled.span`
  padding: 0.2vw;
  line-height: 1em;
  height: 1.4em;
  width: 3.5vw;
  background-color: #00c4ab;
  color: white;
  font-size: 0.8vw;
  font-weight: 600;
  text-align: center;
  border-radius: 2px;

  @media only screen and (max-width: 900px) {
    padding: 0.5vw 1vw;
    line-height: 1vw;
    width: auto;
    height: 2vw;
    font-size: 1.5vw;
    border-radius: 0px;
  }
`;

export const PerUnit = styled.span`
  font-size: 0.7vw;
  font-weight: 700;
  padding-left: 5px;

  @media only screen and (max-width: 900px) {
    font-size: 2vw;
    font-weight: 400;
  }
`;

export const RoomQty = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 0.95vw;
  height: 1.7vw;
  color: white;
  background-color: #ff6b6c;
  border-radius: 3px;

  @media only screen and (max-width: 900px) {
    height: 6vw;
    font-size: 3.5vw;
  }
`;

export const AddRoomButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "transparent")};
  border-radius: 3px;
`;

export const PlusMinusButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child,
    &:last-child {
      cursor: pointer;
    }
    &:nth-child(2) {
      background-color: white;
      color: #ff6b6c;
      border-top: 1.5px solid #ff6b6c;
      border-bottom: 1.5px solid #ff6b6c;
    }
  }
`;

export const PlusButton = styled.span`
  background-color: ${(props) => (props.isMaxed ? "#cccccc" : "transparent")};
  border-radius: 0px 3px 3px 0px;
`;

export const Abc = styled.div`
  @media only screen and (max-width: 900px) {
  }
`;

export const AddMeals = styled.div`
  width: 26.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1vw 0vw;

  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin: 4vw 0vw;
  }
`;

export const AddMealsHeading = styled.div`
  font-size: 1vw;
  font-weight: bold;
  color: #414141;

  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
`;

export const AddMealsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 5px 0px 0px 0px;
  font-size: 16px;
`;

export const CostingContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0vw 0vw 1vw 0vw;
  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin: 0vw 0vw 4vw 0vw;
  }
`;

export const CostingText = styled.span`
  font-size: 1vw;
  font-weight: bold;
  color: #414141;
  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
`;

export const CostingValue = styled.span`
  color: #ff6b6c;
  font-weight: 600;
  font-size: 1.5vw;
  @media only screen and (max-width: 900px) {
    font-size: 5.5vw;
  }
`;

export const PaymentButton = styled.div`
  width: 22vw;
  background-color: #ff6b6c;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vw 0vw;
  margin-bottom: 1vw;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    width: 80vw;
    padding: 2vw 0vw;
    margin-bottom: 4vw;
  }
  span {
    font-weight: 600;
    font-size: 1.5vw;
    color: white;
    text-transform: uppercase;
    @media only screen and (max-width: 900px) {
      font-size: 4vw;
    }
  }
`;

export const EmptyCartAlert = styled.div`
  position: fixed;
  bottom: ${(props) => (props.active ? "50px" : "-50px")};
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: red;
  background-color: white;
  border-radius: 5px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease-out;
  span {
    border-radius: 5px;
    border: 1px dotted red;
    background-color: rgba(255, 0, 0, 0.2);
    padding: 20px 30px;
  }
`;

export const DurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1vw;
  box-shadow: 0px 0px 3px 0px #aaaaaa;
  border-radius: 3px;

  @media only screen and (max-width: 900px) {
    width: 90%;
    margin-bottom: 0vw;
  }
`;

export const DurationItem = styled.div`
  font-size: 1vw;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 33%;
  padding: 0.2vw 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  color: ${(props) =>
    props.isDisabled
      ? "#6a6a6a"
      : props.isActive
      ? "rgb(255, 255, 255)"
      : "rgb(255, 128, 127)"};

  background-color: ${(props) =>
    props.isDisabled
      ? "#f8f7f8"
      : props.isActive
      ? "rgba(255, 128, 127, 1)"
      : "rgba(255, 128, 127, 0.2)"};

  &&:first-child {
    border-radius: 3px 0px 0px 3px;
  }

  &&:last-child {
    border-radius: 0px 3px 3px 0px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3.2vw;
    padding: 1.5vw 0;
  }

  span {
    font-size: 0.8vw;

    @media only screen and (max-width: 900px) {
      font-size: 2.2vw;
    }
  }
`;
