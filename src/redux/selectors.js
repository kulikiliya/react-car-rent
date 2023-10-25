import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.vehicles.cars;
export const selectPage = (state) => state.vehicles.page;

export const selectBrand = (state) => state.vehicles.filter.brand;
export const selectPrice = (state) => state.vehicles.filter.price;
export const selectMileageFrom = (state) => state.vehicles.filter.mileage.from;
export const selectMileageTo = (state) => state.vehicles.filter.mileage.to;

export const selectMyFilter = createSelector(
  [selectCars, selectBrand, selectPrice, selectMileageFrom, selectMileageTo],
  (cars, brand, price, mileFrom, mileTo) => {
    const from = Number(mileFrom);
    const to = Number(mileTo);
    return cars.filter(
      (el) =>
        el.model.toLowerCase().includes(brand.toLowerCase()) &&
        el.rentalPrice.includes(price) &&
        (from === 0 || el.mileage >= from) &&
        (to === 0 || el.mileage <= to)
    );
  }
);
