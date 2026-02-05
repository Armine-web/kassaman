import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('booking.title')}</h1>
      <p>{t('booking.description')}</p>
    </div>
  );
};

export default Booking;
