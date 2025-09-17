// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import attributesReducer from "./attributesSlice";

export const store = configureStore({
  reducer: {
    attributes: attributesReducer
  }
});
