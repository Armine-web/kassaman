import { MOCK_PRODUCTS } from '../moc/mockProducts';
import type { Product } from '../types/product';

export const getProducts = async (categorySlug?: string): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (categorySlug && categorySlug.trim() !== '') {
        const filtered = MOCK_PRODUCTS.filter(product => product.category === categorySlug);
        resolve(filtered);
      } else {
        resolve(MOCK_PRODUCTS);
      }
    }, 800);
  });
};
