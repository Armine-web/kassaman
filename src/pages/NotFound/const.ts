import bgImage from '../../assets/img/bracelets/braceletCross.jpg';
export const NOT_FOUND_TRANSLATIONS = {
  codeLabel: 'error.404.code_label',
  subtitle: 'error.404.subtitle',
  homeLink: 'error.404.links.home',
  catalogLink: 'error.404.links.catalog',
} as const;

export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog',
} as const;

export const ASSETS = {
  BG_IMAGE: bgImage,
};
