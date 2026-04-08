import { configureStore } from "@reduxjs/toolkit";
import  contactSlice from "./contact/ContactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});
