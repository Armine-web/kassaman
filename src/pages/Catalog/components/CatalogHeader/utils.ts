export const getTimeBasedGreeting = (t: any): string => {
  const hour = new Date().getHours();
  if (hour < 12) return t('common.goodMorning', 'Good Morning');
  if (hour < 18) return t('common.goodAfternoon', 'Good Afternoon');
  return t('common.goodEvening', 'Good Evening');
};

export const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};
