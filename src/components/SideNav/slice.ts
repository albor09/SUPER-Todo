import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortAndDeduplicateDiagnostics } from "typescript";
import SideNav from ".";
import { RootState } from "../../app/store";

export interface SideNavState {
  isOpen: boolean;
}

const initState: SideNavState = {
  isOpen: true,
};

export const sideNavSlice = createSlice({
  name: "sideNav",
  initialState: initState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const selectSideNav = (state: RootState) => state.sideNav;
export const { toggle } = sideNavSlice.actions;
export default sideNavSlice.reducer;
