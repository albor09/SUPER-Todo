import React, { useRef } from "react";
import * as s from "../style";
import ModalState from "../modal";
import { useAppDispatch } from "../../../app/hooks";
import { close } from "./slice";
import { addTodoList } from "../../TodoList/slice";

const AddTodoListModal: React.FC<ModalState> = ({ isOpen }) => {
  const dispatch = useAppDispatch();
  const nameInput = useRef<HTMLInputElement>(null);

  const validation = (): boolean => {
    return nameInput.current!.value != "";
  };

  const onSuccess = () => {
    if (!validation()) return;
    dispatch(addTodoList({ name: nameInput.current!.value, todos: [] }));
    dispatch(close());
  };

  if (!isOpen) return null;

  return (
    <s.Overlay>
      <s.Modal
        onKeyDown={(event) => {
          if (event.key == "Enter") onSuccess();
        }}
      >
        <s.ModalHeader>Create todo list</s.ModalHeader>
        <s.ModalBody>
          <div>
            <s.InpLabel>list name</s.InpLabel>
            <s.InputWrapper>
              <input ref={nameInput} type="text" />
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

export default AddTodoListModal;
