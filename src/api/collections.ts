import { MOCK_COLLECTIONS } from '../mokc/mockCollections';
import type { ProductCollection } from '../types/collection';

export const getCollections = async (): Promise<ProductCollection[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(MOCK_COLLECTIONS), 500);
  });
};
