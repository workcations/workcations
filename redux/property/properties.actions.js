import { PropertiesActionTypes } from "./properties.action-types";

export const initializeDestinationList = () => ({
  type: PropertiesActionTypes.INITIALIZE_DESTINATION_LIST,
});

export const setSelectedDestinationList = (list) => ({
  type: PropertiesActionTypes.SET_SELECTED_DESTINATION_LIST,
  payload: list,
});

export const initializeStateList = () => ({
  type: PropertiesActionTypes.INITIALIZE_STATE_LIST,
});

export const setSelectedStateList = (list) => ({
  type: PropertiesActionTypes.SET_SELECTED_STATE_LIST,
  payload: list,
});

export const initializeTypeList = () => ({
  type: PropertiesActionTypes.INITIALIZE_TYPE_LIST,
});

export const setSelectedTypeList = (list) => ({
  type: PropertiesActionTypes.SET_SELECTED_TYPE_LIST,
  payload: list,
});

export const initializeMinPrice = () => ({
  type: PropertiesActionTypes.INITIALIZE_MIN_PRICE,
});

export const setSelectedMinPrice = (price) => ({
  type: PropertiesActionTypes.SET_SELECTED_MIN_PRICE,
  payload: price,
});

export const initializeMaxPrice = () => ({
  type: PropertiesActionTypes.INITIALIZE_MAX_PRICE,
});

export const setSelectedMaxPrice = (price) => ({
  type: PropertiesActionTypes.SET_SELECTED_MAX_PRICE,
  payload: price,
});

export const setDuration = (duration) => ({
  type: PropertiesActionTypes.SET_DURATION,
  payload: duration,
});

export const setPropertyList = () => ({
  type: PropertiesActionTypes.SET_PROPERTY_LIST,
});

export const filterProperties = () => ({
  type: PropertiesActionTypes.FILTER_PROPERTIES,
});

export const showBookingPopup = () => ({
  type: PropertiesActionTypes.SHOW_BOOKING_POPUP,
});

export const hideBookingPopup = () => ({
  type: PropertiesActionTypes.HIDE_BOOKING_POPUP,
});

export const setPropertyListStart = () => ({
  type: PropertiesActionTypes.SET_PROPERTY_LIST_START,
});

export const setPropertyListSuccess = (properties) => ({
  type: PropertiesActionTypes.SET_PROPERTY_LIST_SUCCESS,
  payload: properties,
});

export const setPropertyListFailure = (error) => ({
  type: PropertiesActionTypes.SET_PROPERTY_LIST_FAILURE,
  payload: error,
});

export const resetFilters = () => ({
  type: PropertiesActionTypes.RESET_FILTER,
});
