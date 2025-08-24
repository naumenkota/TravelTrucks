import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "../api/api.js";

const initialState = {
  items: [],
  total: 0,
  loading: false,
  loadingMore: false,
  error: null,
  page: 1,
  perPage: 4,
  selectedCamper: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers(state) {
      state.items = [];
      state.total = 0;
      (state.loading = false), (state.loadingMore = false), (state.page = 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        if (action.meta.arg.page > 1) {
          state.items = [...state.items, ...action.payload.items];
          state.loadingMore = false;
        } else {
          state.items = action.payload.items;
          state.loading = false;
        }
        state.total = action.payload.total;

        state.page = action.meta.arg.page;
      })
      .addCase(fetchCampers.pending, (state, action) => {
        state.error = null;
        if (action.meta.arg.page > 1) {
          state.loadingMore = true;
        } else {
          state.loading = true;
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.loadingMore = false;
      })

      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.loadingMore = false;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { resetCampers } = campersSlice.actions;
