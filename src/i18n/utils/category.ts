import i18n from '../index';

export const getCategoryTranslation = (category: string) =>
  i18n.t(`categories.${category}.title`, {
    defaultValue: category,
  });