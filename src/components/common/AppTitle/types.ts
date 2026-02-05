import type { ReactNode } from 'react';

export type AppTitleProps = {
  as?: 'h1' | 'h2' | 'div' | 'span';
  variant?: 'pageTitle' | 'sectionTitle' | 'cardTitle';
  inline?: boolean;
  children: ReactNode;
  className?: string;
};
