import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice'; 
import accountReducer from './slices/accountSlice';
import wishlistReducer from './slices/wishlistSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    account: accountReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

