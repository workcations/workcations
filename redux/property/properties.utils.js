export const GetDestinationOptions = (list) =>
  list && list.length
    ? list
        .map((property) => property.location.city.toLowerCase())
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        })
    : [];

export const GetStateOptions = (list) =>
  list && list.length
    ? list
        .map((property) => property.location.state.toLowerCase())
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        })
    : [];

export const GetTypeOptions = (list) =>
  list && list.length
    ? list
        .map((property) => property.type.toLowerCase())
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        })
    : [];

export const GetMinPrice = (list) =>
  list && list.length
    ? Math.min(...list.map((property) => Number(property.long)))
    : 0;

export const GetMaxPrice = (list) =>
  list && list.length
    ? Math.max(...list.map((property) => Number(property.long)))
    : 0;

export const FilterProperties = (
  propertyList,
  states,
  types,
  min,
  max,
  cities
) => {
  let filterByStatesAndCities = [];

  if (states.length > 0 && cities.length > 0) {
    filterByStatesAndCities = propertyList.filter(
      (property) =>
        states.indexOf(property.location.state.toLowerCase()) !== -1 ||
        cities.indexOf(property.location.city.toLowerCase()) !== -1
    );
  } else if (states.length > 0) {
    filterByStatesAndCities = propertyList.filter(
      (property) => states.indexOf(property.location.state.toLowerCase()) !== -1
    );
  } else if (cities.length > 0) {
    filterByStatesAndCities = propertyList.filter(
      (property) => cities.indexOf(property.location.city.toLowerCase()) !== -1
    );
  } else {
    filterByStatesAndCities = propertyList;
  }

  let filterByType = [];

  if (types.length > 0) {
    filterByType = filterByStatesAndCities.filter(
      (property) => types.indexOf(property.type.toLowerCase()) !== -1
    );
  } else {
    filterByType = filterByStatesAndCities;
  }

  let filterByMin = [];

  if (!!min && min !== "null") {
    filterByMin = filterByType.filter(
      (property) => Number(property.long) >= Number(min)
    );
  } else {
    filterByMin = filterByType;
  }

  let filterByMax = [];

  if (max && max !== "null") {
    filterByMax = filterByMin.filter(
      (property) => Number(property.long) <= Number(max)
    );
  } else {
    filterByMax = filterByMin;
  }

  return filterByMax;
};

export const getPropertiesList = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const url =
    "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/properties";

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};
