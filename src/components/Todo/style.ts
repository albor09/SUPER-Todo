import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";

export const TodoWrapper = styled.div`
  border-radius: 4px;
  min-width: 100px;
  min-height: 50px;
  background-color: #5a5a5a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 0.25em 0.2em 0.25em;
  gap: 0.5em;
`;

export const TodoContent = styled.div`
  color: white;
  overflow-wrap: anywhere;
`;

export const TodoText = styled.div`
  font-size: 16px;
`;

export const GrnArrow = styled.div`
  mask-image: url(${arrow});
  background-color: rgba(29, 205, 0, 0.5);
  width: 32px;
  height: 32px;
  mask-repeat: no-repeat;
  mask-position: center;

  &:hover {
    background-color: rgba(29, 205, 0, 1);
  }
`;

export const GrnText = styled.div`
  color: rgba(29, 205, 0, 0.5);
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: rgba(29, 205, 0, 1);
  }
`;

export const RedText = styled.div`
  color: rgba(205, 0, 0, 0.5);
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: rgba(205, 0, 0, 1);
  }
`;
