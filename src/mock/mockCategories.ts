import type { ProductCategory } from '../types/category';
import braceletPearl from '../assets/img/bracelets/braceletPearl.jpg';
import cufflinksWoman from '../assets/img/cufflinks/cufflinksWoman.jpg';
import necklaceWoman from '../assets/img/necklaces/necklaceWoman.jpg';
import ringMan from '../assets/img/rings/ringMan.jpg';
import acvamarinEarring from '../assets/img/earrings/acvamarinEarring.jpg';

export const MOCK_CATEGORIES: ProductCategory[] = [
  { id: '1', image: braceletPearl, title: 'Bracelets', slug: 'bracelets' },
  { id: '2', image: cufflinksWoman, title: 'Cufflinks', slug: 'cufflinks' },
  { id: '3', image: necklaceWoman, title: 'Necklace', slug: 'necklaces' },
  { id: '4', image: ringMan, title: 'Rings', slug: 'rings' },
  { id: '5', image: acvamarinEarring, title: 'Earrings', slug: 'earrings' },
];
