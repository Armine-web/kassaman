import { useNavigate, useLocation } from 'react-router-dom';
import { useToggle } from '../../../hooks/useToggle';
import { useLang } from '../../../hooks/useLang';
import Logo from './Logo/index';
import MainMenu from './MainMenu';
import User from './User';
import BookingCart from './BookingCart';
import LanguageSwitcher from '../../common/LanguageSwitcher';
import ShoppingCart from './ShopCart';
import Hamburger from './Hamburger';
import ShoppingCartDrawer from './ShopCartDrawer';
import MenuDrawer from './MenuDrawer';
import styles from './styles.module.css';

const Header = () => {
  const { pathname } = useLocation();

  const isDarkHeader = pathname === '/' || pathname.startsWith('/home');

  const { currentLang, changeLanguage } = useLang();
  const navigate = useNavigate();

  const menu = useToggle();
  const cart = useToggle();

  return (
    <header
      className={`${styles.header} ${
        isDarkHeader ? styles['headerDark'] : styles['headerLight']
      }`}
    >
      <div className="container">
        <div className={styles.headerContent}>
          <Hamburger onClick={menu.toggle} />
          <div className={styles.logoContainer}>
            <Logo />
          </div>

          <div className={styles.menuDesktop}>
            <MainMenu />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.hideOnMobile}>
              <User />
            </div>
            <BookingCart count={0} onClick={() => navigate('/booking')} />
            <ShoppingCart count={0} onClick={cart.toggle} />
            <ShoppingCartDrawer open={cart.isOpen} onClose={cart.close} />
            <MenuDrawer open={menu.isOpen} onClose={menu.close} />
            <LanguageSwitcher currentLang={currentLang} onChange={changeLanguage} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
