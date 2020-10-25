import styled from "styled-components";

export const Group = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "inputLabel inputInput";
  column-gap: 15px;
  font-size: 1vw;
  margin-top: 5px;

  &:focus-within {
  }

  input[type="password"] {
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }
`;

export const Label = styled.label`
  grid-area: inputLabel;
  font-weight: 600;
  color: #000000;
  height: 40px;
  line-height: 40px;
  font-size: 0.9em;
`;

export const Input = styled.input`
  grid-area: inputInput;
  width: 100%;
  margin: 0px;
  border: none;
  border-bottom: 1.5px solid #777777;
  padding: 5px;
  color: #000000;
  background-color: transparent;
  transition: background-color 0.4s;
  font-size: 1em;
  height: 40px;

  :focus {
    background-color: #ffffff;
    outline: none;
    border-color: #ff6c6b;
  }
`;
