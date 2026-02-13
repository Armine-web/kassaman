import type { TFunction } from 'i18next';

export const getOurStoryContent = (t: TFunction) => ({
  title: t('aboutUs.ourStory.title'),
  description: t('aboutUs.ourStory.description', { returnObjects: true }) as string[]
});