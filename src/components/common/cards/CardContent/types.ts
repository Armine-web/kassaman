import type { ReactNode } from 'react';

export type CardContentProps = {
  title: ReactNode;
  description?: ReactNode;
  buttonText?: string;
  onBtnClick?: () => void;
  animate?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
  descClassName?: string;
};
