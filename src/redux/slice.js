import { createSlice } from "@reduxjs/toolkit";
import { fetchCardForModal, fetchCars, fetchCarsByID } from "./operation";

const initialState = {
  cars: [],
  favorites: [],
  modal: [],
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
      console.log(state.filter.brand);
    },
    addPage: (state, { payload }) => {
      if (payload.page === 1) {
        state.cars = payload.data;
      } else {
        state.cars = [...state.cars, ...payload.data];
      }
    },
    removeFromFav: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
    clearModal: (state, { payload }) => {
      state.modal = initialState;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
  //     state.cars = payload;
  //   });
  // },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchCarsByID.fulfilled, (state, { payload }) => {
      //   state.favorites = [...state.favorites, payload];
      // })
      .addCase(fetchCardForModal.fulfilled, (state, { payload }) => {
        state.modal = payload;
      });
  },
});

export const carsReducer = slice.reducer;
export const { filerData, addPage, removeFromFav, clearModal } = slice.actions;
