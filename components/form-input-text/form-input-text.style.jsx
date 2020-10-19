import styled from "styled-components";

export const Group = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "inputLabel inputInput"
    ". warning";
  column-gap: 15px;
  font-size: 0.9em;
  height: ${(props) => (props.light ? "30px" : "40px")};
  margin: ${(props) => (props.light ? "10px 0px" : "20px 0px")};

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
`;

export const Label = styled.label`
  grid-area: inputLabel;
  font-weight: 600;
  color: ${(props) => (props.light ? "#000000" : "#ffffff")};
  height: ${(props) => (props.light ? "30px" : "40px")};
  line-height: ${(props) => (props.light ? "30px" : "40px")};
  font-size: 0.9em;
`;

export const Input = styled.input`
  grid-area: inputInput;
  width: 100%;
  margin: 0px;
  border: none;
  border-bottom: 1.5px solid #777777;
  padding: 5px;
  color: ${(props) => (props.light ? "#000000" : "#ffffff")};
  background-color: ${(props) =>
    props.warningMessage.length > 0
      ? "rgba(255, 107, 108, 0.4)"
      : "transparent"};
  transition: background-color 0.4s;
  font-size: 1em;
  height: ${(props) => (props.light ? "30px" : "40px")};

  :focus {
    background-color: ${(props) => (props.light ? "#ffffff" : "#222222")};
    outline: none;
    border-color: ${(props) => (props.light ? "#ff6b6c" : "#ffffff")};
  }
`;

export const WarningMessage = styled.div`
  grid-area: warning;
  color: rgba(255, 107, 108, 0.8);
  height: ${(props) => (props.light ? "0px" : "20px")};
  line-height: ${(props) => (props.light ? "0px" : "20px")};
  display: ${(props) => (props.light ? "none" : "unset")};
  font-size: 10px;
`;
