import { FunctionComponent } from 'react';
import { TaskHelper } from '../../model/Taks.helper';
import { TaskStatusEnum } from '../../model/Task.enum';
import { TaskModel } from '../../model/Task.model';
import { Task } from './Task';
import { TaskColumnStyled } from './TaskColumn.styled';

export interface TaskColumnProps {
  columnStatus: TaskStatusEnum;
  tasks: TaskModel.Single[];
}

export const TaskColumn: FunctionComponent<TaskColumnProps> = ({ columnStatus, tasks }) => (
  <TaskColumnStyled>
    <h4>{TaskHelper.getTaskColumnLabelByStatus(columnStatus)}</h4>

    {tasks.map((task) => (
      <Task {...task} key={task.id} />
    ))}
  </TaskColumnStyled>
);
