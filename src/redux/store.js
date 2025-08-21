import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/campersSlice.js";
import { filterReducer } from "./filter/filterSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filterReducer,
  },
});
