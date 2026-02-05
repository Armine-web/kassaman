import i18n from '../index';

type ProductField = 'name' | 'description';
type ProductFieldList = 'materials' | 'stones';

export const getProductText = (nameKey: string, field: ProductField): string => {
  return i18n.t(`products.${nameKey}.${field}`, { defaultValue: nameKey });
};

export const getProductFieldArray = (nameKey: string, field: ProductFieldList): string[] => {
  const value = i18n.t(`products.${nameKey}.${field}`, {
    returnObjects: true,
    defaultValue: [],
  });
  if (!Array.isArray(value)) return [];

  return value.filter((item): item is string => typeof item === 'string');
};

export const getProductMaterialsAndStones = (
  nameKey: string,
  separator: string = ', ',
): string | undefined => {
  const combined = [
    ...getProductFieldArray(nameKey, 'materials'),
    ...getProductFieldArray(nameKey, 'stones'),
  ];

  return combined.length ? combined.join(separator) : undefined;
};
