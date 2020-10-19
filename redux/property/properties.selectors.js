import { createSelector } from "reselect";

const selectProperties = (state) => state.properties;

export const selectDestinationList = createSelector(
  [selectProperties],
  (properties) => properties.destinationList
);

export const selectSelectedDestinationList = createSelector(
  [selectProperties],
  (properties) => properties.selectedDestinationList
);

export const selectStateList = createSelector(
  [selectProperties],
  (properties) => properties.stateList
);

export const selectSelectedStateList = createSelector(
  [selectProperties],
  (properties) => properties.selectedStateList
);

export const selectTypeList = createSelector(
  [selectProperties],
  (properties) => properties.typeList
);

export const selectSelectedTypeList = createSelector(
  [selectProperties],
  (properties) => properties.selectedTypeList
);

export const selectMinPrice = createSelector(
  [selectProperties],
  (properties) => properties.minPrice
);

export const selectSelectedMinPrice = createSelector(
  [selectProperties],
  (properties) => properties.selectedMinPrice
);

export const selectMaxPrice = createSelector(
  [selectProperties],
  (properties) => properties.maxPrice
);

export const selectSelectedMaxPrice = createSelector(
  [selectProperties],
  (properties) => properties.selectedMaxPrice
);

export const selectDuration = createSelector(
  [selectProperties],
  (properties) => properties.duration
);

export const selectPropertyList = createSelector(
  [selectProperties],
  (properties) => properties.propertyList
);

export const selectFilteredProperties = createSelector(
  [selectProperties],
  (properties) => properties.filteredList
);

export const selectBookingPopup = createSelector(
  [selectProperties],
  (properties) => properties.bookingPopup
);
