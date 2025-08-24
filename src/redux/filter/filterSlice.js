import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  AC: "",
  bathroom: "",
  kitchen: "",
  TV: "",
  transmission: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { filter, value } = action.payload;
      state[filter] = value;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
