import styled from "styled-components";

const DataPoints = styled.div`
  width: 100%;

  h2 {
    padding: 0px 10px;
    color: #414141;
    font-weight: 600;
    font-size: 1.7vw;
    line-height: 1.8vw;
    margin-top: 0.5vw;

    @media only screen and (max-width: 900px) {
      margin: 0px;
      padding: 3vw 2vw;
      font-size: 4vw;
    }
  }

  p {
    text-align: justify;
    margin: 0px;
    padding: 0px;
  }
`;

export default DataPoints;
