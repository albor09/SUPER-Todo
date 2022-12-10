import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../components/ThemeToggle/indexSlice";
import todoListsReducer from "../components/TodoList/slice";
import addTodoListModal from "../components/Modals/AddTodoList/slice";
import addTodoModal from "../components/Modals/AddTodo/slice";
import sideNavReducer from "../components/SideNav/slice";

export const store = configureStore({
  reducer: combineReducers({
    todoLists: todoListsReducer,
    sideNav: sideNavReducer,
    theme: themeReducer,
    addTodoListModal: addTodoListModal,
    addTodoModal: addTodoModal,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
