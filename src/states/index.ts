import { configureStore } from "@reduxjs/toolkit";
import ironMansReducer from "./ironMan/reducer";
import searchResultReducer from "./search/reducer";

const store = configureStore({
  reducer: {
    ironMan: ironMansReducer,
    searchResult: searchResultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
