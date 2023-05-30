import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menuSlice';
import orderSlice from './orderSlice';
import { userSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    order: orderSlice,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
