import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatusEnum } from '../model/Task.enum';
import { TaskModel } from '../model/Task.model';

export const taskSlice = createSlice({
  name: 'task',
  initialState: [] as TaskModel.Single[],
  reducers: {
    createTask: (state, action: PayloadAction<TaskModel.Create>) => [
      ...state,
      { ...action.payload, id: uuidv4(), status: TaskStatusEnum.OPEN },
    ],

    removeTask: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.id !== action.payload),

    changeTaskStatus: (state, action: PayloadAction<{ id: string; status: TaskStatusEnum }>) =>
      state.map((item) =>
        item.id === action.payload.id ? { ...item, status: action.payload.status } : item,
      ),
  },
});
