import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  margin: 0px auto 50px auto;
  display: grid;
  grid-template-columns: 6vw 70fr 5fr 25fr 6vw;
  grid-template-areas:
    "cover cover cover cover cover"
    ". content . sidebar .";
  flex-direction: row;
  justify-content: space-between;
  grid-row-gap: 40px;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Cover = styled.div`
  grid-area: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 3vw;
  padding: 0px 10vw;
  text-align: center;

  @media screen and (max-width: 650px) {
    height: 50vh;
    font-size: 6vw;
    background-attachment: unset;
  }
`;

export const BlogContent = styled.div`
  width: 100%;
  margin: 0px auto;
  grid-area: content;
`;

export const BlogSidebar = styled.div`
  width: 100%;
  padding: 0px;
  grid-area: sidebar;

  @media screen and (max-width: 650px) {
    display: none;
  }
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
  font-size: 1em;
  line-height: 1.9em;
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
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #bbbbbb;
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
  font-size: 1.1em;

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

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  box-shadow: 0px 0px 3px #aaaaaa;

  @media screen and (max-width: 650px) {
  }
`;

export const TableRow = styled.tr`
  &:first-child {
    background-color: #ff6c6b;
    color: white;
    text-align: left;

    @media screen and (max-width: 650px) {
    }
  }

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const TableHeading = styled.th`
  padding: 10px 5px;
  font-size: 1vw;

  @media screen and (max-width: 650px) {
    font-size: 3.2vw;
  }
`;

export const TableCell = styled.td`
  padding: 10px 5px;
  color: #777777;
  font-size: 0.9vw;

  @media screen and (max-width: 650px) {
    font-size: 2.9vw;
  }
`;
