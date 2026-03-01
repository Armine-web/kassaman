export type SortOption = 'newest' | 'price_asc' | 'price_desc' | 'popular';

export type SortBarProps = {
  onSortChange?: (value: SortOption) => void;
};

export interface FilterState {
  categories?: string[];
  metals?: string[];
  stones?: string[];
  priceRange?: [number, number];
}
