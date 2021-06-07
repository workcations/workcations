import React, { useState, useEffect } from "react";

import Filters from "../../components/filters-new/filters";
import PropertyItem from "../../components/property-item-new/property-item";
import PropertyItemPlaceHolder from "../../components/property-item-placeholder/property-item-placeholder";

import { Container, ListContainer, ListGrid } from "./property-list.style";

const PropertyList = ({
  min,
  max,
  duration,
  states,
  cities,
  types,
  list,
  page,
  pagesList,
  isLoader,
  setPagesList,
}) => {
  const ListArray = new Array(6).fill(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (isLoader) {
      // To get page offset of last user
      const lastPropertyLoaded = document.querySelector(
        ".propertyItemList > .propertyItem:last-child"
      );

      if (lastPropertyLoaded) {
        const lastPropertyLoadedOffset =
          lastPropertyLoaded.offsetTop + lastPropertyLoaded.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        // Detects when user scrolls down till the last user
        if (pageOffset > lastPropertyLoadedOffset) {
          // Stops loading
          const ongoingList = pagesList.filter((item) => item === "ongoing");

          if (ongoingList.length === 0) {
            let newPagesList = [];

            if (pagesList[0] === "initial") {
              newPagesList = pagesList.map((item) =>
                item === "initial" ? "ongoing" : item
              );
            } else {
              let index = 0;

              for (let i = 0; i < pagesList.length; i++) {
                if (pagesList[i] === "finished") {
                  index = i;
                }
              }

              newPagesList = pagesList.map((item, i) =>
                i === index + 1 ? "ongoing" : item
              );

              setPagesList([...newPagesList]);
            }
          }
        }
      }
    }
  };

  return (
    <Container>
      <Filters
        min={min}
        max={max}
        duration={duration}
        states={states}
        cities={cities}
        types={types}
      />
      <ListContainer>
        {!!list && !!list.length > 0 ? (
          <ListGrid className="propertyItemList">
            {list.map((property) => (
              <PropertyItem
                key={property.slug}
                {...property}
                duration={duration}
              ></PropertyItem>
            ))}
          </ListGrid>
        ) : null}
        {isLoader ? (
          <ListGrid>
            {ListArray.map((item, i) => (
              <PropertyItemPlaceHolder key={`property${i + 1}`} />
            ))}
          </ListGrid>
        ) : null}
      </ListContainer>
    </Container>
  );
};

export default PropertyList;

/*

{!!list && !!list.length > 0 ? (
          <PropertyListContainer className="propertyItemList">
            {list.map((property, i) =>
              property.item.minDuration <= durationDays &&
              (loadElements || i < 6) ? (
                <PropertyItem
                  duration={duration}
                  key={property.item.slug}
                  {...property.item}
                />
              ) : null
            )}
          </PropertyListContainer>
        ) : null}
        {isLoader ? (
          <PropertyListContainer>
            {ListArray.map((item, i) => (
              <PropertyItemPlaceHolder key={`property${i + 1}`} />
            ))}
          </PropertyListContainer>
        ) : null}

        */
