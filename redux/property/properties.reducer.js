import { PropertiesActionTypes } from "./properties.action-types";

import {
  GetDestinationOptions,
  FilterProperties,
  GetStateOptions,
  GetTypeOptions,
  GetMinPrice,
  GetMaxPrice,
} from "./properties.utils";

const INITIAL_STATE = {
  stateList: [],
  selectedStateList: [],
  typeList: [],
  selectedTypeList: [],
  minPrice: 0,
  selectedMinPrice: null,
  maxPrice: 0,
  selectedMaxPrice: null,
  destinationList: [],
  selectedDestinationList: [],
  duration: "long",
  propertyList: [],
  filteredList: [],
  bookingPopup: false,
};

const propertyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PropertiesActionTypes.INITIALIZE_STATE_LIST:
      return {
        ...state,
        stateList: GetStateOptions(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_STATE_LIST:
      return {
        ...state,
        selectedStateList: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_TYPE_LIST:
      return {
        ...state,
        typeList: GetTypeOptions(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_TYPE_LIST:
      return {
        ...state,
        selectedTypeList: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_MIN_PRICE:
      return {
        ...state,
        minPrice: GetMinPrice(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_MIN_PRICE:
      return {
        ...state,
        selectedMinPrice: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_MAX_PRICE:
      return {
        ...state,
        maxPrice: GetMaxPrice(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_MAX_PRICE:
      return {
        ...state,
        selectedMaxPrice: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_DESTINATION_LIST:
      return {
        ...state,
        destinationList: GetDestinationOptions(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_DESTINATION_LIST:
      return {
        ...state,
        selectedDestinationList: action.payload,
      };
    case PropertiesActionTypes.SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case PropertiesActionTypes.SET_PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        propertyList: action.payload,
      };
    case PropertiesActionTypes.FILTER_PROPERTIES:
      return {
        ...state,
        filteredList: FilterProperties(
          state.propertyList,
          state.selectedStateList,
          state.selectedTypeList,
          state.selectedMinPrice,
          state.selectedMaxPrice,
          state.selectedDestinationList
        ),
      };
    case PropertiesActionTypes.SHOW_BOOKING_POPUP:
      return {
        ...state,
        bookingPopup: true,
      };
    case PropertiesActionTypes.HIDE_BOOKING_POPUP:
      return {
        ...state,
        bookingPopup: false,
      };
    case PropertiesActionTypes.RESET_FILTER:
      return {
        ...state,
        selectedStateList: [],
        selectedTypeList: [],
        selectedMinPrice: null,
        selectedMaxPrice: null,
        selectedDestinationList: [],
      };
    default:
      return state;
  }
};

export default propertyReducer;
