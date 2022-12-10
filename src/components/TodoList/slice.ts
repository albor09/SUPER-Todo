import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortAndDeduplicateDiagnostics } from "typescript";
import { RootState } from "../../app/store";

export interface TodoState {
  text: string;
  isComplete: boolean;
  id: number;
  listId: number;
}

export interface TodoListState {
  name: string;
  todos: Array<TodoState>;
}

export interface TodoLists {
  lists: Array<TodoListState>;
  selectedIndex: number;
}

const initialState: TodoLists = {
  lists: [],
  selectedIndex: -1,
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.lists[action.payload.listId].todos.push(action.payload);
    },
    addTodoList: (state, action: PayloadAction<TodoListState>) => {
      state.lists.push(action.payload);
    },
    completeTodo: (state, action: PayloadAction<{ listId: number; id: number }>) => {
      state.lists[action.payload.listId].todos[action.payload.id].isComplete = true;
    },
    undoTodo: (state, action: PayloadAction<{ listId: number; id: number }>) => {
      state.lists[action.payload.listId].todos[action.payload.id].isComplete = false;
    },
    selectList: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { addTodo, completeTodo, selectList, addTodoList, undoTodo } = todoListSlice.actions;
export const selectTodoLists = (state: RootState) => state.todoLists;

export default todoListSlice.reducer;
//export default 2;
