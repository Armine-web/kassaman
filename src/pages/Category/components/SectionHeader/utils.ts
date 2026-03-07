export const formatSectionTitle = (title: string): string => {
  return title.trim().toUpperCase();
};

export const isLongDescription = (text: string): boolean => {
  return text.length > 150;
};
