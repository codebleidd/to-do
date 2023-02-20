import { FunctionComponent } from 'react';
import { TextButton } from '../../../../app/component/Button/Button';
import { useAppDispatch } from '../../../../app/store/appStore.hook';
import { TaskStatusEnum } from '../../model/Task.enum';
import { TaskModel } from '../../model/Task.model';
import { TaskAction } from '../../store/task.action';
import { TaskTitleWrapper, TaskWrapper } from './Task.styled';

export interface TaskProps extends TaskModel.Single {
  setDraggedTaskType: React.Dispatch<React.SetStateAction<TaskStatusEnum | null>>;
}

export const Task: FunctionComponent<TaskProps> = ({
  id,
  description,
  title,
  status,
  setDraggedTaskType,
}) => {
  const dispatch = useAppDispatch();

  const onRemove = () => {
    dispatch(TaskAction.remove(id));
  };

  const onDragStart = (event: React.DragEvent) => {
    setDraggedTaskType(status);
    event.dataTransfer?.setData('task/id', id);
    event.dataTransfer?.setData('task/status', status);
  };

  const onDragEnd = () => {
    setDraggedTaskType(null);
  };

  return (
    <TaskWrapper status={status} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <TaskTitleWrapper>
        <h6>{title}</h6>
        <TextButton onClick={onRemove}>🗑️</TextButton>
      </TaskTitleWrapper>
      <p>{description}</p>
    </TaskWrapper>
  );
};
