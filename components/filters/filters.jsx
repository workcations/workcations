import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nouislider from "nouislider-react";

import {
  initializeStateList,
  setSelectedStateList,
  initializeTypeList,
  setSelectedTypeList,
  initializeDestinationList,
  setSelectedDestinationList,
  initializeMinPrice,
  setSelectedMinPrice,
  initializeMaxPrice,
  setSelectedMaxPrice,
  filterProperties,
} from "../../redux/property/properties.actions";
import {
  selectStateList,
  selectSelectedStateList,
  selectTypeList,
  selectSelectedTypeList,
  selectDestinationList,
  selectSelectedDestinationList,
  selectMinPrice,
  selectSelectedMinPrice,
  selectMaxPrice,
  selectSelectedMaxPrice,
  selectPropertyList,
} from "../../redux/property/properties.selectors";

import { CheckBoxFilter } from "../checkbox/checkbox";

import FiltersPlaceHolder from "../filters-placeholder/filters-placeholder";

import {
  FiltersTopContainer,
  Headline,
  FiltersContainer,
  FilterWrapper,
  FilterTitle,
  PriceFilter,
  FilterList,
} from "./filters.style";

const Filters = ({
  citiesLink,
  statesLink,
  typesLink,
  minLink,
  maxLink,
  handleFilter,
}) => {
  const propertyList = useSelector(selectPropertyList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (propertyList && propertyList.length) {
      dispatch(initializeStateList());
      if (statesLink) {
        dispatch(setSelectedStateList(statesLink.split("-")));
      }

      dispatch(initializeTypeList());
      if (typesLink) {
        dispatch(setSelectedTypeList(typesLink.split("-")));
      }

      dispatch(initializeDestinationList());
      if (citiesLink) {
        dispatch(setSelectedDestinationList(citiesLink.split("-")));
      }

      dispatch(initializeMinPrice());
      if (minLink) {
        dispatch(setSelectedMinPrice(Number(minLink)));
      }

      dispatch(initializeMaxPrice());
      if (maxLink) {
        dispatch(setSelectedMaxPrice(Number(maxLink)));
      }
    }
  }, [dispatch, propertyList]);

  const states = useSelector(selectStateList);
  const types = useSelector(selectTypeList);
  const cities = useSelector(selectDestinationList);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const filteredStates = useSelector(selectSelectedStateList);
  const filteredTypes = useSelector(selectSelectedTypeList);
  const filteredCities = useSelector(selectSelectedDestinationList);
  const filteredMinPrice = useSelector(selectSelectedMinPrice);
  const filteredMaxPrice = useSelector(selectSelectedMaxPrice);

  const [selectedStates, setSelectedStates] = useState(filteredStates);
  const [selectedTypes, setSelectedTypes] = useState(filteredTypes);
  const [selectedCities, setSelectedCities] = useState(filteredCities);
  const [selectedMinPrice, setSelectedMinPriceLocal] = useState(
    filteredMinPrice
  );
  const [selectedMaxPrice, setSelectedMaxPriceLocal] = useState(
    filteredMaxPrice
  );
  const [range, setRange] = useState({ min: 0, max: 1000 });
  const [start, setStart] = useState([minPrice, maxPrice]);

  useEffect(() => {
    if (minPrice < maxPrice) {
      setRange({ min: minPrice, max: maxPrice });
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (selectedMinPrice && selectedMaxPrice) {
      setStart([selectedMinPrice, selectedMaxPrice]);
    } else if (selectedMinPrice) {
      setStart([selectedMinPrice, maxPrice]);
    } else if (selectedMaxPrice) {
      setStart([minPrice, selectedMaxPrice]);
    } else {
      setStart([minPrice, maxPrice]);
    }
  }, [selectedMinPrice, selectedMaxPrice, minPrice, maxPrice]);

  useEffect(() => {
    dispatch(setSelectedStateList(selectedStates));
  }, [dispatch, selectedStates]);

  useEffect(() => {
    dispatch(setSelectedTypeList(selectedTypes));
  }, [dispatch, selectedTypes]);

  useEffect(() => {
    dispatch(setSelectedDestinationList(selectedCities));
  }, [dispatch, selectedCities]);

  useEffect(() => {
    dispatch(setSelectedMinPrice(selectedMinPrice));
  }, [dispatch, selectedMinPrice]);

  useEffect(() => {
    dispatch(setSelectedMaxPrice(selectedMaxPrice));
  }, [dispatch, selectedMaxPrice]);

  useEffect(() => {
    if (statesLink) {
      setSelectedStates(statesLink.split("-"));
    }
  }, [statesLink]);

  useEffect(() => {
    if (typesLink) {
      setSelectedTypes(typesLink.split("-"));
    }
  }, [typesLink]);

  useEffect(() => {
    if (citiesLink) {
      setSelectedCities(citiesLink.split("-"));
    }
  }, [citiesLink]);

  useEffect(() => {
    if (minLink) {
      setSelectedMinPriceLocal(Number(minLink));
    }
  }, [minLink]);

  useEffect(() => {
    if (maxLink) {
      setSelectedMaxPriceLocal(Number(maxLink));
    }
  }, [maxLink]);

  useEffect(() => {
    dispatch(filterProperties());
    handleFilter(
      selectedStates,
      selectedCities,
      selectedMinPrice,
      selectedMaxPrice,
      selectedTypes
    );
  }, [
    dispatch,
    filteredStates,
    filteredTypes,
    filteredCities,
    filteredMinPrice,
    filteredMaxPrice,
  ]);

  const stateList = propertyList
    .filter((item) => item.visibility === "TRUE")
    .map((item) => item.location.state);

  const typeList = propertyList
    .filter((item) => item.visibility === "TRUE")
    .map((item) => item.type);

  let stateCount = new Array(states.length).fill(0);
  let typeCount = new Array(types.length).fill(0);

  states.forEach((state, i) => {
    stateList.forEach((item, j) => {
      if (item === state) {
        stateCount[i]++;
      }
    });
  });

  types.forEach((type, i) => {
    typeList.forEach((item, j) => {
      if (item === type) {
        typeCount[i]++;
      }
    });
  });

  return (
    <Fragment>
      {propertyList.length > 0 ? (
        <FiltersTopContainer>
          <Headline>
            find your <span>Workcation</span>
          </Headline>
          <FiltersContainer>
            <FilterWrapper>
              <FilterTitle>Pricing</FilterTitle>
              <PriceFilter>
                <Nouislider
                  range={range}
                  start={start}
                  step={100}
                  connect
                  tooltips
                  animate
                  margin={300}
                  onChange={(values) => {
                    setSelectedMinPriceLocal(Number(values[0]));
                    setSelectedMaxPriceLocal(Number(values[1]));
                  }}
                />
                <span>price per night</span>
              </PriceFilter>
            </FilterWrapper>
            <FilterWrapper>
              <FilterTitle>States</FilterTitle>
              <FilterList>
                {states.map((state, i) => (
                  <CheckBoxFilter
                    key={"state" + (i + 1)}
                    name={state}
                    label={state + "@" + stateCount[i]}
                    handleChange={() => {
                      let newSelectedStates = [];
                      if (selectedStates.indexOf(state) === -1) {
                        for (let i = 0; i < selectedStates.length; i++) {
                          newSelectedStates.push(selectedStates[i]);
                        }
                        newSelectedStates.push(state);
                      } else {
                        for (let i = 0; i < selectedStates.length; i++) {
                          if (state !== selectedStates[i]) {
                            newSelectedStates.push(selectedStates[i]);
                          }
                        }
                      }
                      setSelectedStates(newSelectedStates);
                    }}
                    checked={selectedStates.indexOf(state) !== -1}
                  />
                ))}
              </FilterList>
            </FilterWrapper>
            <FilterWrapper>
              <FilterTitle>Property Type</FilterTitle>
              <FilterList>
                {types.map((type, i) => (
                  <CheckBoxFilter
                    key={"type" + (i + 1)}
                    name={type}
                    label={type + "@" + typeCount[i]}
                    handleChange={() => {
                      let newSelectedTypes = [];
                      if (selectedTypes.indexOf(type) === -1) {
                        for (let i = 0; i < selectedTypes.length; i++) {
                          newSelectedTypes.push(selectedTypes[i]);
                        }
                        newSelectedTypes.push(type);
                      } else {
                        for (let i = 0; i < selectedTypes.length; i++) {
                          if (type !== selectedTypes[i]) {
                            newSelectedTypes.push(selectedTypes[i]);
                          }
                        }
                      }
                      setSelectedTypes(newSelectedTypes);
                    }}
                    checked={selectedTypes.indexOf(type) !== -1}
                  />
                ))}
              </FilterList>
            </FilterWrapper>
          </FiltersContainer>
        </FiltersTopContainer>
      ) : (
        <FiltersPlaceHolder />
      )}
    </Fragment>
  );
};

export default Filters;
