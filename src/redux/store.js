import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/campersSlice.js";
import { filterReducer } from "./filter/filterSlice.js";
import { favoriteReducer } from "./favorite/favoritesSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filterReducer,
    favorites: favoriteReducer,
  },
});
