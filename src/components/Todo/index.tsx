import React from "react";
import * as s from "./style";
import { completeTodo, TodoState, undoTodo } from "../TodoList/slice";
import { useAppDispatch } from "../../app/hooks";

const Todo: React.FC<TodoState> = ({ text, isComplete, id, listId }) => {
  const dispatch = useAppDispatch();

  return (
    <s.TodoWrapper>
      <s.TodoContent>{text}</s.TodoContent>
      {!isComplete ? (
        <s.GrnText onClick={() => dispatch(completeTodo({ id: id, listId: listId }))}>
          Complete
        </s.GrnText>
      ) : (
        <s.RedText onClick={() => dispatch(undoTodo({ id: id, listId: listId }))}>Undo</s.RedText>
      )}
    </s.TodoWrapper>
  );
};

export default Todo;
