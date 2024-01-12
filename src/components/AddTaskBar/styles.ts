import styled from "styled-components";

interface TaskContainerProps {
  styleBackground?: string;
  styleBorder?: string;
}

export const AddTaskContainer = styled.div<TaskContainerProps>`
  position: relative;
  width: 100%;
  height: 48px;
  background: ${(props) => props.styleBackground};
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
  transition: all 0.3s ease;
  border: 1px solid var(--grey-light);
  border-radius: 4px;
  overflow: hidden;
  padding: 0;
`;

export const AddTaskForm = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const AddTaskInput = styled.input`
  padding-left: 30px;
  border: none;
  color: var(--grey-dark);
  top: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;
