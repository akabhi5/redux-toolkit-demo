import { createSlice } from "@reduxjs/toolkit";
import usersInitialState from "../data/users";
import usersReducers from "../reducers/users";

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: usersReducers,
});

export const { login, logout } = usersSlice.actions;
export default usersSlice;
