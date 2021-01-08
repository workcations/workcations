import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive ? "0" : "120vw")};
  width: 100%;
  height: 100vh;
  transition: left 0.4s ease-in-out;
  background-color: #f5f5f5;
  z-index: 150;
  font-size: 16px;
  display: grid;

  @media only screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

export const Cancel = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
  align-items: center;
  height: 50px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding-left: 5%;
  }

  span {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 300px;
    padding: 3px 15px;
    color: white;
    background-color: black;
    font-size: 1em;
    cursor: pointer;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 50px);
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

export const FlexItem = styled.div`
  width: 50%;
  padding: 15px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h2 {
    margin: 0px;
    padding: 0px;
    font-weight: 600;
    font-size: 1.2em;
  }
`;

export const Summary = styled.div`
  width: 80%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PropertyTitle = styled.div`
  font-weight: 600;
  font-size: 1.4em;
`;

export const CheckInCheckOut = styled.div`
  margin: 5px 0px 10px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    flex-direction: column;
    color: #707070;
    font-size: 0.8em;

    span {
      color: #ff6b6c;
      font-weight: 600;
      font-size: 1.2em;
    }
  }
`;

export const SummaryItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-areas:
    "image title"
    "image sharing";
  column-gap: 10px;
  margin-bottom: 20px;
  background-color: white;
  padding: 5px;
  border-radius: 3px;

  @media only screen and (max-width: 450px) {
    grid-template-columns: 60px 1fr;
  }

  @media only screen and (max-width: 330px) {
    grid-template-columns: 50px 1fr;
  }
`;

export const Image = styled.img`
  grid-area: image;
  width: 100%;
  height: auto;
`;

export const Title = styled.div`
  grid-area: title;
  font-weight: 600;
`;

export const Sharing = styled.div`
  grid-area: sharing;
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
`;

export const SharingItem = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 4fr;
  margin-top: 10px;
`;

export const SharingTitle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.8em;
    color: #ff6b6c;
  }
`;

export const SharingCount = styled.div`
  color: #707070;
`;

export const SharingTotal = styled.div`
  font-weight: 600;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
    padding-right: 5px;

    span {
      width: 140px;
      text-align: right;
    }

    span:first-child {
    }
  }

  div:nth-child(4) {
    font-weight: 600;
    color: #ff6b6c;
  }
`;

export const Line = styled.div`
  width: 300px;
  border-bottom: 1px solid #cccccc;
`;

export const Contact = styled.div`
  width: 80%;
  margin-top: 15px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 10vw;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px auto;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.2em;
  }

  fieldset {
    margin: 10px 0px 0px 0px;
  }
`;

export const Buttons = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  text-align: center;
`;

export const Button = styled.a`
  width: 48%;
  margin: 10px 0px 0px 0px;
  background-color: ${(props) => props.buttonColor};
  cursor: pointer;
  color: #ffffff;
  font-size: 1.3em;
  padding: 10px 0px;
  border-radius: 4px;
  border: 1.5px solid ${(props) => props.buttonColor};
  transition: 0.4s ease-in-out;

  :hover {
    background-color: white;
    color: ${(props) => props.buttonColor};
  }

  @media screen and (max-width: 830px) {
    font-size: 1em;
  }
`;

export const BookNowButton = styled.div`
  width: 100%;
  margin: 10px 0px 0px 0px;
  background-color: #777777;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.3em;
  padding: 10px 0px;
  border-radius: 4px;
  border: 1.5px solid #333333;
  transition: 0.4s ease-in-out;

  :hover {
    background-color: white;
    color: #777777;
  }

  @media screen and (max-width: 830px) {
    font-size: 1em;
  }
`;

export const FormSubmitAlert = styled.div`
  position: fixed;
  bottom: ${(props) => (props.active ? "50px" : "-50px")};
  left: 25px;
  max-width: calc(100vw - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  color: green;
  background-color: white;
  border-radius: 5px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease-out;

  span {
    border-radius: 5px;
    border: 1px dotted green;
    background-color: rgba(0, 255, 0, 0.2);
    padding: 20px 30px;
    font-size: 1vw;

    @media only screen and (max-width: 900px) {
      font-size: 3.5vw;
      padding: 10px 15px;
    }
  }
`;

export const PromoCode = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  column-gap: 15px;
`;

export const ApplyPromoCode = styled.div`
  width: 100%;
  background-color: #ff6c6b;
  color: white;
  font-size: 1.3em;
  border: 1px solid #ff6c6b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: white;
    color: #ff6c6b;
  }

  @media screen and (max-width: 830px) {
    font-size: 1em;
  }
`;

export const WarningMessage = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 0.8em;
`;

export const EmailIdPopup = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive ? "0" : "110vw")};
  background-color: rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease-in-out;
  z-index: 905;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmailIdPopupContainer = styled.div`
  background-color: white;
  width: 40%;
  height: 300px;
  border-radius: 15px;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 1.3vw;
    text-align: center;
  }

  strong {
    color: #ff6c6b;
  }
`;

export const InputContainer = styled.div`
  width: 24vw;
  overflow-x: hidden;
`;

export const EmailIdContainer = styled.div`
  width: 24vw;
  font-size: 1.3vw;
  position: relative;
  left: ${(props) => `${props.emailState * 24 * -1}vw`};
  display: grid;
  grid-template-columns: 24vw 24vw;
  transition: left 0.3s ease-in-out;

  input {
    text-align: center;
  }

  div {
    width: 24vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 0.7em;
      text-align: center;
      color: #ff6c6b;
      cursor: pointer;
    }
  }
`;

export const EmailIdButtons = styled.div`
  font-size: 1.3vw;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-template-rows: 44px;

  div {
    width: 100%;
    background-color: #000000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;

    :first-child {
      background-color: #ff6c6b;
    }
  }
`;
