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
      console.log(payload);
      state.filter.brand = payload.brand.value;
      state.filter.price = payload.price.value;
      state.filter.mileage.from = payload.from;
      state.filter.mileage.to = payload.to;
      console.log(payload.price.value);
    },
    removeFromFav: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCarsByID.fulfilled, (state, { payload }) => {
      state.favorites = [...state.favorites, payload];
    });
  },
});

export const favReducer = slice.reducer;

export const { filerFavData, removeFromFav } = slice.actions;
