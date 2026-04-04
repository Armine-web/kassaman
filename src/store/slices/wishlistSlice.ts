import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { WishlistState } from '../../types/wishlist';
import type { Product } from '../../types/product';
import type { BookingItem } from '../../types/BookingItem';

const initialState: WishlistState = {
  cartItems: [],
  cartOpen: false,
  contactInfo: {
    fullName: '',
    phone: '',
    contactMethod: 'phone',
  },
  wishlist: [],
  bookings: [],
  selectedItems: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.wishlist.find(item => item.id === action.payload.id);
      if (exists) {
        state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
      } else {
        state.wishlist = [...state.wishlist, action.payload];
      }
    },

    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.cartOpen = action.payload;
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.wishlist.find(i => i.id === action.payload.id);

      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    removeWishlistItem: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
    },

    moveWishlistToBookings: (state, action: PayloadAction<string>) => {
      const item = state.wishlist.find(i => i.id === action.payload);

      if (item) {
        const bookingItem: BookingItem = {
          ...item,
          date: new Date().toISOString().split('T')[0],
          inStock: true,
        };

        state.bookings.push(bookingItem);

        state.wishlist = state.wishlist.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const {
  toggleWishlist,
  addToCart,
  moveWishlistToBookings,
  removeWishlistItem,
  addToWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
