import { taskSlice } from './task.slice';

export class TaskAction {
  static create = taskSlice.actions.createTask;

  static remove = taskSlice.actions.removeTask;

  static changeTaskStatus = taskSlice.actions.changeTaskStatus;
}
