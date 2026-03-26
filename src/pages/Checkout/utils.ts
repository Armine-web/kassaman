import type { BookingRequest } from './types';

export const submitBooking = async (payload: BookingRequest): Promise<boolean> => {
  console.log('POST /api/bookings Request Payload:', payload);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};
