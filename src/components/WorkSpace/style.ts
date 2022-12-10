import styled from "styled-components";

export const WorkSpace = styled.div`
  /*padding: 0 2em 0 2em;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;*/
  position: absolute;
  top: 0;
  right: 0;
  left: 200px;
  bottom: 0;
  overflow-y: auto;
  transition: 500ms;

  @media (max-width: 768px) {
    left: 0 !important;
  }
`;

export const NoSelectedMsg = styled.div`
  color: white;
  font-size: 28px;
  padding: 2em;
  border-radius: 16px;
  background-color: #656565; ;
`;

export const ListSpace = styled.div`
  padding: 2em;
`;
