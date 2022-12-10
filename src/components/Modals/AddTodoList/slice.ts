import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import ModalState from "../modal";

const initialState: ModalState = {
  isOpen: false,
};

export const addTodoListModalSlice = createSlice({
  name: "addTodoListModal",
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

export const { open, close } = addTodoListModalSlice.actions;
export const selectAddTodoListModal = (state: RootState) => state.addTodoListModal;

export default addTodoListModalSlice.reducer;
