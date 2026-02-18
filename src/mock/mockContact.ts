import type { ContactCardMock } from '../types/contact';

export const mockContactInfo: ContactCardMock[] = [
  {
    id: '1',
    icon: 'phone',
    titleKey: 'contact.callUs',
    descriptionKey: 'contact.callUsDescription',
    links: [
      {
        href: 'tel:+12377900610',
        labelKey: 'contact.phone',
        value: '+123 77 900610',
      },
    ],
  },
  {
    id: '2',
    icon: 'email',
    titleKey: 'contact.emailUs',
    descriptionKey: 'contact.emailUsDescription',
    links: [
      {
        href: 'mailto:kassaman.armenia@mail.ru',
        labelKey: 'contact.sendEmail',
      },
    ],
  },
  {
    id: '3',
    icon: 'location',
    titleKey: 'contact.visitUs',
    descriptionKey: 'contact.visitUsDescription',
    links: [
      {
        href: 'https://www.google.com/maps/search/?api=1&query=Khorenatsi+15,+Yerevan,+Armenia',
        labelKey: 'contact.adress',
        external: true,
      },
    ],
  },
  {
    id: '4',
    icon: 'clock',
    titleKey: 'contact.workingHours',
    descriptionKey: 'contact.workingHoursDescription',
    extraTextKey: 'contact.workingHoursSchedule',
  },
];
