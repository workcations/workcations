import { combineReducers } from "redux";

import contactPopupReducer from "./contact-popup/contact-popup.reducer";
import propertyReducer from "./property/properties.reducer";

const rootReducer = combineReducers({
  contactPopup: contactPopupReducer,
  properties: propertyReducer,
});

export default rootReducer;
