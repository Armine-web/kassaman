import type { PreferredContact, PaymentMethod } from './types';

export const BOUTIQUE_ADDRESS = '15 Մովսես Խորենացի  Փողոց, Երևան, Հայաստան' as const;

type ContactOption = {
  value: PreferredContact;
  label: string;
};

type PaymentOption = {
  value: PaymentMethod;
  label: string;
};

export const CONTACT_METHODS: readonly ContactOption[] = [
  { value: 'phone', label: 'Phone' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'email', label: 'Email' },
] as const;

export const PAYMENT_METHODS: readonly PaymentOption[] = [
  { value: 'cash', label: 'Cash at Boutique' },
  { value: 'card', label: 'Credit Card' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'bank', label: 'Bank Transfer' },
] as const;
