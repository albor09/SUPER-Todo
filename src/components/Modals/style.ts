import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const Modal = styled.div`
  color: white;
  padding: 2em;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 300px;
  background-color: #353535;
  border-radius: 16px;
  justify-content: space-between;
  z-index: 3;

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

export const ModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  font-size: 18px;
  min-height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
`;

export const ModalCancelBtn = styled.button`
  width: 100px;
  font-size: 16px;
  background-color: rgba(255, 0, 0, 0.3);
  outline: none;
  border: none;
  color: white;
  padding: 0.5em;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
`;

export const ModalPositiveBtn = styled.button`
  width: 100px;
  font-size: 16px;
  background-color: rgba(0, 255, 0, 0.3);
  outline: none;
  border: none;
  color: white;
  padding: 0.5em;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
  }
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1c2431;
  border-radius: 16px;
  border: 2px solid #5e81ff;
  padding: 0.25em 0.5em 0.25em 0.5em;
  transition: 250ms;

  &:hover,
  :focus {
    border: 2px solid #829dff;
  }

  & input {
    font-weight: 600;
    font-size: 14px;
    box-sizing: content-box;
    height: 100%;
    padding: 0;
    color: white;
    outline: none;
    border: none;
    width: 100%;
    background-color: transparent;
  }
`;

export const InpLabel = styled.div`
  font-size: 16px;
  margin-bottom: 0.5em;
  text-align: start;
`;
