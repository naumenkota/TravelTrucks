import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../api/api.js";

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
  page: 1,
  perPage: 4,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers(state) {
      state.items = [];
      state.total = 0;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        /*  state.items = [...state.items, ...action.payload.items]; */
        state.total = action.payload.total;
        state.loading = false;
        /* state.page = action.meta.arg.page;
        /* state.page = action.meta.arg?.page || 1; */
      })
      .addCase(fetchCampers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { resetCampers } = campersSlice.actions;
