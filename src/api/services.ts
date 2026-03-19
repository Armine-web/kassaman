import type { IServiceInquiry } from '../pages/Services/components/ServiceForm/types';

export const postServiceInquiry = async (
  data: IServiceInquiry,
): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;

      if (isSuccess) {
        console.log('MOCK API [POST] /inquiries:', data);
        resolve({ success: true, message: 'Inquiry received' });
      } else {
        reject(new Error('Server timeout'));
      }
    }, 1500);
  });
};
