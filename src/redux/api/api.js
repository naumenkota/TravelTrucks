import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, perPage = 4, filters = {} } = {}, thunkAPI) => {
    try {
      const params = { page, limit: perPage };
      Object.keys(filters).forEach((key) => {
        if (
          filters[key] !== "" &&
          filters[key] !== null &&
          filters[key] !== false
        ) {
          params[key] = filters[key];
        }
      });

      const response = await axios.get(`/campers`, { params });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return [];
      }
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
