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
    const allBrands = brand === "All" ? "" : brand;

    return favorites.filter((el) => {
      const brandMatch = allBrands === "" || el.make.includes(allBrands);

      const rentalPrice = Number(el.rentalPrice.replace("$", ""));
      const priceMatch =
        price === "All" ||
        (price === "" && true) ||
        rentalPrice <= Number(price);

      const mileageMatch = from === 0 || el.mileage >= from;
      const toMatch = to === 0 || el.mileage <= to;

      return brandMatch && priceMatch && mileageMatch && toMatch;
    });
  }
);
