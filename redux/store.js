import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const SET_CLIENT_STATE = "SET_CLIENT_STATE";

const middlewares = [
  /*thunk, */
  sagaMiddleware,
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else if (action.type === SET_CLIENT_STATE) {
    return {
      ...state,
      fromClient: action.payload,
    };
  } else {
    return rootReducer(state, action);
  }
};

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined, applyMiddleware(logger));

const initStore = () => {
  const store = createStore(reducer, bindMiddleware(middlewares));
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(initStore, { debug: true });

export const makeStore = (preloadState, options) => {
  return createStore(rootReducer, preloadState);
};
