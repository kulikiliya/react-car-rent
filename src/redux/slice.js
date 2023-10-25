import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operation";

const initialState = {
  cars: [],
  page: 1,
  filter: {
    brand: "",
    price: "",
    mileage: {
      from: "",
      to: "",
    },
  },
};

const slice = createSlice({
  initialState,
  name: "vehicles",
  reducers: {
    filerData: (state, { payload }) => {
      state.filter.brand = payload.brand;
      state.filter.price = payload.price.value;
      state.filter.mileage.from = payload.from;
      state.filter.mileage.to = payload.to;
      console.log(payload.from);
    },
    addPage: (state, { payload }) => {
      if (payload.page === 1) {
        state.cars = payload.data;
      } else {
        state.cars = [...state.cars, ...payload.data];
      }
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
  //     state.cars = payload;
  //   });
  // },
});

export const carsReducer = slice.reducer;
export const { filerData, addPage } = slice.actions;
