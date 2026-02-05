import type { FooterColumn, SocialLink } from './types';

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'help',
    links: [
      { label: 'faq', href: '/faq' },
      { label: 'contactUs', href: '/contact-us' },
      { label: 'ourServices', href: '/ our-services' },
      { label: 'booking', href: '/booking' },
      { label: 'checkout', href: '/checkout' },
      { label: 'workingHours', href: '/contact' },
    ],
  },
  {
    title: 'resources',
    links: [
      { label: 'catalog', href: '/catalog' },
      { label: 'collections', href: '/collections' },
      { label: 'product', href: '/catalog' },
      { label: 'payment', href: '/checkout' },
      { label: 'followUs', href: '/contact' },
      { label: 'address', href: '/contact' },
    ],
  },
  {
    title: 'about',
    links: [
      { label: 'blog', href: '/blog' },
      { label: 'aboutUs', href: '/about' },
      { label: 'rings', href: '/catalog' },
      { label: 'bracelets', href: '/catalog' },
      { label: 'cufflinks', href: '/catalog' },
      { label: 'necklaces', href: '/catalog' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'TwitterOutlined', href: 'https://twitter.com', label: 'footer.social.twitter' },
  { icon: 'FacebookOutlined', href: 'https://facebook.com', label: 'footer.social.facebook' },
  { icon: 'InstagramOutlined', href: 'https://instagram.com', label: 'footer.social.instagram' },
  { icon: 'YoutubeOutlined', href: 'https://youtube.com', label: 'footer.social.youtube' },
];

export const CONTACT_INFO = {
  phone: '+374 77900610',
  email: 'kassaman.armenia@mail.ru',
};


