import type { LanguageItem } from './types';

export const getLanguageLabel = (item: LanguageItem) => {
  return item.label;
};

export const getLanguageIcon = (item: LanguageItem) => {
  return item.icon;
};
