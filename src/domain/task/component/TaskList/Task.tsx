import { FunctionComponent } from 'react';
import { TaskModel } from '../../model/Task.model';
import { TaskWrapper } from './Task.styled';

export const Task: FunctionComponent<TaskModel.Single> = ({ description, title, status }) => (
  <TaskWrapper status={status} draggable>
    <h6>{title}</h6>
    <p>{description}</p>
  </TaskWrapper>
);
