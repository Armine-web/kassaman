export type ProductPreview = {
  id: string | number;
  nameKey: string;
  name?: string;
  price: number;
  currency?: 'AMD' | 'USD' | 'EUR';
  image: string;
  isNew?: boolean;
  inStock?: boolean;
  slug?: string;
  shortDescription?: string;
};

export type CatalogCardProps = {
  product: ProductPreview;
  onClick?: (id: string | number) => void;
};

export type PartialProductPreview = Partial<ProductPreview>;
