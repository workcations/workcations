import styled from "styled-components";

export const Container = styled.div`
  margin-top: 130px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
  color: #424950;
  margin-bottom: 24px;
  position: fixed;
  left: 0;
  top: 50px;
  width: 100%;
  height: 70px;
  background-color: #ff6c6b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;

  div {
    width: 100%;
    height: 20px;
    background-color: white;

    @media only screen and (max-width: 600px) {
      height: 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 5vw;
    height: 40px;
    margin-bottom: 0px;
  }
`;

export const Video = styled.div`
  width: 50vw;
  height: 28vw;
  box-shadow: 0px 3px 6px #00000029;
  margin-bottom: 35px;
  background-color: #d5d5d5;
  background: #d5d5d5;
  background-image: linear-gradient(
    to right,
    #d5d5d5 0%,
    #f1f1f1 20%,
    #d5d5d5 40%,
    #d5d5d5 100%
  );
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  background-repeat: no-repeat;
  background-size: 800px 1040px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 56vw;
  }
`;

export const Quote = styled.span`
  width: 50vw;
  font-size: 1.3vw;
  text-align: center;
  color: #777777;
  margin-bottom: 24px;
  border-radius: 10px;
  border-left: 4px solid #777777;
  border-right: 4px solid #777777;
  padding: 15px;
  background-color: #efefef;
  box-shadow: 1px 1px 3px #cccccc;

  @media only screen and (max-width: 600px) {
    width: 95vw;
    font-size: 2.6vw;
  }
`;

export const Description = styled.span`
  width: 50vw;
  font-size: 2vw;
  font-weight: 800;
  text-align: center;
  color: #424950;
  margin-bottom: 24px;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    font-size: 3vw;
  }
`;

export const FeaturesContainer = styled.div`
  width: 48vw;
  font-size: 1.2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    font-size: 1.8vw;
    background-color: #efefef;
    padding: 20px;
  }
`;

export const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 5vw;
    height: auto;
  }

  span {
    padding-top: 10px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 25%;
    height: 20vw;
    justify-content: center;

    img {
      width: 8vw;
    }

    span {
    }
  }
`;

export const ContactUs = styled.div`
  background-color: #ff6c6b;
  color: white;
  font-weight: 600;
  margin-bottom: 25px;
  font-size: 4vw;
  padding: 8px 18px;
  border-radius: 5px;
  display: none;
  box-shadow: 0px 0px 3px #777777;

  @media only screen and (max-width: 600px) {
    display: unset;
  }
`;

export const SlideShow = styled.div`
  width: 48vw;
  margin-bottom: 24px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const Slide = styled.img`
  background-color: #d5d5d5;
  background: #d5d5d5;
  background-image: linear-gradient(
    to right,
    #d5d5d5 0%,
    #f1f1f1 20%,
    #d5d5d5 40%,
    #d5d5d5 100%
  );
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  background-repeat: no-repeat;
  background-size: 800px 1040px;
  position: relative;
  width: 100%;
  height: auto;
  margin: 0px;
`;

export const Bottom = styled.div`
  position: sticky;
  top: 120px;

  @media only screen and (max-width: 600px) {
    position: unset;
  }
`;

export const ContactForm = styled.div`
  width: 30vw;
  position: sticky;
  top: 130px;
  max-height: calc(100vh - 160px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 10px solid #f6f6f6;
  border-radius: 10px;
  overflow: hidden;
  padding: 0px;
  box-shadow: 3px 3px 4px #f6f6f6, -3px -3px 4px #f6f6f6;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    position: unset;
    max-height: unset;
    border: 8px solid #f6f6f6;
    border-radius: 5px;
  }
`;

export const Heading = styled.div`
  width: 100%;
  font-size: 1.3vw;
  color: #424950;
  text-align: center;
  margin-bottom: 0px;
  padding: 6px 0px 0px 0px;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 5vw;
    margin-bottom: 24px;
    padding: 6px 0px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0px auto;
  margin-bottom: 25px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  fieldset {
    margin: 1vw 0px 0px 0px;
    font-weight: 600;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 15px;
`;

export const FormSubmitAlert = styled.div`
  position: fixed;
  bottom: ${(props) => (props.active ? "50px" : "-50px")};
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  color: green;
  background-color: white;
  border-radius: 5px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease-out;

  span {
    border-radius: 5px;
    border: 1px dotted green;
    background-color: rgba(0, 255, 0, 0.2);
    padding: 20px 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2.6vw;
    width: calc(100vw - 50px);
  }
`;
