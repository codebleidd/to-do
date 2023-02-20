import { useState } from 'react';
import { TaskStatusEnum } from '../../model/Task.enum';
import { TaskColumn } from './TaskColumn';
import { TaskListStyled } from './TaskList.styled';

export const TaskList = () => {
  const [draggedTaskType, setDraggedTaskType] = useState<null | TaskStatusEnum>(null);

  return (
    <TaskListStyled>
      {Object.values(TaskStatusEnum).map((taskStatus) => (
        <TaskColumn
          key={taskStatus}
          columnStatus={taskStatus}
          setDraggedTaskType={setDraggedTaskType}
          draggedTaskType={draggedTaskType}
        />
      ))}
    </TaskListStyled>
  );
};
