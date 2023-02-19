import { PageHeader } from '../app/component/PageHeader/PageHeader';
import { TaskForm } from '../domain/task/component/TaksForm/TaskForm';
import { TaskList } from '../domain/task/component/TaskList/TaskList';

export const IndexPage = () => (
  <div>
    <PageHeader />

    <TaskForm />

    <TaskList />
  </div>
);
