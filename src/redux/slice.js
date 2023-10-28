import { createSlice } from "@reduxjs/toolkit";
import { fetchCardForModal, fetchCars } from "./operation";

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
  isLoading: false,
  error: null,
};

const slice = createSlice({
  initialState,
  name: "vehicles",
  reducers: {
    filerData: (state, { payload }) => {
      state.filter.brand = payload.brand.value;
      state.filter.price = payload.price.label;
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

  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.cars = payload;
    });
    builder.addCase(fetchCardForModal.fulfilled, (state, { payload }) => {
      state.modal = payload;
    });
    builder.addCase(fetchCardForModal.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCardForModal.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export const carsReducer = slice.reducer;
export const { filerData, addPage, removeFromFav, clearModal } = slice.actions;
