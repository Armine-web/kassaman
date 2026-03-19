import i18n from '../index';

type CollectionField = 'name' | 'description';

export const getCollectionText = (
  collectionKey: string,
  field: CollectionField,
): string => {
  return i18n.t(`collections.${collectionKey}.${field}`, {
    defaultValue: collectionKey,
  });
};