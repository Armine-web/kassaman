import type { ReactNode } from 'react';

export type VisualCardProps = {
  image: {
    src: string;
    alt?: string;
  };
  children?: ReactNode;
  onClick?: () => void;
  hoverEffect?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  imgClassName?: string;
};
