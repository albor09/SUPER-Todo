import { useAppSelector } from "../../app/hooks";
import { selectTodoLists } from "../TodoList/slice";
import * as s from "./style";
import TodoList from "../TodoList";
import TopBar from "../TopBar";
import { selectSideNav } from "../SideNav/slice";

const WorkSpace = () => {
  const todoListsState = useAppSelector(selectTodoLists);
  const sideNavState = useAppSelector(selectSideNav);

  return (
    <s.WorkSpace style={sideNavState.isOpen ? { left: "200px" } : { left: "0px" }}>
      <TopBar></TopBar>
      <s.ListSpace>
        {todoListsState.selectedIndex == -1 ? (
          <s.NoSelectedMsg>Select todo list</s.NoSelectedMsg>
        ) : (
          <TodoList
            name={todoListsState.lists[todoListsState.selectedIndex].name}
            todos={todoListsState.lists[todoListsState.selectedIndex].todos}
          ></TodoList>
        )}
      </s.ListSpace>
    </s.WorkSpace>
  );
};

export default WorkSpace;
