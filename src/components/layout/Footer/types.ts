export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};
export type SocialLink = {
  icon: string;
  href: string;
  label: string;
};
export type ContactInfo = {
  phone: string;
  email: string;
}
