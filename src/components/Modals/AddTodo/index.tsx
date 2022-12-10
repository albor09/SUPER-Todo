import React, { useRef } from "react";
import * as s from "../style";
import ModalState from "../modal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { close } from "./slice";
import { addTodo, selectTodoLists } from "../../TodoList/slice";
import { showMsg } from "../../../utils/helpers";

const AddTodoModal: React.FC<ModalState> = ({ isOpen }) => {
  const dispatch = useAppDispatch();
  const textInput = useRef<HTMLInputElement>(null);

  const lists = useAppSelector(selectTodoLists);

  const validation = (): boolean => {
    return textInput.current!.value != "";
  };

  const onSuccess = () => {
    if (!validation()) return;
    dispatch(
      addTodo({
        text: textInput.current!.value,
        isComplete: false,
        id: lists.lists[lists.selectedIndex].todos.length,
        listId: lists.selectedIndex,
      })
    );
    dispatch(close());
    showMsg(`Added todo to ${lists.lists[lists.selectedIndex].name}`);
  };

  if (!isOpen) return null;

  return (
    <s.Overlay>
      <s.Modal
        onKeyDown={(event) => {
          if (event.key == "Enter") onSuccess();
        }}
      >
        <s.ModalHeader>Add Todo</s.ModalHeader>
        <s.ModalBody>
          <div>
            <s.InpLabel>Text</s.InpLabel>
            <s.InputWrapper>
              <input ref={textInput} type="text" />
            </s.InputWrapper>
          </div>
        </s.ModalBody>
        <s.ModalBottom>
          <s.ModalPositiveBtn
            onClick={() => {
              onSuccess();
            }}
          >
            Go
          </s.ModalPositiveBtn>
          <s.ModalCancelBtn onClick={() => dispatch(close())}>Cancel</s.ModalCancelBtn>
        </s.ModalBottom>
      </s.Modal>
    </s.Overlay>
  );
};

export default AddTodoModal;
