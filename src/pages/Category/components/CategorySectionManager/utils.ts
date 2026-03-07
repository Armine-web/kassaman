import { MOCK_CATEGORIES } from '../../../../mock/mockCategories';
import { MOCK_PRODUCTS } from '../../../../mock/mockProducts';
import type { CategoryItem } from './types';

export const getCategories = async (): Promise<CategoryItem[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const enriched = MOCK_CATEGORIES.map(cat => ({
        ...cat,

        products: MOCK_PRODUCTS.filter(prod => prod.category === cat.slug),
      }));

      resolve(enriched as CategoryItem[]);
    }, 400);
  });
};
