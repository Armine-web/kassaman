import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AccountState } from '../../types/account';
import { MOCK_PRODUCTS } from '../../mock/mockProducts';
import { getProductText } from '../../i18n/utils/product';

// const initialState: AccountState = {
//   user: null,
//   bookings: [],
//   wishlist: [],
// };

const initialState: AccountState = {
  user: {
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: '+374 00000000',
  },
  bookings: MOCK_PRODUCTS.slice(0, 4).map(product => ({
    id: product.id,
    title: getProductText(product.nameKey, 'name'),
    date: '2026-04-10',
    price: product.price,
    currency: product.currency,
    image: product.images[0],
    inStock: product.inStock,
  })),

  wishlist: MOCK_PRODUCTS.slice(-6).map(product => ({
    id: product.id,
    title: getProductText(product.nameKey, 'name'),
    image: product.images[0],
    price: product.price,
    currency: product.currency,
    inStock: product.inStock,
  })),
  wishlistItems: [],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AccountState['user']>) => {
      state.user = action.payload;
    },

    logout: state => {
      state.user = null;
      state.bookings = [];
      state.wishlist = [];
      state.wishlistItems = [];
    },

    setBookings: (state, action: PayloadAction<AccountState['bookings']>) => {
      state.bookings = action.payload;
    },

    removeBookingItem: (state, action: PayloadAction<string>) => {
      state.bookings = state.bookings.filter(item => item.id !== action.payload);
    },

    setWishlist: (state, action: PayloadAction<AccountState['wishlist']>) => {
      state.wishlist = action.payload;
    },

    addWishlistItem: (state, action: PayloadAction<AccountState['wishlist'][0]>) => {
      const exists = state.wishlist.find(item => item.id === action.payload.id);

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
        state.bookings.push({
          id: item.id,
          title: item.title,
          image: item.image,
          date: new Date().toISOString().split('T')[0],
          price: item.price,
          currency: item.currency,
          inStock: true,
        });

        state.wishlist = state.wishlist.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const {
  setUser,
  logout,
  setBookings,
  setWishlist,
  addWishlistItem,
  removeWishlistItem,
  moveWishlistToBookings,
  removeBookingItem,
} = accountSlice.actions;

export default accountSlice.reducer;
