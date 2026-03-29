import { Dayjs } from 'dayjs';

export type PreferredContact = 'phone' | 'telegram' | 'email';
export type PaymentMethod = 'cash' | 'card' | 'bank' | 'paypal';

export type BookingItem = {
  id: string;
  quantity: number;
  images: string[];
  price: number;
  currency: string;
  nameKey: string;
};

export type BookingRequest = {
  items: { productId: string; quantity: number }[];
  customer: CheckoutFormValues['customer'];
  visit: {
    date: string;
    time: string;
    storeId: string;
  };
  paymentMethod: PaymentMethod;
  paymentDetails?: CardDetails;
  comment?: string;
};

export type CardDetails = {
  cardNumber: string;
  expiry: string;
  cvv: string;
};

export type CheckoutFormValues = {
  customer: {
    name: string;
    phone: string;
    email?: string;
    telegram?: string;
    preferredContact: PreferredContact;
  };
  visit: {
    date: Dayjs;
    time: Dayjs;
  };
  paymentMethod: PaymentMethod;
  paymentDetails?: CardDetails;
  comment?: string;
  consent: boolean;
};
