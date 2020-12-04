import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  margin: 2.5vw 0vw 0vw 7vw;
  top: 55px;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  width: 29vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.29);
  background-color: white;

  @media only screen and (max-width: 900px) {
    margin: 40px 0px 4vw 0px;
    position: unset;
    max-height: unset;
    height: auto;
    width: 90vw;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 10px;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);

  @media only screen and (max-width: 900px) {
    height: auto;
    max-height: unset;
    width: auto;
    justify-content: unset;
    border-radius: 5px;
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
    border-radius: 5px;
  }
`;

export const Heading = styled.h2`
  font-size: 1.6vw;
  color: rgb(65 65 65);
  margin: 0.5vw 0vw;

  @media only screen and (max-width: 900px) {
    font-size: 5vw;
    margin: 3vw 0vw;
    font-weight: 600;
  }
`;

export const DurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27vw;
  margin-bottom: 1vw;
  box-shadow: 0px 0px 3px 0px #aaaaaa;
  border-radius: 3px;

  @media only screen and (max-width: 900px) {
    width: 90%;
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

export const CinCoutHeading = styled.span`
  font-size: 1.2vw;
  font-weight: bold;
  color: #414141;
  margin: 0.5vw;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
    margin: 2vw 0vw;
  }
`;

export const RoomsContainer = styled.div`
  max-height: 50vh;
  width: 26.5vw;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 5px;
  justify-items: center;
  overflow: scroll;
  padding: 0.7vw;

  @media only screen and (max-width: 900px) {
    max-height: 1000vw;
    width: 80vw;
    padding: 1.5vw;
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 0.5vw;
  margin-bottom: 1vw;
  display: grid;
  grid-template-columns: 9vw 1fr;
  grid-gap: 5px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 24vw 1fr;
    padding: 2vw;
    margin-bottom: 3vw;
    border-radius: 3px;
  }

  &&:last-child {
    margin-bottom: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Image = styled.div`
  height: 6vw;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    height: 16vw;
    border-radius: 3px;
  }
`;

export const RoomFeatures = styled.div`
  display: flex;
  flex-direction: column;
  color: #444444;
  font-size: 0.8vw;

  @media only screen and (max-width: 900px) {
    font-size: 2.3vw;
  }
`;

export const AvailableRooms = styled.div`
  font-size: 0.9vw;
  font-weight: 600;
  color: #ff6c6b;

  @media only screen and (max-width: 900px) {
    font-size: 2.5vw;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  color: #444444;
  font-size: 1.4vw;

  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
`;

export const SharingItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1vw;

  @media only screen and (max-width: 900px) {
    margin-top: 3vw;
  }
`;

export const Sharing = styled.div`
  display: flex;
  align-items: center;
  font-size: 1vw;
  font-weight: 600;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }

  img {
    height: 1vw;
    margin-right: 5px;

    @media only screen and (max-width: 900px) {
      height: 3vw;
    }
  }
`;

export const PricingContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 5px;
`;

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Striked = styled.div`
  text-decoration: line-through;
  font-size: 1vw;
  font-weight: 600;
  color: #949494;

  @media only screen and (max-width: 900px) {
    font-size: 2.6vw;
  }
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.5vw;
  font-weight: 700;

  @media only screen and (max-width: 900px) {
    font-size: 4vw;
  }

  span {
    padding: 0.05vw 0.2vw;
    background-color: #00c4ab;
    color: white;
    font-size: 0.8vw;
    font-weight: 600;
    border-radius: 2px;
    margin-left: 0.5vw;

    @media only screen and (max-width: 900px) {
      padding: 0.5vw 1vw;
      font-size: 1.5vw;
      border-radius: 0px;
      margin-left: 1.5vw;
    }
  }
`;

export const Unit = styled.div`
  text-transform: lowercase;
  font-size: 0.7vw;
  font-weight: 700;

  @media only screen and (max-width: 900px) {
    font-size: 2vw;
    font-weight: 400;
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

export const Costing = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CostingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0vw 0vw 0.5vw 0vw;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    width: 80vw;
    margin: 4vw 0vw 4vw 0vw;
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
  width: 100%;
  background-color: #ff6b6c;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3vw 0vw;
  margin-bottom: 0.5vw;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    width: 80vw;
    padding: 2vw 0vw;
    margin-bottom: 4vw;
  }

  span {
    font-weight: 600;
    font-size: 1.3vw;
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
  max-width: calc(100vw - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
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
    font-size: 1vw;

    @media only screen and (max-width: 900px) {
      font-size: 3.5vw;
      padding: 10px 15px;
    }
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
    line-height: 2em;
    margin-bottom: 3vw;
  }
`;

export const PromoCode = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  column-gap: 15px;
  width: 90%;
`;

export const ApplyPromoCode = styled.div`
  margin-top: 5px;
  width: 100%;
  background-color: #00c4ab;
  color: white;
  border: 1px solid#479f99;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.3vw;

  :hover {
    background-color: white;
    color: #00c4ab;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const WarningMessage = styled.div`
  margin-top: 3px;
  margin-bottom: 10px;
  color: red;
  font-size: 0.4em;
  width: 80%;

  @media screen and (max-width: 600px) {
    font-size: 1em;
    margin-bottom: 5px;
  }
`;
