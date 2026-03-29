import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice'; 
import accountReducer from './slices/accountSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

