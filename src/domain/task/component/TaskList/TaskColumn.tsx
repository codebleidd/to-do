import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../app/store/appStore.hook';
import { TaskHelper } from '../../model/Taks.helper';
import { TaskStatusEnum } from '../../model/Task.enum';
import { TaskAction } from '../../store/task.action';
import { TaskSelector } from '../../store/task.selector';
import { Task } from './Task';
import { TaskColumnStyled } from './TaskColumn.styled';

export interface TaskColumnProps {
  columnStatus: TaskStatusEnum;
}

export const TaskColumn: FunctionComponent<TaskColumnProps> = ({ columnStatus }) => {
  const tasks = useAppSelector(TaskSelector.getTasksByStatus(columnStatus));
  const dispatch = useDispatch();

  const onDrop = (e: React.DragEvent) => {
    const id = e.dataTransfer.getData('task/id');
    const status = e.dataTransfer.getData('task/status') as TaskStatusEnum;

    if (TaskHelper.getIsTransferAllowed(status, columnStatus)) {
      dispatch(TaskAction.changeTaskStatus({ id, status: columnStatus }));
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <TaskColumnStyled onDrop={onDrop} onDragOver={onDragOver}>
      <h4>{TaskHelper.getTaskColumnLabelByStatus(columnStatus)}</h4>

      {tasks.length < 1 ? <p>Nothing to see here 👻</p> : null}

      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </TaskColumnStyled>
  );
};
