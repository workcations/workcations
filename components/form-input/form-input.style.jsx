import styled from "styled-components";

export const Group = styled.fieldset`
  width: 100%;
  margin: 0px auto;
  border-radius: 3px;
  border: 1.5px solid #000000;
  padding: 0px 15px 10px 15px;
  transition: all 0.3s ease-in-out;
  color: #000000;
  background-color: transparent;

  &:focus-within {
    border: 1.5px solid #ff6b6c;
    color: #ff6b6c;
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    letter-spacing: 0.1em;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 1em;
  transition: all 0.3s ease-in-out;
  background-color: transparent;

  &:focus {
    outline: none;
    color: #ff6b6c;
  }

  @media screen and (max-width: 830px) {
    font-size: 0.8em;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  font-size: 1em;
  resize: none;
  overflow-y: hidden;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    color: #ff6b6c;
  }

  @media screen and (max-width: 830px) {
    font-size: 0.8em;
  }
`;

export const Label = styled.legend`
  font-size: 0.8em;
  font-weight: 400;
  padding: 0px 6px;
  margin-left: 10px;

  @media screen and (max-width: 960px) {
    font-size: 0.6em;
  }
`;

export const Submit = styled.input`
  margin: 20px auto 0px auto;
  background-color: #ff6b6c;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.3em;
  padding: 10px 25px;
  border-radius: 4px;
  border: 1.5px solid #ff6b6c;
  transition: 0.4s ease-in-out;

  :hover {
    background-color: white;
    color: #ff6b6c;
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: 830px) {
    font-size: 1em;
  }
`;

export const WarningMessage = styled.div`
  font-size: 10px;
  color: red;
`;
