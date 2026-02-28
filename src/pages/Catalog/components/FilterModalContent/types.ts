export type FilterSidebarProps = {
  onFilterChange?: (filters: FilterState) => void;
};

export type FilterState = {
  categories?: string[];
  metals?: string[];
  stones?: string[];
  priceRange?: [number, number];
};

export type FilterModalContentProps = {
  onClose: () => void;
  selectedCategory?: string | undefined;
};
