import type  { ReactNode } from 'react';

export type CategoryData = {
  id: string;
  icon: ReactNode;
  questions: number[];
}

export type FAQCategoryProps = {
  category: CategoryData;
}