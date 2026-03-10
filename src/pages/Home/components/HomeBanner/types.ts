import type { Product } from '../../../../types/product';
export type Banner = {
  image: string;
  text: string;
  alt: string;
  product?: Product;
  cta: {
    book: string;
    shop: string;
  };
};
