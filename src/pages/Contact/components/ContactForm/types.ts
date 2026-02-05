export type PreferredContact = 'phone' | 'telegram' | 'email';

export type ContactRequest = {
  fullName: string;
  phone: string;
  email?: string;
  telegram?: string;
  preferredContact: PreferredContact;
  topic: string;
  message: string;
  consent: boolean;
}
