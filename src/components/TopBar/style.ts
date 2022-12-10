import styled from "styled-components";

export const TopBarWrapper = styled.div`
  top: 0;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 0.5em;
`;

export const Hamburger = styled.div`
  width: 32px;
  height: 32px;
  z-index: 0;
  cursor: pointer;

  & div {
    position: relative;
    width: 32px;
    height: 3px;
    border-radius: 3px;
    opacity: 0.5;
    background-color: white;
    margin-top: 6px;
    //margin-bottom: 3px;
    transition: all 0.3s ease-in-out;
  }
`;
