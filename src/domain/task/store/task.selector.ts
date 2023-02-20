import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../../app/store/appStore';
import { TaskStatusEnum } from '../model/Task.enum';

export class TaskSelector {
  static getDomain = (state: AppState) => state.task;

  static getTaskList = createSelector(TaskSelector.getDomain, (state) => state);

  static getTasksByStatus = (status: TaskStatusEnum) =>
    createSelector(TaskSelector.getTaskList, (list) =>
      list.filter((task) => task.status === status),
    );
}
