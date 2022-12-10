import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ThemeState {
  val: "light" | "dark";
}

const initialState: ThemeState = {
  val: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.val === "light" ? (state.val = "dark") : (state.val = "light");
      console.log("EWE");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.val;

export default themeSlice.reducer;
