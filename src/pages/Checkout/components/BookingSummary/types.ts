import type { BookingItem } from '../../types';

export type SummaryProps = {
  items: BookingItem[];
  t: (key: string) => string;
};
