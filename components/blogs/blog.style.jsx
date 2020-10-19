import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  margin: 50px auto;
  width: 80%;
  border-radius: 5px;
  padding: 20px 80px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
  overflow-x: hidden;

  @media screen and (max-width: 950px) {
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  hr {
    width: 100%;
    background-color: #00000010;
    height: 0px;
    border: 0px;
    margin: 0px auto;

    @media screen and (max-width: 650px) {
      height: 3px;
    }
  }
`;

export const BlogContainer = styled(Container)`
  width: 87%;
  grid-gap: 20px;

  @media screen and (max-width: 1150px) {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px 80px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 850px) {
    grid-gap: 80px 40px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.a`
  box-shadow: 0px 0px 5px 1px #00000030;
  padding: 0px 0px 10px 0px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 1em;
  font-weight: 600;
  padding: 0px 15px;
  height: 4em;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  overflow-y: hidden;
  background-color: rgba(255, 108, 107, 0.8);
  color: white;
  border-radius: 5px 5px 0px 0px;
`;

export const ImageCon = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin: 0px 0px 10px 0px;

  @media screen and (max-width: 600px) {
    height: 250px;
  }

  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Date = styled.div`
  padding: 10px 10px 0px 10px;
  width: 40%;
  font-size: 0.7em;
  font-weight: 600;
  color: #00000080;
  display: inline-block;
`;

export const Tags = styled.span`
  padding: 5px 5px 0px 5px;

  span {
    font-size: 0.6em;
    background-color: rgba(255, 107, 108, 0.2);
    border: 0.5px solid #ff6b6c;
    color: #ff6b6c;
    margin: 0px 5px;
    padding: 2px 5px;
    border-radius: 2px;
  }
`;

export const Description = styled.div`
  font-size: 0.7em;
  height: 5.6em;
  overflow: hidden;
  margin: 5px 10px;
  text-align: justify;
  color: black;
`;

export const ReadMore = styled.div`
  padding: 10px 10px;
  font-size: 0.9em;
  font-weight: 600;
  color: #ff6b6c;
  display: block;
  border-bottom: 1.5px solid #00000030;
`;
