import { all, call, takeLatest, put } from "redux-saga/effects";
import { PropertiesActionTypes } from "./properties.action-types";
import {
  setPropertyListSuccess,
  setPropertyListFailure,
} from "./properties.actions";
import { getPropertiesList } from "./properties.utils";

export function* getProperties() {
  try {
    const properties = yield getPropertiesList();
    yield put(setPropertyListSuccess(properties));
  } catch (error) {
    yield put(setPropertyListFailure(error));
  }
}

export function* onGetPropertiesStart() {
  yield takeLatest(
    PropertiesActionTypes.SET_PROPERTY_LIST_START,
    getProperties
  );
}

export function* propertySagas() {
  yield all([call(onGetPropertiesStart)]);
}
