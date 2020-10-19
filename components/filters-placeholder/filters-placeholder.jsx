import React from "react";

import {
  TopContainer,
  Container,
  Wrapper,
  FilterTitle,
  FilterValue,
  DurationValue,
  Pricing,
  Ppn,
  List,
  ListItem,
  CheckBox,
  ItemTitle,
} from "./filters-placeholder.style";

const ListArray = new Array(6).fill(true);

const FiltersPlaceHolder = () => (
  <TopContainer>
    <Container>
      <Wrapper>
        <FilterTitle />
        <FilterValue>
          <DurationValue>
            <Pricing />
            <Ppn />
          </DurationValue>
        </FilterValue>
      </Wrapper>
      <Wrapper>
        <FilterTitle />
        <List>
          {ListArray.map((item, i) => (
            <ListItem key={`state${i + 1}`}>
              <CheckBox />
              <ItemTitle />
              <CheckBox />
            </ListItem>
          ))}
        </List>
      </Wrapper>
      <Wrapper>
        <FilterTitle />
        <List>
          {ListArray.map((item, i) => (
            <ListItem key={`type${i + 1}`}>
              <CheckBox />
              <ItemTitle />
              <CheckBox />
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </Container>
  </TopContainer>
);

export default FiltersPlaceHolder;
