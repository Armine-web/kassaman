import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'link' | 'shadow';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large';
  label?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};
