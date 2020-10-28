import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Heading = styled.div`
  font-weight: 600;
  color: #ff6c6b;
  font-size: 1.2vw;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FlexItem = styled.a`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 5vw;
  margin: 15px 0px;
`;

export const BlogImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 0px 0px 5px;
`;

export const BlogTitle = styled.div`
  padding: 0px 5px;
  font-size: 0.9vw;
  display: flex;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #efefef;
  border-left: 0px;
  box-shadow: 0px 0px 3px #efefef;
`;
