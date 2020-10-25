import styled from "styled-components";

export const Container = styled.div`
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4e54c8,
    #8f94fb
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4e54c8,
    #8f94fb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 30px;
  right: ${(props) => (props.hidden ? "30px" : "-100px")};
  cursor: pointer;
  transition: all 0.6s;
  z-index: 103;

  img {
    width: 50%;
    height: auto;
  }

  @media only screen and (max-width: 900px) {
    display: none;
    background-color: ${(props) =>
      props.iconPosition ? "rgba(0,0,0,0)" : "rgba(255, 107, 108, 1)"};
    border: ${(props) => (props.iconPosition ? "none" : "2px solid white")};
    box-shadow: ${(props) =>
      props.iconPosition ? "none" : "0px 0px 4px rgba(0, 0, 0, 0.2)"};
    bottom: ${(props) => (props.iconPosition ? "10px" : "30px")};
    right: ${(props) =>
      props.iconPosition ? "15px" : props.hidden ? "30px" : "-100px"};
  }
`;

export const ContainerMobile = styled.a`
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4e54c8,
    #8f94fb
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4e54c8,
    #8f94fb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 30px;
  right: ${(props) => (props.hidden ? "30px" : "-100px")};
  cursor: pointer;
  transition: all 0.6s;
  z-index: 103;
  display: none;

  img {
    width: 50%;
    height: auto;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    background-color: ${(props) =>
      props.iconPosition ? "rgba(0,0,0,0)" : "rgba(255, 107, 108, 1)"};
    border: ${(props) => (props.iconPosition ? "none" : "2px solid white")};
    box-shadow: ${(props) =>
      props.iconPosition ? "none" : "0px 0px 4px rgba(0, 0, 0, 0.2)"};
    bottom: ${(props) => (props.iconPosition ? "10px" : "30px")};
    right: ${(props) =>
      props.iconPosition ? "15px" : props.hidden ? "30px" : "-100px"};
  }
`;

export const PopupMobile = styled.div`
  position: fixed;
  right: 30px;
  bottom: ${(props) => (props.isActive ? "100px" : "-800px")};
  width: 70vw;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #999999;
  transition: bottom 0.5s ease-in-out;
`;

export const PopupItem = styled.a`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;

  &&:first-child {
    margin-top: 0px;
    border: none;
  }

  &&:last-child {
    margin-bottom: 0px;
    border: none;
  }

  img {
    height: 30px;
    margin-right: 10px;
  }
`;
