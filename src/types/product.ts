export type CategorySlug =
  | 'rings'
  | 'necklaces'
  | 'bracelets'
  | 'cufflinks'
  | 'earrings'
  | (string & {});

export type Collection = 'signature' | 'timeless' | 'prestige' | 'wedding' | 'anna' | 'Tiger Eye';

export type Material =
  | 'yellowGold'
  | 'whiteGold'
  | 'roseGold'
  | 'silver'
  | 'platinum'
  | 'leather'
  | 'steel'
  | 'beaded';

export type Stone =
  | 'diamond'
  | 'emerald'
  | 'sapphire'
  | 'lazuli'
  | 'pearl'
  | 'swarovski'
  | 'aquamarine'
  | 'rubellite'
  | 'tourmaline'
  | 'blackPearl'
  | 'spinel';

export type Gender = 'men' | 'women';

export type Currency = 'USD' | 'RUB' | 'AMD';

export type Product = {
  id: string;
  nameKey: string;
  category: CategorySlug;
  collections: String[];
  material?: Material[];
  stone?: Stone[];
  gender: Gender;
  price: number;
  currency: Currency;
  images: string[];
  inStock: boolean;
  quantity: number;
  isHeroBanner: boolean;
  sku?: string;
  descriptionKey?: string;
  weight?: string;
  size?: string;

  isNew: boolean;
};
