import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import ModalState from "../modal";

const initialState: ModalState = {
  isOpen: false,
};

export const addTodoModalSlice = createSlice({
  name: "addTodoModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = addTodoModalSlice.actions;
export const selectAddTodoModal = (state: RootState) => state.addTodoModal;

export default addTodoModalSlice.reducer;
