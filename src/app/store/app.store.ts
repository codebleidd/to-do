import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from '../../domain/task/store/task.slice';

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
