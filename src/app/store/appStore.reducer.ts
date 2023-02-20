import { combineReducers } from '@reduxjs/toolkit';
import { taskSlice } from '../../domain/task/store/task.slice';

export const reducers = combineReducers({
  task: taskSlice.reducer,
});
