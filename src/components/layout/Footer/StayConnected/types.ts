export type SocialLink = {
  icon: string;
  href: string;
  label: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
};

export type StayConnectedProps = {
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
  onOpenModal: () => void;
};


