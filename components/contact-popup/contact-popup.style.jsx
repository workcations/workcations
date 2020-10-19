import styled from "styled-components";

export const PopupBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  top: ${(props) => (props.isHidden ? "110vh" : "0vh")};
  left: 0;
  transition: all 314ms ease-in-out;
  z-index: 101;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    transition: all 366ms ease-in-out;
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.isHidden ? "110vh" : "5vh")};
  left: 5vw;
  height: 90vh;
  width: 90vw;
  border-radius: 10px;
  background-color: white;
  padding: 25px 40px;
  transition: all 300ms ease-in-out;
  z-index: 102;

  @media screen and (max-width: 768px) {
    padding: 5px 40px 25px 40px;
    height: 80vh;
    width: 100vw;
    top: ${(props) => (props.isHidden ? "110vh" : "20vh")};
    left: 0px;
    border-radius: 25px;
  }
`;

export const ContactFormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 25px 25px 25px;
  border: 1.5px dashed #ff6b6c;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0px;
    border: 0px dashed #ff6b6c;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin: 0px auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  fieldset {
    margin: 10px 0px 0px 0px;
  }
`;

export const ContactForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;

export const Cross = styled.div`
  color: white;
  text-align: right;
  font-size: 2em;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1em;
  }

  span {
    background-color: #ff6b6c;
    padding: 0px 10px;
    height: 2em;
    line-height: 2em;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: auto;

    @media screen and (max-width: 768px) {
      height: 15vh;
      width: auto;
    }
  }
`;

export const FormSubmitAlert = styled.div`
  position: fixed;
  bottom: ${(props) => (props.active ? "50px" : "-50px")};
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
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
  }
`;
