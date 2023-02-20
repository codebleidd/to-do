import { appTheme } from '../../../app/theme/theme';
import { TaskStatusEnum } from './Task.enum';

export class TaskHelper {
  static getTaskColorByStatus(taskStatus: TaskStatusEnum) {
    return {
      [TaskStatusEnum.OPEN]: appTheme.color.palette.blue[800],
      [TaskStatusEnum.PENDING]: appTheme.color.warning,
      [TaskStatusEnum.CLOSED]: appTheme.color.success,
    }[taskStatus];
  }

  static getTaskColumnLabelByStatus(taskStatus: TaskStatusEnum) {
    return {
      [TaskStatusEnum.OPEN]: 'Open tasks',
      [TaskStatusEnum.PENDING]: 'Pending tasks',
      [TaskStatusEnum.CLOSED]: 'Closed tasks',
    }[taskStatus];
  }

  static getIsTransferAllowed(taskStatus: TaskStatusEnum, destinationStatus: TaskStatusEnum) {
    return {
      [TaskStatusEnum.CLOSED]: [TaskStatusEnum.PENDING, TaskStatusEnum.OPEN],
      [TaskStatusEnum.PENDING]: [TaskStatusEnum.OPEN],
      [TaskStatusEnum.OPEN]: [] as TaskStatusEnum[],
    }[destinationStatus].includes(taskStatus);
  }
}
