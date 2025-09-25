// store/attributesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import attributes from "./attributes";

// attributes.js theke default value niye initialState banaisi
const initialState = Object.fromEntries(
  Object.entries(attributes).map(([key, conf]) => [key, conf.default])
);

const attributesSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    setAttribute: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    }
  }
});

export const { setAttribute } = attributesSlice.actions;
export default attributesSlice.reducer;
