import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BookingState } from '../../types/booking';
import type { Product } from '../../types/product';

const initialState: BookingState = {
  selectedItems: [],
  contactInfo: {
    fullName: '',
    phone: '',
    contactMethod: 'phone',
  },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      const exists = state.selectedItems.find(item => item.id === action.payload.id);

      if (!exists) {
        state.selectedItems.push(action.payload);
      }
    },

    updateContactInfo: (state, action: PayloadAction<Partial<BookingState['contactInfo']>>) => {
      state.contactInfo = { ...state.contactInfo, ...action.payload };
    },

    removeSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItems = state.selectedItems.filter(item => item.id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.selectedItems.find(i => i.id === action.payload);
      if (item) item.quantity = (item.quantity || 1) + 1;
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.selectedItems.find(i => i.id === action.payload);
      if (item && item.quantity && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  setSelectedProduct,
  updateContactInfo,
  removeSelectedItem,
  increaseQuantity,
  decreaseQuantity,
} = bookingSlice.actions;
export default bookingSlice.reducer;
