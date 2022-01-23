import { createSlice } from "@reduxjs/toolkit";
import contactInitialState from "../data/contacts";
import contactsReducer, { contactsExtraReducer } from "../reducers/contacts";

// slice = part of state
const contactSlice = createSlice({
  name: "contact-list",
  initialState: contactInitialState,
  reducers: contactsReducer,
  extraReducers: contactsExtraReducer,
});

// export const { add, remove, update } = contactSlice.actions;
export default contactSlice;
