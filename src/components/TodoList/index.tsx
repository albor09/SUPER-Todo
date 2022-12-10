import React from "react";
import { TodoListState } from "./slice";
import * as s from "./style";
import Todo from "../Todo";
import { useAppDispatch } from "../../app/hooks";
import { open } from "../Modals/AddTodo/slice";

const TodoList: React.FC<TodoListState> = ({ todos, name }) => {
  const dispatch = useAppDispatch();

  return (
    <s.TodoListWrapper>
      <s.TodoListTitleWrapper>
        <s.TidoListTitle>{name}</s.TidoListTitle>
        <s.TodoListBtns>{/* <s.AddBtn></s.AddBtn> */}</s.TodoListBtns>
      </s.TodoListTitleWrapper>
      <s.TodoListsWrapper>
        <s.TodoList>
          {todos
            .filter((x) => !x.isComplete)
            .map((item) => (
              <Todo text={item.text} isComplete={false} id={item.id} listId={item.listId}></Todo>
            ))}
          <s.AddTodo onClick={() => dispatch(open())}>Add todo</s.AddTodo>
        </s.TodoList>
        <s.TodoList>
          {todos
            .filter((x) => x.isComplete)
            .map((item) => (
              <Todo text={item.text} isComplete={true} id={item.id} listId={item.listId}></Todo>
            ))}
        </s.TodoList>
      </s.TodoListsWrapper>
    </s.TodoListWrapper>
  );
};

export default TodoList;
