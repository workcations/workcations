import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactPopupReducer from "./contact-popup/contact-popup.reducer";
import propertyReducer from "./property/properties.reducer";
//import headerReducer from "./header/header.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    /*"cart"*/
  ], //not adding user bcz firestore handles it for us
};

const rootReducer = combineReducers({
  contactPopup: contactPopupReducer,
  properties: propertyReducer,
});

export default persistReducer(persistConfig, rootReducer);
