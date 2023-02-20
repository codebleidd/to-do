import { FunctionComponent, useCallback, useMemo } from 'react';
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
  setDraggedTaskType: React.Dispatch<React.SetStateAction<TaskStatusEnum | null>>;
  draggedTaskType: TaskStatusEnum | null;
}

export const TaskColumn: FunctionComponent<TaskColumnProps> = ({
  columnStatus,
  setDraggedTaskType,
  draggedTaskType,
}) => {
  const tasks = useAppSelector(TaskSelector.getTasksByStatus(columnStatus));
  const dispatch = useDispatch();

  const isTransferAllowed = useMemo(
    () =>
      draggedTaskType ? TaskHelper.getIsTransferAllowed(draggedTaskType, columnStatus) : false,
    [draggedTaskType, columnStatus],
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      const id = e.dataTransfer.getData('task/id');
      e.dataTransfer.effectAllowed = 'move';
      setDraggedTaskType(null);

      if (isTransferAllowed) {
        dispatch(TaskAction.changeTaskStatus({ id, status: columnStatus }));
      }
    },
    [columnStatus, dispatch, isTransferAllowed, setDraggedTaskType],
  );

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <TaskColumnStyled hasDragOver={isTransferAllowed} onDragOver={onDragOver} onDrop={onDrop}>
      <h4>{TaskHelper.getTaskColumnLabelByStatus(columnStatus)}</h4>

      {tasks.length < 1 ? <p>Nothing to see here 👻</p> : null}

      {tasks.map((task) => (
        <Task {...task} key={task.id} setDraggedTaskType={setDraggedTaskType} />
      ))}
    </TaskColumnStyled>
  );
};
