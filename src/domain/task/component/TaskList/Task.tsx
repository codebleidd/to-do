import { FunctionComponent } from 'react';
import { TextButton } from '../../../../app/component/Button/Button';
import { useAppDispatch } from '../../../../app/store/appStore.hook';
import { TaskModel } from '../../model/Task.model';
import { TaskAction } from '../../store/task.action';
import { TaskTitleWrapper, TaskWrapper } from './Task.styled';

export const Task: FunctionComponent<TaskModel.Single> = ({ id, description, title, status }) => {
  const dispatch = useAppDispatch();

  const onRemove = () => {
    dispatch(TaskAction.remove(id));
  };

  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer?.setData('task/id', id);
    event.dataTransfer?.setData('task/status', status);
  };

  return (
    <TaskWrapper status={status} draggable onDragStart={onDragStart}>
      <TaskTitleWrapper>
        <h6>{title}</h6>
        <TextButton onClick={onRemove}>🗑️</TextButton>
      </TaskTitleWrapper>
      <p>{description}</p>
    </TaskWrapper>
  );
};
