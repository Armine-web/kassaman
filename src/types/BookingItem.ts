import type { Product } from '../types/product';

export type BookingItem = Product & {
  date: string;
  inStock: boolean;
};
