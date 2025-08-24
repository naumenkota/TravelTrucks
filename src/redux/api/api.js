import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, perPage = 4, filters = {} } = {}, thunkAPI) => {
    try {
      const response = await axios.get(`/campers`, {
        params: { page, limit: perPage, ...filters },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchOnebyId",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
