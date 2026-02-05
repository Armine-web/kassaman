import { type ReactNode } from 'react';

export type AppDrawerProps = {
  side?: 'left' | 'right';
  title?: string;
  open: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
};
