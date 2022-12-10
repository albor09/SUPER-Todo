import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPercentOfComplete } from "../../utils/helpers";
import AddTodoListModal from "../Modals/AddTodoList";
import { open } from "../Modals/AddTodoList/slice";
import { selectTodoLists, selectList } from "../TodoList/slice";
import { selectSideNav } from "./slice";
import * as s from "./style";
import { toggle } from "./slice";

const SideNav = () => {
  const todoListsManager = useAppSelector(selectTodoLists);
  const dispatch = useAppDispatch();
  const sideNavState = useAppSelector(selectSideNav);

  const width = window.innerWidth < 768 ? "-90vw" : "-200px";

  return (
    <s.SideNavBarWrapper style={sideNavState.isOpen ? { left: "0px" } : { left: width }}>
      <s.SideNavTopBar>
        <s.CloseBtn onClick={() => dispatch(toggle())}></s.CloseBtn>
      </s.SideNavTopBar>

      <div>
        <h1>SUPER TODO</h1>
      </div>

      <s.SideNavBar>
        {todoListsManager.lists.map((item, i) => {
          let completePer = getPercentOfComplete(item);

          return i == todoListsManager.selectedIndex ? (
            <s.TLWrapperSelected>
              <s.NameAndPercent>
                <s.ListName>{item.name}</s.ListName>
                <s.ListCompletePer>{completePer}%</s.ListCompletePer>
              </s.NameAndPercent>
              <s.SliderOfComplete>
                <div
                  style={{ width: `${completePer}%`, backgroundColor: "#1DCD00", height: "100%" }}
                ></div>
                <div
                  style={{
                    width: `${100 - completePer}%`,
                    backgroundColor: "#CD0000",
                    height: "100%",
                  }}
                ></div>
              </s.SliderOfComplete>
            </s.TLWrapperSelected>
          ) : (
            <s.TLWrapper
              onClick={() => {
                dispatch(selectList(i));
                dispatch(toggle());
              }}
            >
              <s.NameAndPercent>
                <s.ListName>{item.name}</s.ListName>
                <s.ListCompletePer>{completePer}%</s.ListCompletePer>
              </s.NameAndPercent>
              <s.SliderOfComplete>
                <div
                  style={{ width: `${completePer}%`, backgroundColor: "#1DCD00", height: "100%" }}
                ></div>
                <div
                  style={{
                    width: `${100 - completePer}%`,
                    backgroundColor: "#CD0000",
                    height: "100%",
                  }}
                ></div>
              </s.SliderOfComplete>
            </s.TLWrapper>
          );
        })}
        <s.TLWrapper>
          <s.CreateList onClick={() => dispatch(open())}>create new todo list </s.CreateList>
        </s.TLWrapper>
      </s.SideNavBar>
    </s.SideNavBarWrapper>
  );
};

export default SideNav;
