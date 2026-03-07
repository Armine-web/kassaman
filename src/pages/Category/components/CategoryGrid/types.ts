export type CurrencyCode = 'USD' | 'AMD' | 'EUR';
export type Product = {
  id: string | number;
  nameKey: string;
  price: number;
  currency: CurrencyCode;
  images: string[];
  category: string;
  isNew?: boolean;
  inStock?: boolean;
};

export type ProductGridProps = {
  products: Product[];
};
