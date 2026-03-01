import type { Variants } from 'framer-motion';

export type HeaderImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  delay: number;
};

export type CatalogHeaderProps = {
  onCategoryClick?: (category: string) => void;
  showBreadcrumb?: boolean;
  title?: string;
  subtitle?: string;
};

export type ContainerVariant = Variants;
export type ItemVariant = Variants;
export type ImageVariant = Variants;
