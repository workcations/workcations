import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0px;
  height: 50px;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255);
  transition: top 0.5s;
  display: grid;
  grid-template-columns: 10vw 1fr 1fr 1fr 10vw;
  grid-template-areas: ". logo search menu .";
  z-index: 100;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 5vw 1fr 50vw 1fr 5vw;
    grid-template-areas: ". logo search hamburger .";
  }
`;

export const Logo = styled.a`
  grid-area: logo;
  height: 50px;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    height: 80%;
    width: auto;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoMobile = styled.a`
  grid-area: logo;
  height: 50px;
  width: 50%;
  display: none;
  align-items: center;
  justify-content: flex-start;

  img {
    height: 80%;
    width: auto;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  grid-area: menu;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-color: white;
    position: fixed;
    top: 50px;
    right: ${(props) => (props.open ? "0px" : "-200px")};
    width: 200px;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 50px);
    border-top: 1.5px solid rgba(0, 0, 0, 0.1);
  }

  div {
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 55px;
    cursor: pointer;
    background-color: #ff6b6c;
    color: white;
    padding: 5px 25px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const MenuOption = styled.a`
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  margin-left: 55px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    margin: 0px;
    padding: 10px 0px 10px 15px;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  grid-area: hamburger;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  right: -500px;

  @media only screen and (max-width: 768px) {
    position: static;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    margin-right: -15px;
    padding: 0;
    outline: none;
  }

  path {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Line1 = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "90 207" : "60 207")};
  stroke-dashoffset: ${(props) => (props.open ? "-134" : "0")};
`;

export const Line2 = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "1 60" : "60 60")};
  stroke-dashoffset: ${(props) => (props.open ? "-30" : "0")};
`;

export const Line3 = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "90 207" : "60 207")};
  stroke-dashoffset: ${(props) => (props.open ? "-134" : "0")};
`;

export const SearchContainer = styled.div`
  grid-area: search;
  width: 100%;
  height: 50px;
  display: ${props => props.searchPos ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media only screen and (max-width: 768px) {
  }
`;

export const Search = styled.form`
  background-color: white;
  height: 35px;
  width: 90%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 2px #777777;
`;

export const SearchText = styled.div`
  width: 100%;
  padding-left: 10px;
  font-size: 1vw;
  color: #888888;
  background-color: #efefef;
  height: 35px;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    outline: none;
    border: none;
  }
`;

export const SearchInput = styled.input`
  /* search-field */
  height: 35px;
  width: 100%;
  font-size: 1vw;
  margin: 0px;
  background-color: #efefef;
  border: none;
  border-radius: 5px 0px 0px 5px;
  padding: 0px 15px;

  @media only screen and (max-width: 769px) {
    width: 70vw;
    font-size: 3vw;
    padding: 1.2vw 2vw;
  }

  &&:focus {
    outline: none;
  }

  &&::placeholder {
    color: ${(props) => (props.searchError ? "red" : "#666666")};
    opacity: 1; /* Firefox */
  }

  &&:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => (props.searchError ? "red" : "#666666")};
  }

  &&::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => (props.searchError ? "red" : "#666666")};
  }
`;

export const SearchIcon = styled.div`
  width: 45px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6c6b;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;

  img {
    height: 80%;
  }
`;
