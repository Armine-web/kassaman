import { MOCK_PRODUCTS } from '../../../../mock/mockProducts';
import type { Banner } from './types';

export const HeroBanners: Banner[] = MOCK_PRODUCTS.filter(p => p.isHeroBanner).map(
  (product, index) => ({
    image: product.images[0],
    product,
    text: `home.heroBanners.${index}.text`,
    alt: `home.heroBanners.${index}.alt`,
    cta: {
      book: `home.heroBanners.${index}.cta.book`,
      shop: `home.heroBanners.${index}.cta.shop`,
    },
  }),
);
