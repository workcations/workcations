import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 88vw;
  margin: 50px auto;
  padding-top: 20px;

  @media screen and (max-width: 650px) {
    width: 100vw;
  }
`;

export const BlogContent = styled.div`
  width: 80%;
  margin: 0px auto;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const BlogSidebar = styled.div`
  background-color: #ff6b6c;
  width: 100%;
  display: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  height: 0px;
  margin: 0px;
`;

export const BlogTitle = styled.div`
  text-transform: capitalize;
  font-size: 25px;
  font-weight: 700;
  margin: 25px auto;
  width: 100%;

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;

  span {
    background-color: rgba(255, 107, 108, 0.2);
    border: 0.5px solid #ff6b6c;
    color: #ff6b6c;
    border-radius: 3px;
    margin-right: 15px;
    padding: 2px 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #ff6b6c;
      color: white;
    }
  }

  @media screen and (max-width: 650px) {
    width: 90%;
    margin: 0px auto;
  }
`;

export const Text = styled.div`
  font-size: 0.9em;
  line-height: 1.7em;
  text-align: justify;
  padding: 0px;
  margin: 20px auto;

  a {
    text-decoration: none;
    color: #ff6b6c;
    padding-left: 0.3em;
  }

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;

export const ImageCon = styled.div`
  width: 75%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #bbbbbb;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Source = styled.div`
  font-size: 12px;
  line-height: 1.5em;
  background-color: #00000090;
  color: white;
  padding: 0px 5px;
  margin: -1.5em auto 0px 0px;
  border-radius: 0px 3px 0px 0px;

  a {
    text-decoration: none;
    color: #ff6b6c;
  }
`;

export const Caption = styled.div`
  font-size: 12px;
  line-height: 1.5em;
  margin: 0px auto;
  text-align: center;
`;

export const SubHeading = styled.div`
  margin-top: 40px;
  font-weight: 600;
  text-transform: capitalize;

  @media screen and (max-width: 650px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const SuggestedRead = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;

  a {
    font-weight: 600;
    color: #ff6c6b;
    text-decoration: underline solid #ff6c6b;
  }

  ::before {
    content: "Suggested Read: ";
  }

  @media screen and (max-width: 650px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;
