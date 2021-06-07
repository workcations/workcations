import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 90px);
  max-height: calc(100vh - 90px);
  height: calc(100vh - 90px);
  position: sticky;
  top: 70px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
`;

export const FilterItem = styled.div`
  width: 100%;
  border: 1.5px solid #dfdfdf;
  transition: all 0.2s ease-in-out;
  border-bottom: 0px;
  border-color: #dfdfdf;

  :last-child {
    border-bottom: 1.5px solid #dfdfdf;
  }
`;

export const FilterHeading = styled.div`
  font-weight: 600;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  span {
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 5px;
    transition: all 0.3s ease-in-out;
  }
`;

export const FilterHeadingBackground = styled.div`
  background-color: #dfdfdf;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.isActive ? "100%" : "0px")};
  transition: all 0.3s ease-in-out;
  margin: 0px;
`;

export const FilterContent = styled.div`
  max-height: ${(props) => (props.isActive ? "calc(100vh - 295px)" : "0px")};
  overflow-y: ${(props) => (props.isActive ? "scroll" : "hidden")};
  transition: all 0.3s ease-in-out;
  text-transform: capitalize;
  padding: ${(props) => (props.isActive ? "5px" : "0px")};

  ::-webkit-scrollbar {
    display: none;
  }
`;
