import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";

const rootReducer = combineReducers({
  generalSlice,
});

export const store = configureStore({ reducer: rootReducer });
