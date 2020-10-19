import styled from "styled-components";

export const FiltersTopContainer = styled.div`
  position: sticky;
  top: 50px;
  width: 17vw;
  z-index: 1;
  margin: 0px;
  background-color: white;
  border-radius: 5px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Headline = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 1.4em;
  margin-bottom: 20px;
  display: none;

  span {
    color: #ff6b6c;
  }
`;

export const FiltersContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
  border-radius: 5px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: flex-start;
  padding: 1vw;
`;

export const FilterTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.1vw;
  margin: 0.8vw 0vw;
`;

export const PriceFilter = styled.div`
  width: 90%;
  margin: 25px auto 0px auto;
  text-align: center;

  span {
    color: silver;
    font-size: 1vw;
  }
`;

export const FilterList = styled.div`
  width: 100%;
  padding-right: 5px;
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 0.7vw;
`;
