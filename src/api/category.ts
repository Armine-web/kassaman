import { MOCK_CATEGORIES } from '../moc/mockCategories';
import type { ProductCategory } from '../types/category';

export const getCategories = async (): Promise<ProductCategory[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_CATEGORIES);
    }, 500);
  });
};
