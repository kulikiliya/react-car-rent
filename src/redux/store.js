import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favReducer } from "./FiterRedux/sliceFilter";

const persistConfig = {
  key: "vehicles",
  version: 1,
  storage,
  whitelist: ["favorites"],
};
const persistedReducer = persistReducer(persistConfig, favReducer);

export const store = configureStore({
  reducer: {
    vehicles: carsReducer,
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
