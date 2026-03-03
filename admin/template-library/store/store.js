import { configureStore } from "@reduxjs/toolkit";
import attributesReducer from "./attributesSlice";
import { api } from '../services/laravelapi';

export const store = configureStore({
  reducer: {
    attributes: attributesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});