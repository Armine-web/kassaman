export const truncateText = (text: string, maxLength: number = 24) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
