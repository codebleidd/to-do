import { TaskStatusEnum } from '../../model/Task.enum';
import { TaskColumn } from './TaskColumn';
import { TaskListStyled } from './TaskList.styled';

export const TaskList = () => (
  <TaskListStyled>
    <TaskColumn columnStatus={TaskStatusEnum.OPEN} />
    <TaskColumn columnStatus={TaskStatusEnum.PENDING} />
    <TaskColumn columnStatus={TaskStatusEnum.CLOSED} />
  </TaskListStyled>
);
