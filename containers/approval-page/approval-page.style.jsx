import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0px;
  margin-top: 50px;
  background-color: #000000;
  color: white;
  padding: 50px 10%;
  min-height: 70vh;

  @media only screen and (max-width: 900px) {
    padding: 20px;
    font-size: 0.8em;
  }
`;

export const FlexItem = styled.div`
  width: 100%;
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
  border: 1px solid #ff6b6c;
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

export const CartSharingTitle = styled.div`
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

export const CartSharingSharingTitle = styled.div`
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
`;

export const Line = styled.div`
  width: 300px;
  color: transparent;
  border-bottom: 1px solid #cccccc;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
  margin: 20px 0px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    font-size: 1.1em;
  }
`;

export const GridTraveler = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
  margin: 20px 0px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    font-size: 1.1em;
  }
`;

export const GridTravelerList = styled.div`
  width: 100%;
  border: 2px solid #ff6b6c;
  border-radius: 10px;
  padding: 15px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
  margin: 40px 0px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    font-size: 1.1em;
    padding: 15px 10px;
  }
`;

export const GridTravelerTitle = styled.div`
  height: 30px;
  background-color: #ff6b6c;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  position: absolute;
  top: -15px;
  left: 25px;
`;

export const Submit = styled.input`
  font-size: 1em;
  color: white;
  background-color: #ff6b6c;
  border: 2px solid white;
  margin: 0px auto;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const DownloadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const DownloadInvoice = styled.a`
  background-color: #ff6b6c;
  color: white;
  cursor: pointer;
  margin: 0px auto;
  padding: 7px 20px;
  font-weight: 600;
  border-radius: 3px;
  text-align: center;
`;

export const RadioGroup = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 17vw 1fr;
  }
`;

export const RadioGroupLabel = styled.div`
  font-weight: 600;
  color: #ffffff;
  height: 40px;
  line-height: 40px;
  font-size: 0.9em;
  margin: 0px;
  padding: 0px;
  margin-right: 25px;
`;

export const RadioGroupButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 0.8em;

  input {
    margin-right: 10px;
  }
`;

export const RadioButton = styled.div`
  margin: 16px 0;

  input[type="radio"] {
    display: none;

    &:checked + label:before {
      border-color: rgba(255, 108, 107);
      animation: ripple 0.2s linear forwards;
    }

    &:checked + label:after {
      transform: scale(1);
    }
  }

  label {
    display: inline-block;
    height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;

    &:before,
    &:after {
      position: absolute;
      content: "";
      border-radius: 50%;
      transition: all 0.3s ease;
      transition-property: transform, border-color;
    }

    &:before {
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 1);
    }

    &:after {
      top: 6.5px;
      left: 6.5px;
      width: 11px;
      height: 11px;
      transform: scale(0);
      background: rgba(255, 108, 107);
    }
  }

  @keyframes ripple {
    0% {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0);
    }

    50% {
      box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
    }

    100% {
      box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
    }
  }
`;

export const Approval = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;

  span {
    background-color: #911313;
    width: 100%;
    color: white;
    cursor: pointer;
    padding: 7px 20px;
    font-weight: 600;
    border-radius: 3px;
    text-align: center;

    &:first-child {
      background-color: #0c7c0c;
    }
  }
`;
