import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const taskApi = axios.create({
  baseURL: "https://6537c2bda543859d1bb0c95e.mockapi.io/",
  params: {
    page: 1,
    limit: 12,
  },
});

export const fetchCars = createAsyncThunk("fetchAll", async (_, thunkAPI) => {
  try {
    const { data } = await taskApi.get("adverts");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCarsByID = createAsyncThunk(
  "fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await taskApi.get(`adverts/${id}/`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCardForModal = createAsyncThunk(
  "fetchForModal",
  async (id, thunkAPI) => {
    try {
      const { data } = await taskApi.get(`adverts/${id}/`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
