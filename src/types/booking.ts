import type { Product } from '../types/product';

export type BookingState = {
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
};
