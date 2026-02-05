import type { ReactNode } from 'react';

export type BaseCardProps = {
  image?: {
    src: string;
    alt?: string;
  };
  children: ReactNode;
  imageNode?: ReactNode;
  onImageClick?: () => void;
  width?: string | number;
  height?: string | number;
  className?: string;
  imageClassName?: string;
};
