import type { ProductCategory } from '../types/category';
import bracelet1 from '../assets/img/bracelets/bracelet1.jpg';
import cufflinks1 from '../assets/img/cufflinks/cufflinks1.jpg';
import necklace1 from '../assets/img/necklaces/necklace1.jpg';
import ring1 from '../assets/img/rings/ring1.jpg';

export const MOCK_CATEGORIES: ProductCategory[] = [
  { id: '1', image: bracelet1, title: 'Bracelets', slug: 'bracelets' },
  { id: '2', image: cufflinks1, title: 'Cufflinks', slug: 'cufflinks' },
  { id: '3', image: necklace1, title: 'Necklace', slug: 'necklaces' },
  { id: '4', image: ring1, title: 'Rings', slug: 'rings' },
];
