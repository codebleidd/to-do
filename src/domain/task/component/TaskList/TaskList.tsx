import { TaskStatusEnum } from '../../model/Task.enum';
import { TaskModel } from '../../model/Task.model';
import { TaskColumn } from './TaskColumn';
import { TaskListStyled } from './TaskList.styled';

const openData: TaskModel.Single[] = [
  {
    id: 'test-id',
    title: 'Test to-do',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ea eos quaerat dolore sit mollitia est recusandae suscipit asperiores facilis.',
    status: TaskStatusEnum.OPEN,
  },
];
const pendingData: TaskModel.Single[] = [
  {
    id: 'test-id',
    title: 'Test to-do',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ea eos quaerat dolore sit mollitia est recusandae suscipit asperiores facilis.',
    status: TaskStatusEnum.PENDING,
  },
];
const closedData: TaskModel.Single[] = [
  {
    id: 'test-id',
    title: 'Test to-do',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ea eos quaerat dolore sit mollitia est recusandae suscipit asperiores facilis.',
    status: TaskStatusEnum.CLOSED,
  },
];

export const TaskList = () => (
  <TaskListStyled>
    <TaskColumn tasks={openData} columnStatus={TaskStatusEnum.OPEN} />
    <TaskColumn tasks={pendingData} columnStatus={TaskStatusEnum.PENDING} />
    <TaskColumn tasks={closedData} columnStatus={TaskStatusEnum.CLOSED} />
  </TaskListStyled>
);
