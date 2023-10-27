import { createSelector } from "@reduxjs/toolkit";

export const selectFav = (state) => state.favorites.favorites;

export const selectBrand = (state) => state.favorites.filter.brand;
export const selectPrice = (state) => state.favorites.filter.price;
export const selectMileageFrom = (state) => state.favorites.filter.mileage.from;
export const selectMileageTo = (state) => state.favorites.filter.mileage.to;

export const selectMyFilterFav = createSelector(
  [selectFav, selectBrand, selectPrice, selectMileageFrom, selectMileageTo],
  (favorites, brand, price, mileFrom, mileTo) => {
    const from = Number(mileFrom);
    const to = Number(mileTo);
    return favorites.filter(
      (el) =>
        el.model.toLowerCase().includes(brand.toLowerCase()) &&
        el.rentalPrice.includes(price) &&
        (from === 0 || el.mileage >= from) &&
        (to === 0 || el.mileage <= to)
    );
  }
);
