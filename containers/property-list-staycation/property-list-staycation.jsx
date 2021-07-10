import React, { Fragment, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
//import InfiniteScroll from "react-infinite-scroll-component";

import { selectPropertyList } from "../../redux/property/properties.selectors";

import PropertyItem from "../../components/property-item/property-item";
import PropertyItemPlaceHolder from "../../components/property-item-placeholder/property-item-placeholder";

import {
  PropertyListContainer,
  Container,
  NoResult,
  SearchContainer,
  Search,
  Button,
  Duration,
  DurationWrapper,
  DurationItem,
} from "./property-list-staycation.style";

const ListArray = new Array(6).fill(true);

const PropertyList = ({ propertiesList }) => {
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
      <Fragment>
        <PropertyListContainer className="propertyItemList">
          {propertiesList.map((property, i) =>
            property.minDuration <= durationDays ? (
              <PropertyItem
                duration={duration}
                key={property.slug}
                {...property}
              />
            ) : null
          )}
        </PropertyListContainer>
      </Fragment>
    </Container>
  );
};

export default PropertyList;
