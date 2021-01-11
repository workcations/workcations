import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 104;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 36vw 64vw;
  grid-template-rows: 50px 1fr 90px;
  grid-template-areas:
    "top top"
    "filters values"
    "apply apply";
  background-color: #333333;
`;

export const TopContainer = styled.div`
  grid-area: top;
  background-color: #151515;
  color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 5vw;
  position: relative;
`;

export const CancelButton = styled.a`
  font-size: 2.5vw;
  position: absolute;
  left: 10px;
  background-color: #efefef;
  color: #000000;
  padding: 6px 10px;
  border-radius: 100px;
`;

export const FiltersContainer = styled.div`
  grid-area: filters;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
`;

export const FilterItem = styled.div`
  color: ${(props) => (props.isActive ? "#ffffff" : "#cccccc")};
  padding: 0px 8px;
  font-weight: 600;
  height: 15vw;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  font-size: 3.5vw;

  span {
    position: absolute;
    right: 0;
    width: ${(props) => (props.isActive ? "20vw" : "calc(36vw - 16px)")};
    transition: width 0.3s ease-in-out;
  }
`;

export const FilterItemBack = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  height: 15vw;
  width: 23vw;
  transition: all 0.3s ease-in-out;
  position: absolute;
  right: 0;
  top: calc(${(props) => `${props.activePosition * 15}vw`});
`;

export const ValuesContainer = styled.div`
  grid-area: values;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const ValuesSubContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: calc(100vh - 190px);
  max-height: calc(100vh - 190px);
  border: 5px solid rgba(0, 0, 0, 0);
  overflow-y: scroll;
`;

export const Values = styled.div`
  background-color: #151515;
  width: 100%;
  border-radius: 10px;
  padding: 0px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

export const PriceItem = styled.span`
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.isActive ? "#efefef" : "#dddddd")};
  color: ${(props) => (props.isActive ? "#333333" : "#dddddd")};
  background-color: ${(props) => (props.isActive ? "#efefef" : "#transparent")};
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  font-size: 2.8vw;
  padding: 0px 20px;
  height: 6vh;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  span {
    margin-left: 8px;
  }

  img {
    height: auto;
    width: ${(props) => (props.isActive ? "4vw" : 0)};
    margin-right: ${(props) => (props.isActive ? "8px" : 0)};
    transition: all 0.3s ease-in-out;
  }
`;

export const StatesContainer = styled.div`
  color: #dddddd;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StatesItem = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: grid;
  grid-template-columns: 15px 1fr;
  grid-template-areas:
    "title title"
    ". cities";
  text-transform: capitalize;
  font-size: 3vw;
`;

export const StatesTitle = styled.div`
  grid-area: title;
  border: 2px solid ${(props) => (props.isActive ? "#efefef" : " #dddddd")};
  padding: 0px 0px 0px 10px;
  border-radius: 5px;
  font-size: 3.3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: ${(props) => (props.isActive ? "#333333" : " #dddddd")};
  background-color: ${(props) => (props.isActive ? "#efefef" : " transaprent")};
  transition: all 0.3s ease-in-out;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const StatesImageContainer = styled.div`
  background-color: ${(props) => (props.isActive ? "#efefef" : "#151515")};
  border-left: 1px solid ${(props) => (props.isActive ? "#333333" : " #dddddd")};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 5vh;
  transition: all 0.3s ease-in-out;
  margin-right: -1px;
  border-radius: 0px 5px 5px 0px;

  img {
    width: auto;
    height: ${(props) => (props.isActive ? "60%" : "0")};
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "rotate(180deg)" : "none")};
  }

  img:first-child {
    height: ${(props) => (props.isActive ? "0" : "60%")};
    transform: ${(props) => (props.isActive ? "rotate(180deg)" : "none")};
  }
`;

export const StatesFlex = styled.div`
  grid-area: cities;
  padding: 5px 0px 5px 10px;
  max-height: ${(props) => (props.isActive ? "180vh" : "0px")};
  overflow-y: hidden;
  transition: all 0.4s ease-in-out;
`;

export const CitiesItem = styled.div`
  margin: 7px 0px;
  border: 1px solid ${(props) => (props.isActive ? "#efefef" : " #dddddd")};
  border-radius: 3px;
  color: ${(props) => (props.isActive ? "#333333" : " #dddddd")};
  background-color: ${(props) => (props.isActive ? "#efefef" : " transaprent")};
  transition: all 0.3s ease-in-out;
`;

export const CitiesTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const CitiesImageContainer = styled.div`
  border-right: 1px solid
    ${(props) => (props.isActive ? "#333333" : " #dddddd")};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  height: 7vw;
  transition: all 0.3s ease-in-out;

  img {
    width: auto;
    height: ${(props) => (props.isActive ? "80%" : "0")};
    transition: all 0.3s ease-in-out;
  }

  img:first-child {
    height: ${(props) => (props.isActive ? "0" : "80%")};
  }
`;

export const TypeContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TypeItem = styled.span`
  margin: 10px 0px;
  height: 5vh;
  border: 1px solid ${(props) => (props.isActive ? "#efefef" : " #dddddd")};
  border-radius: 3px;
  color: ${(props) => (props.isActive ? "#333333" : " #dddddd")};
  background-color: ${(props) => (props.isActive ? "#efefef" : " transaprent")};
  transition: all 0.3s ease-in-out;
`;

export const TypeTitle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 5vw;
  text-transform: capitalize;
  font-size: 3vw;
`;

export const TypeImageContainer = styled.div`
  border-right: 1px solid
    ${(props) => (props.isActive ? "#333333" : " #dddddd")};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  height: 5vh;
  width: 5vh;
  transition: all 0.3s ease-in-out;
  margin-right: 5vw;

  img {
    width: auto;
    height: ${(props) => (props.isActive ? "45%" : "0")};
    transition: all 0.3s ease-in-out;
  }

  img:first-child {
    height: ${(props) => (props.isActive ? "0" : "45%")};
  }
`;

export const AmenitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const Amenities = styled.span`
  color: ${(props) => (props.isActive ? "#333333" : "#dddddd")};
  font-size: 3vw;
  line-height: 3vw;
  border: 1px solid ${(props) => (props.isActive ? "#efefef" : "#dddddd")};
  background-color: ${(props) => (props.isActive ? "#efefef" : "transparent")};
  padding: 0px 5px;
  height: 6vw;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: 10px 0px;
  transition: all 0.3s ease-in-out;
`;

export const ApplyFilter = styled.div`
  grid-area: apply;
  width: 100vw;
  height: 90px;
  background-color: #151515;

  div {
    color: white;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 4.4vw;
    width: 100vw;
    height: 90px;

    span {
      background-color: #ff6c6b;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2vw 10vw 4vw 10vw;
      border-radius: 5px;
      width: 100%;

      a {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
