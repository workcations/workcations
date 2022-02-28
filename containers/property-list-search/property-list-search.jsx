import React, { Fragment, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
//import InfiniteScroll from "react-infinite-scroll-component";

import { selectPropertyList } from "../../redux/property/properties.selectors";

import PropertyItem from "../../components/property-item/property-item";
import PropertyItemPlaceHolder from "../../components/property-item-placeholder/property-item-placeholder";

const updateCost = (cost, multiplier) =>
  Math.ceil((cost * multiplier) / 50) * 50;

const updatePrice = (property, multiplier) => {
  const { ultrashort, short, normal, long, ultralong, monthly } = property;

  return {
    ...property,
    ultrashort: updateCost(ultrashort, multiplier),
    short: updateCost(short, multiplier),
    normal: updateCost(normal, multiplier),
    long: updateCost(long, multiplier),
    ultralong: updateCost(ultralong, multiplier),
    monthly: updateCost(monthly, multiplier),
  };
};

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
} from "./property-list-search.style";

const ListArray = new Array(6).fill(true);

const PropertyListSearch = ({
  list,
  loadElements,
  pattern,
  pagesList,
  setPagesList,
  isLoader,
}) => {
  const propertyList = useSelector(selectPropertyList);
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(pattern);
  const [searchError, setSearchError] = useState(false);
  const [placeholderText, setPlaceholder] = useState("Find Your Workcation...");

  const searchFunction = (e) => {
    e.preventDefault();

    if (searchQuery.length === 0) {
      setPlaceholder("Search Field can't be empty");
      setSearchError(true);
    } else {
      router.replace(`/search?search=${encodeURI(searchQuery)}`);
    }
  };

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
            }

            setPagesList([...newPagesList]);
          }
        }
      }
    }
  };

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
        {!!list && !!list.length > 0 ? (
          <PropertyListContainer className="propertyItemList">
            {list
              .map((property) => {
                const { item } = property;

                return {
                  ...property,
                  item: updatePrice(item, 1.5),
                };
              })
              .map((property, i) =>
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
      </Fragment>
    </Container>
  );
};

export default PropertyListSearch;

/*

<PropertyListContainer>
          {ListArray.map((item, i) => (
            <PropertyItemPlaceHolder key={`property${i + 1}`} />
          ))}
        </PropertyListContainer>

        */

/*

        <Fragment>
        {list.length > 0 ? (
          <PropertyListContainer>
            {list.map((property, i) =>
              property.item.visibility === "TRUE" &&
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
        ) : (
          <Fragment>
            <NoResult style={{ textAlign: "center" }}>
              Sorry! We don't have any properties that match your search
              <span>
                Please try a different search <br /> or <br /> Check Out all of
                our properties below
              </span>
            </NoResult>
            <PropertyListContainer>
              {propertyList.map((property, i) =>
                property.visibility === "TRUE" && (loadElements || i < 6) ? (
                  <PropertyItem
                    duration={duration}
                    key={property.slug}
                    {...property}
                  />
                ) : null
              )}
            </PropertyListContainer>
          </Fragment>
        )}
      </Fragment>

      

      */
