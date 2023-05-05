import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const createReduxStore = (preloadedState = {}) =>
  configureStore({ reducer: rootReducer, preloadedState: preloadedState });

export default createReduxStore;
