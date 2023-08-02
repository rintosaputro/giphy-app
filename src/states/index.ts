import { configureStore } from "@reduxjs/toolkit";
import ironMansReducer from "./ironMan/reducer";

const store = configureStore({
  reducer: {
    ironMan: ironMansReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
