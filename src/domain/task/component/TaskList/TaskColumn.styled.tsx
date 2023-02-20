import styled from 'styled-components';

export const TaskColumnStyled = styled.div<{ hasDragOver?: boolean }>`
  border-width: 2px;
  border-color: ${({ theme }) => theme.color.palette.grey[600]};
  border-style: ${({ hasDragOver }) => (hasDragOver ? 'dashed' : 'solid')};
  opacity: ${({ hasDragOver }) => (hasDragOver ? '0.8' : '1')};
  border-radius: ${({ theme }) => theme.border.radius};
  margin-top: 98px;
  margin-bottom: 98px;
  display: flex;
  flex-direction: column;
  padding: 22px 36px 36px;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
