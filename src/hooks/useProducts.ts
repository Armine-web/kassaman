import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

export const useProducts = (categorySlug?: string) => {
  return useQuery({
    queryKey: categorySlug ? ['products', categorySlug] : ['products'],
    queryFn: () => getProducts(categorySlug),
    // staleTime: 1000 * 60 * 5,
  });
};
