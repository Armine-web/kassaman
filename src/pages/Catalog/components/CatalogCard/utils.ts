export const getCurrencySymbol = (currency: string | undefined): string => {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'AMD':
    default:
      return '֏';
  }
};

export const formatProductName = (key: string): string => {
  if (!key) return '';
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
};
