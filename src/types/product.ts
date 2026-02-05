export type CategorySlug = 'rings' | 'necklaces' | 'bracelets' | 'cufflinks' | (string & {});

export type Collection = 'signature' | 'timeless' | 'prestige' | 'wedding';

export type Material =
  | 'yellowGold'
  | 'whiteGold'
  | 'roseGold'
  | 'silver'
  | 'platinum'
  | 'leather'
  | 'steel'
  | 'beaded';

export type Stone = 'diamond' | 'emerald' | 'sapphire' | 'lazuli' | 'pearl' | 'swarovski';

export type Gender = 'men' | 'women';

export type Currency = 'USD' | 'RUB' | 'AMD';

export type Product = {
  id: string;
  nameKey: string;
  category: CategorySlug;
  collections: Collection[];
  material?: Material[];
  stone?: Stone[];
  gender: Gender;
  price: number;
  currency: Currency;
  image: string;
  inStock: boolean;
};
