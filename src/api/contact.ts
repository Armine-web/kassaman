import type { ContactRequest } from '../pages/Contact/components/ContactForm/types';

export const postContact = async (data: ContactRequest): Promise<void> => {
  const shouldFail = false;

  await new Promise(resolve => setTimeout(resolve, 1000));

  if (shouldFail) {
    throw new Error('Mock error');
  }

  console.log('Mock API received:', data);
};
