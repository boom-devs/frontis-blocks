import { configureStore } from "@reduxjs/toolkit";
import attributesReducer from "./attributesSlice";
import { api } from '../services/laravelapi';

export const store = configureStore({
  reducer: {
    attributes: attributesReducer,   // attributes slice
    [api.reducerPath]: api.reducer,  // RTK Query api slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});