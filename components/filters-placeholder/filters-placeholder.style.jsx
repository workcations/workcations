import styled, { css } from "styled-components";

const Dark = css`
  background: #8b8e92;
  background-image: linear-gradient(
    to right,
    #8b8e92 0%,
    #afafaf 20%,
    #8b8e92 40%,
    #8b8e92 100%
  );
`;

const Shimmer = css`
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  background-repeat: no-repeat;
  background-size: 800px 1040px;
  position: relative;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

export const TopContainer = styled.div`
  /*    filters-top-container   */

  position: sticky;
  top: 0px;
  width: 17vw;
  top: 0px;
  z-index: 1;
  margin: 0px;
  background-color: white;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Container = styled.div`
  /*    filters-container   */

  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  /*    filter-wrapper   */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: flex-start;
  padding: 1vw;
`;

export const FilterTitle = styled.div`
  /*    filter-name dark shimmer   */

  height: 1.5vw;
  width: 5vw;
  margin: 0.8vw 0vw;
  background-color: black;

  ${Dark}
  ${Shimmer}
`;

export const FilterValue = styled.div`
  /*    filter-value   */
`;

export const DurationValue = styled.div`
  /*    duration-value   */

  width: 100%;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Pricing = styled.div`
  /*    pricing-slider dark shimmer   */

  height: 1vw;
  width: 15vw;
  background-color: black;
  margin-bottom: 0.4vw;

  ${Dark}
  ${Shimmer}
`;

export const Ppn = styled.div`
  /*    ppn shimmer dark   */

  height: 1vw;
  width: 6vw;
  background-color: black;

  ${Dark}
  ${Shimmer}
`;

export const List = styled.div`
  /*    filter-list   */

  width: 100%;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const ListItem = styled.div`
  /*    list-object   */

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7vw;
`;

export const CheckBox = styled.div`
  /*    checkbox dark shimmer   */

  height: 2vw;
  width: 2vw;
  border-radius: 20px;
  background-color: black;

  ${Dark}
  ${Shimmer}
`;

export const ItemTitle = styled.div`
  /*    list-item dark shimmer   */

  height: 1.5vw;
  width: 8vw;
  margin-right: 2vw;
  background-color: black;

  ${Dark}
  ${Shimmer}
`;
