import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.vehicles.cars;
export const selectFav = (state) => state.vehicles.favorites;
export const selectIsLoading = (state) => state.vehicles.isLoading;
export const selectPage = (state) => state.vehicles.page;

export const selectModalData = (state) => state.vehicles.modal;
export const selectBrand = (state) => state.vehicles.filter.brand;
export const selectPrice = (state) => state.vehicles.filter.price;
export const selectMileageFrom = (state) => state.vehicles.filter.mileage.from;
export const selectMileageTo = (state) => state.vehicles.filter.mileage.to;

export const selectMyFilter = createSelector(
  [selectCars, selectBrand, selectPrice, selectMileageFrom, selectMileageTo],
  (cars, brand, price, mileFrom, mileTo) => {
    const from = Number(mileFrom);
    const to = Number(mileTo);
    const allBrands = brand === "All" ? "" : brand;
    const testPrice = price.replace("$", "");

    return cars.filter(
      (el) =>
        el.make.includes(allBrands) &&
        (price === "All"
          ? price
          : price === ""
          ? true
          : Number(el.rentalPrice.replace("$", "")) <= testPrice) &&
        (from === 0 || el.mileage >= from) &&
        (to === 0 || el.mileage <= to)
    );
  }
);
