import styled from "styled-components";

import PropertyDetailsContainer from "../../style-components/property-page-container/property-page-container.style";

export const Container = styled(PropertyDetailsContainer)`
  @media only screen and (max-width: 900px) {
  }
`;

export const Content = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  color: rgb(49, 49, 49);
  font-size: 1em;
  border-radius: 5px;
  padding: 25px 20px;
  margin: 0px;
`;
