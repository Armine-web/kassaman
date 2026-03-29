import type { ReactNode } from 'react';

export type FAQCategoryType = {
  id: string;
  icon: ReactNode;
  questions: number[]; 
}

export type FAQProps = {
  searchQuery: string;
  onSearch: (value: string) => void;
}