import styled from "styled-components";

const PropertyDetailsContainer = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  margin-bottom: 50px;

  h2 {
    padding-left: 10px;
    margin: 0px;
    color: #414141;
    font-weight: 600;
    font-size: 1.7vw;
    margin-bottom: 10px;

    @media only screen and (max-width: 900px) {
      padding-left: 2vw;
      font-size: 4vw;
      margin-bottom: 10px;
    }
  }
`;

export default PropertyDetailsContainer;
