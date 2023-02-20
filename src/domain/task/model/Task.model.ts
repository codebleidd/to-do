import { TaskStatusEnum } from './Task.enum';

export declare namespace TaskModel {
  export type Single = {
    id: string;
    title: string;
    description: string;
    status: TaskStatusEnum;
  };

  export type Create = {
    title: string;
    description: string;
  };
}
