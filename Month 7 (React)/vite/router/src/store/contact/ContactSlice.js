import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Hello from ReduxToolKit",
  count: 0,
};

export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    increm(state, actions) {
      state.count += actions.payload;
    },
    dicrement(state, actions) {
      state.count -= actions.payload;
    },
  },
});

export const { increm, dicrement } = contactSlice.actions;
export default contactSlice.reducer;
