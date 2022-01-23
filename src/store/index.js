import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import contactSlice from "../slices/contacts";
import usersSlice from "../slices/users";

let allReducers = {
  contacts: contactSlice.reducer,
  users: usersSlice.reducer,
};

const logger = createLogger();

let store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
