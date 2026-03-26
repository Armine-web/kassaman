export type AccountState = {
  user: {
    name: string;
    email: string;
    phone: string;

  } | null;
  bookings: {
    id: string;
    inStock: boolean;
    title: string;
    date: string;
    price: number;
    currency: string;
    image: string;
  }[];
  wishlist: {
    id: string;
    inStock: boolean;
    title: string;
    image: string;
    price: number;
    currency: string;
  }[];
}