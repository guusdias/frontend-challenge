import styled from "styled-components";

export const TooltipContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: visible;
  font-weight: 400;
  font-size: 14px;
  border-radius: 4px;
  z-index: 99999999999999999 !important;
`;

export const TooltipSpan = styled.span`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 10px;
  height: 10px;
  position: absolute;
  top: -4px;
  transform: rotate(45deg);
  right: 43%;
`;
