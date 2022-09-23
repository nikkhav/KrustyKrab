import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AdminState {
  name: string;
  loggedIn: boolean;
}

const initialState: AdminState = {
  name: "",
  loggedIn: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.loggedIn = true;
    },
  },
});

export const { login } = adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admin;

export default adminSlice.reducer;
