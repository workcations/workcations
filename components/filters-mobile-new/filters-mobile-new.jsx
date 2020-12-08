import React, { useEffect, useState, Fragment } from "react";
import Nouislider from "nouislider-react";
import Link from "next/link";

import {
  Container,
  TopContainer,
  FiltersContainer,
  FilterItem,
  FilterItemBack,
  ValuesContainer,
  ValuesSubContainer,
  Values,
  PriceContainer,
  PriceItem,
  StatesContainer,
  StatesItem,
  StatesTitle,
  StatesImageContainer,
  StatesFlex,
  CitiesItem,
  CitiesTitle,
  CitiesImageContainer,
  TypeContainer,
  TypeItem,
  TypeTitle,
  TypeImageContainer,
  AmenitiesContainer,
  Amenities,
  ApplyFilter,
} from "./filters-mobile-new.style";
import { set } from "react-ga";

const FiltersMobile = ({
  queryLink,
  propertiesData,
  properties,
  statesArray,
  featuresArray,
  typesArray,
  pricing,
  pricingCategories,
  pricingDaily,
  pricingWeekly,
  pricingMonthly,
}) => {
  const { states, cities, types, min, max } = queryLink;

  const [statesLink, setStatesLink] = useState(
    !!states ? states.split("-") : []
  );
  const [citiesLink, setCitiesLink] = useState(
    !!cities ? cities.split("-") : []
  );
  const [typesLink, setTypesLink] = useState(!!types ? types.split("-") : []);
  const [minLink, setMinLink] = useState(!!min ? Number(min) : -1);
  const [maxLink, setMaxLink] = useState(!!max ? Number(max) : -1);

  useEffect(() => {
    setStatesLink(!!states ? states.split("-") : []);
    setCitiesLink(!!cities ? cities.split("-") : []);
    setTypesLink(!!types ? types.split("-") : []);
    setMinLink(!!min ? Number(min) : -1);
    setMaxLink(!!max ? Number(max) : -1);
  }, [queryLink]);

  const [active, setActive] = useState([true, false, false, false]);
  const [activePosition, setActivePosition] = useState(0);

  useEffect(() => {
    setActivePosition(active.indexOf(true));
  }, [active]);

  const [duration, setDuration] = useState([true, false, false]);

  const [propertiesSourceData, setPropertiesSourceData] = useState(
    pricingDaily
  );

  const [pricingLabels, setPricingLabels] = useState(
    pricingCategories.map((item) => false)
  );

  useEffect(() => {
    const newSourceData = duration[0]
      ? pricingDaily.map((item) => item)
      : duration[1]
      ? pricingWeekly.map((item) => item)
      : pricingMonthly.map((item) => item);

    setPropertiesSourceData(newSourceData);
  }, [duration]);

  useEffect(() => {
    const newPricingLabels = pricingCategories.map((item) =>
      (minLink >= item.min && minLink <= item.max) ||
      (maxLink >= item.min && maxLink <= item.max)
        ? true
        : false
    );

    const firstTrueIndex = newPricingLabels.indexOf(true);
    const lastTrueIndex = newPricingLabels.lastIndexOf(true);

    const effectivePricingLabels = newPricingLabels.map((item, i) =>
      i >= firstTrueIndex && i <= lastTrueIndex ? true : false
    );

    setPricingLabels(effectivePricingLabels);
  }, [minLink, maxLink]);

  const togglePricingLabel = (index) => {
    const newPricingLabels = pricingLabels.map((item, i) =>
      i === index ? !item : item
    );

    const firstTrueIndex = newPricingLabels.indexOf(true);
    const lastTrueIndex = newPricingLabels.lastIndexOf(true);

    const effectivePricingLabels = newPricingLabels.map((item, i) =>
      i >= firstTrueIndex && i <= lastTrueIndex ? true : false
    );

    setPricingLabels(effectivePricingLabels);
  };

  const [activeAmenities, setActiveAmenities] = useState(
    new Array(featuresArray.length).fill(false)
  );

  const selectAmenity = (index) => {
    setActiveAmenities(
      activeAmenities.map((item, i) => (i === index ? !item : item))
    );
  };

  const [statesActive, setStatesActive] = useState(
    statesArray.map((item) => false)
  );

  const [citiesActive, setCitiesActive] = useState(
    statesArray.map((item) => item.cities.map((subItem) => false))
  );

  const [statesOpen, setStatesOpen] = useState(
    statesArray.map((item) => false)
  );

  const toggleStateActive = (index) => {
    const newStatesActive = statesActive.map((item, i) =>
      i === index ? !item : item
    );

    setStatesActive(newStatesActive);
  };

  const toggleCityActive = (index1, index2) => {
    const newCitiesActive = citiesActive.map((item, i) =>
      i === index1
        ? item.map((subItem, j) => (j === index2 ? !subItem : subItem))
        : item
    );

    setCitiesActive(newCitiesActive);
  };

  const toggleStateOpen = (index) => {
    const newStatesOpen = statesOpen.map((item, i) =>
      i === index ? !item : item
    );

    setStatesOpen(newStatesOpen);
  };

  const [typesActive, setTypesActive] = useState(
    typesArray.map((item) => false)
  );

  const toggleTypesActive = (index) => {
    const newTypesActive = typesActive.map((item, i) =>
      i === index ? !item : item
    );

    setTypesActive(newTypesActive);
  };

  useEffect(() => {
    const newTypesActive = typesArray.map((item) =>
      typesLink.indexOf(item.title) !== -1 ? true : false
    );

    setTypesActive(newTypesActive);
  }, [typesLink]);

  const [minMaxPrice, setMinMaxPrice] = useState({
    min: pricingCategories[0].min,
    max: pricingCategories[pricingCategories.length - 1].max,
  });

  useEffect(() => {
    const minIndex = pricingLabels.indexOf(true);
    const maxIndex = pricingLabels.lastIndexOf(true);

    setMinMaxPrice({
      min:
        minIndex === -1
          ? pricingCategories[0].min
          : pricingCategories[minIndex].min,
      max:
        minIndex === -1
          ? pricingCategories[pricingCategories.length - 1].max
          : pricingCategories[maxIndex].max,
    });
  }, [pricingLabels]);

  const [statesFilterData, setStatesFilterData] = useState({
    statesActiveCount: 0,
    citiesActiveCount: 0,
    data: statesArray.map((item) => {
      return {
        title: item.title,
        count: item.count,
        isActive: false,
        cityActiveCount: 0,
        cities: item.cities.map((subItem) => {
          return {
            title: subItem.title,
            isActive: false,
          };
        }),
      };
    }),
  });

  useEffect(() => {
    let newStatesFilterData;

    let statesActiveCount = 0;
    let citiesActiveCount = 0;

    statesArray.map((item, i) => {
      if (statesActive[i]) {
        statesActiveCount++;
      }

      item.cities.map((subItem, j) => {
        if (citiesActive[i][j]) {
          citiesActiveCount++;
        }
      });
    });

    if (statesActiveCount === 0 && citiesActiveCount === 0) {
      newStatesFilterData = {
        statesActiveCount: 0,
        citiesActiveCount: 0,
        data: statesArray.map((item) => {
          return {
            title: item.title,
            count: item.count,
            isActive: false,
            cityActiveCount: 0,
            cities: item.cities.map((subItem) => {
              return {
                title: subItem.title,
                isActive: false,
              };
            }),
          };
        }),
      };
    } else if (citiesActiveCount === 0) {
      newStatesFilterData = {
        statesActiveCount: statesActiveCount,
        citiesActiveCount: 0,
        data: statesArray.map((item, i) => {
          return {
            title: item.title,
            count: item.count,
            isActive: statesActive[i],
            cityActiveCount: 0,
            cities: item.cities.map((subItem) => {
              return {
                title: subItem.title,
                isActive: false,
              };
            }),
          };
        }),
      };
    } else {
      const newActiveStates = statesArray.map((item, i) =>
        item.cities.filter((subItem, j) => citiesActive[i][j]).length ===
        item.count
          ? true
          : item.cities.filter((subItem, j) => citiesActive[i][j]).length ===
              0 && statesActive[i]
          ? true
          : false
      );

      const newActiveCities = statesArray.map((item, i) =>
        item.cities.map((subItem, j) =>
          newActiveStates[i] ? false : citiesActive[i][j]
        )
      );

      newStatesFilterData = {
        statesActiveCount: newActiveStates.length,
        citiesActiveCount: newActiveCities.length,
        data: statesArray.map((item, i) => {
          return {
            title: item.title,
            count: item.count,
            isActive: newActiveStates[i],
            cityActiveCount: newActiveStates[i]
              ? 0
              : item.cities.filter((subItem, j) => newActiveCities[i][j])
                  .length,
            cities: item.cities.map((subItem, j) => {
              return {
                title: subItem.title,
                isActive: newActiveStates[i] ? false : newActiveCities[i][j],
              };
            }),
          };
        }),
      };
    }

    setStatesFilterData(newStatesFilterData);
  }, [statesActive, citiesActive]);

  useEffect(() => {
    let newStatesActive = statesArray.map((item) =>
      statesLink.indexOf(item.title) !== -1 ? true : false
    );

    setStatesActive(newStatesActive);
  }, [statesLink]);

  useEffect(() => {
    let newCitiesActive = statesArray.map((item) =>
      item.cities.map((subItem) =>
        citiesLink.indexOf(subItem.title) !== -1 ? true : false
      )
    );

    setCitiesActive(newCitiesActive);
  }, [citiesLink]);

  let allProperties = [];

  for (let i = 0; i < propertiesSourceData.length; i++) {
    for (let j = 0; j < propertiesSourceData[i].length; j++) {
      allProperties.push(propertiesSourceData[i][j]);
    }
  }

  propertiesSourceData.map((item) =>
    item.map((subItem) => allProperties.push(subItem))
  );

  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [priceFilteredProperties, setPriceFilteredProperties] = useState(
    allProperties
  );
  const [statesFilteredProperties, setStatesFilteredProperties] = useState(
    allProperties
  );
  const [typesFilteredProperties, setTypesFilteredProperties] = useState(
    allProperties
  );
  const [
    amenitiesFilteredProperties,
    setAmenitiesFilteredProperties,
  ] = useState(allProperties);

  useEffect(() => {
    let arrayOfProperties = [];
    let priceCountProperties = [];
    let statesCountProperties = [];
    let typesCountProperties = [];
    let amenitiesCountProperties = [];

    for (let i = 0; i < propertiesSourceData.length; i++) {
      for (let j = 0; j < propertiesSourceData[i].length; j++) {
        priceCountProperties.push(propertiesSourceData[i][j]);

        if (
          pricingCategories[i].min >= minMaxPrice.min &&
          pricingCategories[i].max <= minMaxPrice.max
        ) {
          arrayOfProperties.push(propertiesSourceData[i][j]);
          statesCountProperties.push(propertiesSourceData[i][j]);
          typesCountProperties.push(propertiesSourceData[i][j]);
          amenitiesCountProperties.push(propertiesSourceData[i][j]);
        }
      }
    }

    if (
      statesFilterData.statesActiveCount === 0 &&
      statesFilterData.citiesActiveCount === 0
    ) {
      arrayOfProperties = arrayOfProperties;
    } else if (statesFilterData.citiesActiveCount === 0) {
      const activeStates = statesArray
        .filter((item, i) => statesFilterData.data[i].isActive)
        .map((item) => item.title);

      arrayOfProperties = arrayOfProperties.filter(
        (item) => activeStates.indexOf(item.location.state) !== -1
      );

      priceCountProperties = priceCountProperties.filter(
        (item) => activeStates.indexOf(item.location.state) !== -1
      );
      typesCountProperties = typesCountProperties.filter(
        (item) => activeStates.indexOf(item.location.state) !== -1
      );
      amenitiesCountProperties = amenitiesCountProperties.filter(
        (item) => activeStates.indexOf(item.location.state) !== -1
      );
    } else {
      const activeStates = statesArray
        .filter((item, i) => statesFilterData.data[i].isActive)
        .map((item) => item.title);

      let activeCities = [];

      statesFilterData.data
        .filter((item, i) => !item.isActive)
        .map((item) =>
          item.cities.map((subItem) => {
            if (subItem.isActive) {
              activeCities.push(subItem.title);
            }
          })
        );

      arrayOfProperties = arrayOfProperties.filter(
        (item) =>
          activeStates.indexOf(item.location.state) !== -1 ||
          activeCities.indexOf(item.location.city) !== -1
      );

      priceCountProperties = priceCountProperties.filter(
        (item) =>
          activeStates.indexOf(item.location.state) !== -1 ||
          activeCities.indexOf(item.location.city) !== -1
      );
      typesCountProperties = typesCountProperties.filter(
        (item) =>
          activeStates.indexOf(item.location.state) !== -1 ||
          activeCities.indexOf(item.location.city) !== -1
      );
      amenitiesCountProperties = amenitiesCountProperties.filter(
        (item) =>
          activeStates.indexOf(item.location.state) !== -1 ||
          activeCities.indexOf(item.location.city) !== -1
      );
    }

    if (
      typesActive.filter((item) => item).length === 0 ||
      typesActive.filter((item) => !item).length === 0
    ) {
      arrayOfProperties = arrayOfProperties;
    } else {
      const activeTypes = typesArray
        .filter((item, i) => typesActive[i])
        .map((item) => item.title);

      arrayOfProperties = arrayOfProperties.filter(
        (item) => activeTypes.indexOf(item.type) !== -1
      );

      priceCountProperties = priceCountProperties.filter(
        (item) => activeTypes.indexOf(item.type) !== -1
      );
      statesCountProperties = statesCountProperties.filter(
        (item) => activeTypes.indexOf(item.type) !== -1
      );
      amenitiesCountProperties = amenitiesCountProperties.filter(
        (item) => activeTypes.indexOf(item.type) !== -1
      );
    }

    if (
      activeAmenities.filter((item) => item).length === 0 ||
      activeAmenities.filter((item) => !item).length === 0
    ) {
      arrayOfProperties = arrayOfProperties;
    } else {
      const activeAmenitiesItems = featuresArray
        .filter((item, i) => activeAmenities[i])
        .map((item) => item.title);

      arrayOfProperties = arrayOfProperties.filter((item) =>
        activeAmenitiesItems.every(
          (subItem) => item.featuresAll.indexOf(subItem) !== -1
        )
      );

      priceCountProperties = priceCountProperties.filter((item) =>
        activeAmenitiesItems.every(
          (subItem) => item.featuresAll.indexOf(subItem) !== -1
        )
      );
      statesCountProperties = statesCountProperties.filter((item) =>
        activeAmenitiesItems.every(
          (subItem) => item.featuresAll.indexOf(subItem) !== -1
        )
      );
      typesCountProperties = typesCountProperties.filter((item) =>
        activeAmenitiesItems.every(
          (subItem) => item.featuresAll.indexOf(subItem) !== -1
        )
      );
    }

    setFilteredProperties(arrayOfProperties);

    setPriceFilteredProperties(priceCountProperties);
    setStatesFilteredProperties(statesCountProperties);
    setTypesFilteredProperties(typesCountProperties);
    setAmenitiesFilteredProperties(amenitiesCountProperties);
  }, [
    propertiesSourceData,
    minMaxPrice,
    statesFilterData,
    typesActive,
    activeAmenities,
  ]);

  const [filterLink, setFilterLink] = useState("");

  useEffect(() => {
    let statesText = statesArray
      .filter((item, i) => statesActive[i])
      .map((item) => item.title)
      .join("-");

    let citiesTextArray = [];

    for (let i = 0; i < statesArray.length; i++) {
      for (let j = 0; j < statesArray[i].cities.length; j++) {
        if (citiesActive[i][j]) {
          citiesTextArray.push(statesArray[i].cities[j].title);
        }
      }
    }

    let citiesText = citiesTextArray.join("-");

    let typesText = typesArray
      .filter((item, i) => typesActive[i])
      .map((item) => item.title)
      .join("-");

    let minText = `${minMaxPrice.min}`;
    let maxText = `${minMaxPrice.max}`;

    statesText = statesText.length > 0 ? `states=${statesText}` : statesText;
    citiesText = citiesText.length > 0 ? `cities=${citiesText}` : citiesText;
    typesText = typesText.length > 0 ? `types=${typesText}` : typesText;
    minText = minText.length > 0 ? `min=${minText}` : minText;
    maxText = maxText.length > 0 ? `max=${maxText}` : maxText;

    let queriesList = [];

    if (statesText.length > 0) {
      queriesList.push(statesText);
    }

    if (citiesText.length > 0) {
      queriesList.push(citiesText);
    }

    if (typesText.length > 0) {
      queriesList.push(typesText);
    }

    if (minText.length > 0) {
      queriesList.push(minText);
    }

    if (maxText.length > 0) {
      queriesList.push(maxText);
    }

    const queriesText = encodeURI(queriesList.join("&"));

    setFilterLink(queriesText);
  }, [statesActive, citiesActive, typesActive, minMaxPrice]);

  return (
    <Container>
      <TopContainer>Filters</TopContainer>
      <FiltersContainer>
        <FilterItemBack activePosition={activePosition} />
        <FilterItem
          isActive={active[0]}
          onClick={() => {
            setActive([true, false, false, false]);
          }}
        >
          <span>Pricing</span>
        </FilterItem>
        <FilterItem
          isActive={active[1]}
          onClick={() => {
            setActive([false, true, false, false]);
          }}
        >
          <span>States & Cities</span>
        </FilterItem>
        <FilterItem
          isActive={active[2]}
          onClick={() => {
            setActive([false, false, true, false]);
          }}
        >
          <span>Property Type</span>
        </FilterItem>
        {/*

          <FilterItem
          isActive={active[3]}
          onClick={() => {
            setActive([false, false, false, true]);
          }}
        >
          <span>Amenities</span>
        </FilterItem>

          */}
      </FiltersContainer>
      <ValuesContainer>
        <ValuesSubContainer>
          {active[0] ? (
            <Values>
              <PriceContainer>
                {pricingCategories.map((item, i) => (
                  <PriceItem
                    key={`pricing item ${i + 1}`}
                    isActive={pricingLabels[i]}
                    onClick={() => {
                      togglePricingLabel(i);
                    }}
                  >
                    <img src="./check-tick.svg" alt="tick-mark" />
                    {
                      pricingCategories[i].min
                        .toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })
                        .split(".")[0]
                    }
                    <Fragment>
                      {i !== pricingCategories.length - 1
                        ? " to " +
                          pricingCategories[i].max
                            .toLocaleString("en-IN", {
                              maximumFractionDigits: 2,
                              style: "currency",
                              currency: "INR",
                            })
                            .split(".")[0]
                        : " +"}
                    </Fragment>{" "}
                    (
                    {
                      priceFilteredProperties.filter(
                        (item) => propertiesSourceData[i].indexOf(item) !== -1
                      ).length
                    }
                    )
                  </PriceItem>
                ))}
              </PriceContainer>
            </Values>
          ) : active[1] ? (
            <Values>
              <StatesContainer>
                {statesArray.map((item, i) => (
                  <StatesItem isActive={statesActive[i]}>
                    <StatesTitle isActive={statesActive[i]}>
                      <span
                        onClick={() => {
                          toggleStateActive(i);
                        }}
                      >
                        {item.title} (
                        {
                          statesFilteredProperties.filter(
                            (subItem) => subItem.location.state === item.title
                          ).length
                        }
                        )
                      </span>
                      <StatesImageContainer
                        isActive={statesOpen[i]}
                        onClick={() => {
                          toggleStateOpen(i);
                        }}
                      >
                        <img src="./drop-down.svg" />
                        <img src="./drop-up.svg" />
                      </StatesImageContainer>
                    </StatesTitle>
                    <StatesFlex isActive={statesOpen[i]}>
                      {item.cities.map((subItem, j) => (
                        <CitiesItem
                          onClick={() => {
                            toggleCityActive(i, j);
                          }}
                          isActive={citiesActive[i][j]}
                        >
                          <CitiesTitle isActive={citiesActive[i][j]}>
                            <CitiesImageContainer isActive={citiesActive[i][j]}>
                              <img src="./check-minus.svg" alt="not selected" />
                              <img src="./check-tick.svg" alt="selected" />
                            </CitiesImageContainer>
                            {subItem.title} (
                            {
                              statesFilteredProperties.filter(
                                (subSubItem) =>
                                  subSubItem.location.city === subItem.title
                              ).length
                            }
                            )
                          </CitiesTitle>
                        </CitiesItem>
                      ))}
                    </StatesFlex>
                  </StatesItem>
                ))}
              </StatesContainer>
            </Values>
          ) : active[2] ? (
            <Values>
              <TypeContainer>
                {typesArray.map((item, i) => (
                  <TypeItem
                    isActive={typesActive[i]}
                    onClick={() => {
                      toggleTypesActive(i);
                    }}
                  >
                    <TypeTitle isActive={typesActive[i]}>
                      <TypeImageContainer isActive={typesActive[i]}>
                        <img src="./check-minus.svg" alt="not selected" />
                        <img src="./check-tick.svg" alt="selected" />
                      </TypeImageContainer>
                      {item.title} (
                      {
                        typesFilteredProperties.filter(
                          (subItem) => subItem.type === item.title
                        ).length
                      }
                      )
                    </TypeTitle>
                  </TypeItem>
                ))}
              </TypeContainer>
            </Values>
          ) : active[3] ? (
            <Values>
              <AmenitiesContainer>
                {featuresArray.map((item, i) => (
                  <Amenities
                    isActive={activeAmenities[i]}
                    onClick={() => {
                      selectAmenity(i);
                    }}
                  >
                    {item.title} (
                    {
                      amenitiesFilteredProperties.filter(
                        (subItem) =>
                          subItem.featuresAll.indexOf(item.title) != -1
                      ).length
                    }
                    )
                  </Amenities>
                ))}
              </AmenitiesContainer>
            </Values>
          ) : null}
        </ValuesSubContainer>
      </ValuesContainer>
      <ApplyFilter>
        <div>
          <span>
            <Link href={`/properties?${filterLink}`} passHref>
              <a>Show {filteredProperties.length} properties</a>
            </Link>
          </span>
        </div>
      </ApplyFilter>
    </Container>
  );
};

export default FiltersMobile;
