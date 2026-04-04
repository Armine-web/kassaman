import type { Product } from './product';

export type WishlistState = {
  selectedItems: Product[];
  cartItems: (Product & { quantity?: number })[];
  cartOpen: boolean;
  contactInfo: {
    fullName: string;
    phone: string;
    email?: string;
    contactMethod: 'phone' | 'telegram' | 'email';
    telegramUsername?: string;
  };
   wishlist: Product[];
   bookings: Product[];
};
