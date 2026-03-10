export type CurrencyCode = "USD" | "AMD" | "EUR";

export type Product = {
  id: string | number;
  nameKey: string;
  price: number;
  currency: CurrencyCode;
  images: string[];
  category: string;   
  isNew?: boolean;
  inStock?: boolean;
 
}

export type CategoryItem = {
  id: string | number;
  slug: string;
  title: string;
  description?: string;
  products: Product[]; 
}
