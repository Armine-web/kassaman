import { Flex, Typography } from 'antd';
import { useAppSelector } from '../../store/hook';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import GoogleLoginButton from './components/logeIn';
import AccountCard from './components/accountCard';
import BookingItem from './components/bookingItem';
import WishlistItem from './components/WishlistItem';
import { Line } from '../../components/common/AppearingLines';

const { Title } = Typography;

const Account = () => {
  const { t } = useTranslation();
  const user = useAppSelector(state => state.account.user);

  if (!user) {
    return <GoogleLoginButton />;
  }

  return (
    <section className="container">
      <div className={styles.accountSection}>
        <div className={styles.accountCardWrapper}>
          <Title level={4}>
            {t('account.hello')}, {user?.name}
          </Title>{' '}
          <AccountCard />
        </div>

        <div className={styles.accountWrapper}>
          <Flex vertical gap="small" align="center">
            <Line thin />
            <Line />
          </Flex>
          <BookingItem />
          <Flex vertical gap="small" align="center">
            <Line thin />
            <Line />
          </Flex>
          <WishlistItem />
          <Flex vertical gap="small" align="center" className={styles.buttonLine}>
            <Line thin />
            <Line />
          </Flex>
        </div>
      </div>
    </section>
  );
};

export default Account;
