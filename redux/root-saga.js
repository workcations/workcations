import { all, call } from "redux-saga/effects";

import { propertySagas } from "./property/properties.saga";

export default function* rootSaga() {
  yield all([call(propertySagas)]);
}
