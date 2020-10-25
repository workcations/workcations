import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
} from "./property-list-search.style";

const ListArray = new Array(6).fill(true);

const PropertyListSearch = ({ list, loadElements, pattern }) => {
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
      {propertyList.length > 0 ? (
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
                  Please try a different search <br /> or <br /> Check Out all
                  of our properties below
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
      ) : (
        <PropertyListContainer>
          {ListArray.map((item, i) => (
            <PropertyItemPlaceHolder key={`property${i + 1}`} />
          ))}
        </PropertyListContainer>
      )}
    </Container>
  );
};

export default PropertyListSearch;

/*

 {filteredProperties.length === 0 &&
            filteredStates.length === 0 &&
            filteredTypes.length === 0 &&
            filteredCities.length === 0 &&
            !filteredMinPrice &&
            !filteredMaxPrice ? (
              propertyList.map((property, i) =>
                property.visibility === "TRUE" && (loadElements || i < 6) ? (
                  <PropertyItem key={property.slug} {...property} />
                ) : null
              )
            ) : filteredProperties.length === 0 ? (
              <Fragment>
                {
  
                <NoResult>
                Sorry! We don't have any properties that match your choices
                <span>See all of our properties below</span>
              </NoResult>
              
              
              }
              {propertyList.map((property, i) =>
                property.visibility === "TRUE" && (loadElements || i < 6) ? (
                  <PropertyItem key={property.slug} {...property} />
                ) : null
              )}
            </Fragment>
          ) : (
            filteredProperties.map((property, i) =>
              property.visibility === "TRUE" && (loadElements || i < 6) ? (
                <PropertyItem key={property.slug} {...property} />
              ) : null
            )
          )}  */

/*




          <SearchContainer onSubmit={searchFunction}>
        <Search
          type="search"
          value={searchQuery}
          placeholder={placeholderText}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          searchError={searchError}
        />
        <Button type="submit" value="Search" />
      </SearchContainer>

      */
