import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsByID } from "./operationFilter";

const initialState = {
  favorites: [],
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
  name: "favorites",
  reducers: {
    filerFavData: (state, { payload }) => {
      state.filter.brand = payload.brand;
      state.filter.price = payload.price.value;
      state.filter.mileage.from = payload.from;
      state.filter.mileage.to = payload.to;
      console.log(state.filter.brand);
    },
    // addPage: (state, { payload }) => {
    //   if (payload.page === 1) {
    //     state.cars = payload.data;
    //   } else {
    //     state.cars = [...state.cars, ...payload.data];
    //   }
    // },
    removeFromFav: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
    // clearModal: (state, { payload }) => {
    //   state.modal = initialState;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCarsByID.fulfilled, (state, { payload }) => {
      state.favorites = [...state.favorites, payload];
    });
  },
});

export const favReducer = slice.reducer;

export const { filerFavData, removeFromFav } = slice.actions;
