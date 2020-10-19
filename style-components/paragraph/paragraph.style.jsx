import styled from "styled-components";

const Paragraph = styled.p`
  text-align: justify;
  font-size: 0.8em;

  span {
    font-weight: 600;
    font-style: italic;
    color: rgba(255, 108, 107, 0.8);
    text-align: center;
    margin-bottom: 5px;
    background-color: rgba(255, 107, 108, 0.1);
    padding: 10px 5px;
    border: 1px dotted #ff6b6c;
    display: block;
  }
`;

export default Paragraph;
