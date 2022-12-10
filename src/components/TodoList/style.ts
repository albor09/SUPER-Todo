import styled from "styled-components";
import plus from "../../assets/images/plus.png";

export const TodoListWrapper = styled.div`
  border: 3px solid #5585ff;
  box-shadow: 1px 1px 15px #5585ff;
  border-radius: 16px;
  //width: 100%;
  //height: 100%;
  min-height: 300px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

export const TodoListTitleWrapper = styled.div`
  padding: 0 1em 0 1em;
  border-radius: 10px 10px 0 0;
  background-color: #5585ff;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TodoListsWrapper = styled.div`
  display: flex;

  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TidoListTitle = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: white;
  font-family: sans-serif;
  text-align: center;
`;

export const TodoList = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  overflow-y: auto;
  overflow-x: hidden;
  height: 90%;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
  }

  &::-webkit-scrollbar-thumb {
    border: 5px solid transparent;
    border-radius: 100px;
    background-color: #5585ff;
    background-clip: content-box;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }
`;

export const TodoListBtns = styled.div`
  display: flex;
`;

export const AddBtn = styled.div`
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-size: contain;
  width: 22px;
  height: 22px;
  outline: none;
`;

export const AddTodo = styled.div`
  width: 100%;
  border: dashed #5a5a5a 1px;
  border-radius: 4px;
  min-height: 50px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    color: rgba(255, 255, 255, 1);
    border: dashed #5a5a5a 1px;
    background-color: #5a5a5a;
  }
`;
