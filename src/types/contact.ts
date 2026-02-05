export type ContactLinkMock = {
  href: string;
  labelKey: string;
  value?: string;
  external?: boolean;
};

export type ContactCardMock = {
  id: string;
  icon: 'phone' | 'email' | 'location' | 'clock';
  titleKey: string;
  descriptionKey?: string;
  links?: ContactLinkMock[];
  extraTextKey?: string;
};
