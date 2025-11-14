import { createSlice } from "@reduxjs/toolkit";
import attributes from "./attributes";

const initialState = Object.fromEntries(
  Object.entries(attributes).map(([key, conf]) => [key, conf.default])
);

const attributesSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    setAttribute: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
  },
});

export const { setAttribute } = attributesSlice.actions;
export default attributesSlice.reducer;
