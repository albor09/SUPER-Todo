import { toast } from "react-toastify";
import { TodoListState } from "../components/TodoList/slice";

export const getPercentOfComplete = (todoList: TodoListState): number => {
  if (todoList.todos.length == 0) return 0;

  return Math.round(
    (todoList.todos.filter((x) => x.isComplete == true).length / todoList.todos.length) * 100
  );
};

export const showMsg = (text: string) => {
  toast.success(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
