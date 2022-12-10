import styled from "styled-components";

export const SideNavBar = styled.div``;

export const SideNavBarWrapper = styled.div`
  width: 200px;
  height: 100%;
  position: absolute;
  background-color: #1b1b1b;
  border-right: solid #727272 1px;
  transition: 500ms;
  z-index: 1;

  & h1 {
    color: white;
    letter-spacing: 10px;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const TLWrapper = styled.div`
  padding: 1em 0.5em 1em 0.5em;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5em;
  color: white;
  background-color: 4A4A4A;
  &:hover {
    cursor: pointer;
  }
`;

export const TLWrapperSelected = styled.div`
  padding: 1em 0.5em 1em 0.5em;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5em;
  color: white;
  background-color: #525252;
  &:hover {
    cursor: pointer;
  }
`;

export const ListName = styled.div`
  font-size: 16px;
  font-weight: 600;
  overflow-wrap: anywhere;
`;

export const CreateList = styled.div`
  color: rgba(255, 255, 255, 0.5);
  transition: 100ms;

  &:hover {
    color: rgba(255, 255, 255, 1);
    font-size: 17px;
  }
`;

export const ListCompletePer = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`;

export const NameAndPercent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  gap: 0.5em;
  align-items: center;
`;

export const SliderOfComplete = styled.div`
  height: 1px;
  //background-color: green;
  display: flex;
  width: 100%;
`;

export const CloseBtn = styled.div`
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const SideNavTopBar = styled.div`
  display: flex;
  padding: 0.5em;
  margin: 0.2em;
  flex-direction: row;
  @media (min-width: 768px) {
    display: none;
  }
`;
