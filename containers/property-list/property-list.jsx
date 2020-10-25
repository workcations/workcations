import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import {
  selectPropertyList,
  selectFilteredProperties,
  selectSelectedStateList,
  selectSelectedTypeList,
  selectSelectedMinPrice,
  selectSelectedMaxPrice,
  selectSelectedDestinationList,
} from "../../redux/property/properties.selectors";

import PropertyItem from "../../components/property-item/property-item";
import PropertyItemPlaceHolder from "../../components/property-item-placeholder/property-item-placeholder";

import {
  PropertyListContainer,
  Duration,
  DurationWrapper,
  DurationItem,
  Container,
  NoResult,
  FilterMobile,
  FilterItem,
} from "./property-list.style";

const ListArray = new Array(6).fill(true);

const PropertyList = ({ loadElements, cities, states, types, min, max }) => {
  let queryLink = "?";

  if (states) {
    queryLink += "&states=" + states;
  }

  if (cities) {
    queryLink += "&cities=" + cities;
  }

  if (types) {
    queryLink += "&types=" + types;
  }

  if (min) {
    queryLink += "&min=" + min;
  }

  if (max) {
    queryLink += "&max=" + max;
  }

  const propertyList = useSelector(selectPropertyList);
  const filteredProperties = useSelector(selectFilteredProperties);
  const filteredStates = useSelector(selectSelectedStateList);
  const filteredTypes = useSelector(selectSelectedTypeList);
  const filteredMinPrice = useSelector(selectSelectedMinPrice);
  const filteredMaxPrice = useSelector(selectSelectedMaxPrice);
  const filteredCities = useSelector(selectSelectedDestinationList);

  const [duration, setDuration] = useState("week");
  const [durationActive, setDurationActive] = useState([false, true, false]);

  useEffect(() => {
    duration === "short"
      ? setDurationActive([true, false, false])
      : duration === "week"
      ? setDurationActive([false, true, false])
      : setDurationActive([false, false, true]);
  }, [duration]);

  const [durationDays, setDurationDays] = useState(7);

  useEffect(() => {
    duration === "short"
      ? setDurationDays(6)
      : duration === "week"
      ? setDurationDays(20)
      : setDurationDays(21);
  }, [duration]);

  return (
    <Container>
      <Duration>
        <DurationWrapper>
          <DurationItem
            isActive={durationActive[0]}
            onClick={() => {
              if (duration !== "short") {
                setDuration("short");
              }
            }}
          >
            Short Stay<span>(1-6 days)</span>
          </DurationItem>
          <DurationItem
            isActive={durationActive[1]}
            onClick={() => {
              if (duration !== "week") {
                setDuration("week");
              }
            }}
          >
            Weekly Stay<span>(7-20 days)</span>
          </DurationItem>
          <DurationItem
            isActive={durationActive[2]}
            onClick={() => {
              if (duration !== "month") {
                setDuration("month");
              }
            }}
          >
            Monthly Stay<span>(20+ days)</span>
          </DurationItem>
        </DurationWrapper>
      </Duration>
      <PropertyListContainer>
        {propertyList.length > 0 ? (
          <Fragment>
            {filteredProperties.length === 0 &&
            filteredStates.length === 0 &&
            filteredTypes.length === 0 &&
            filteredCities.length === 0 &&
            !filteredMinPrice &&
            !filteredMaxPrice ? (
              propertyList.map((property, i) =>
                property.visibility === "TRUE" &&
                property.minDuration <= durationDays &&
                (loadElements || i < 6) ? (
                  <PropertyItem
                    duration={duration}
                    key={property.slug}
                    {...property}
                  />
                ) : null
              )
            ) : filteredProperties.length === 0 ? (
              <Fragment>
                {/*
  
                <NoResult>
                Sorry! We don't have any properties that match your choices
                <span>See all of our properties below</span>
              </NoResult>
              
              
              */}
                {propertyList.map((property, i) =>
                  property.visibility === "TRUE" &&
                  property.minDuration <= durationDays &&
                  (loadElements || i < 6) ? (
                    <PropertyItem
                      duration={duration}
                      key={property.slug}
                      {...property}
                    />
                  ) : null
                )}
              </Fragment>
            ) : (
              filteredProperties.map((property, i) =>
                property.visibility === "TRUE" &&
                property.minDuration <= durationDays &&
                (loadElements || i < 6) ? (
                  <PropertyItem
                    duration={duration}
                    key={property.slug}
                    {...property}
                  />
                ) : null
              )
            )}
          </Fragment>
        ) : (
          <Fragment>
            {ListArray.map((item, i) => (
              <PropertyItemPlaceHolder key={`property${i + 1}`} />
            ))}
          </Fragment>
        )}
      </PropertyListContainer>
      <FilterMobile>
        <Link href={`/filters/type${queryLink}`} passHref>
          <FilterItem>
            <img src="/type.svg" alt="Property Type" />
          </FilterItem>
        </Link>
        <Link href={`/filters/price${queryLink}`} passHref>
          <FilterItem>
            <img src="/price.svg" alt="Property Type" />
          </FilterItem>
        </Link>
        <Link href={`/filters/states${queryLink}`} passHref>
          <FilterItem>
            <img src="/states.svg" alt="Property Type" />
          </FilterItem>
        </Link>
      </FilterMobile>
    </Container>
  );
};

export default PropertyList;
