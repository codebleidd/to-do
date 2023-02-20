import styled from 'styled-components';
import { TaskHelper } from '../../model/Taks.helper';
import { TaskStatusEnum } from '../../model/Task.enum';

export const TaskWrapper = styled.div<{ status: TaskStatusEnum }>`
  padding: 22px 36px 36px;
  margin: 12px 0;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ status }) => TaskHelper.getTaskColorByStatus(status)};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  max-width: 360px;
`;

export const TaskTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
