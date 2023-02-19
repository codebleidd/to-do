import { TaskStatus } from './Task.enum';

export declare namespace TaskModel {
  export type Single = {
    title: string;
    description: string;
    status: TaskStatus;
  };
}
