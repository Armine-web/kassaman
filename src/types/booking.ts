import type { Product } from '../types/product';

export type BookingState = {
  selectedItems: Product[];
  contactInfo: {
    fullName: string;
    phone: string;
    email?: string;
    contactMethod: 'phone' | 'telegram' | 'email';
    telegramUsername?: string;
  };
};
