import AppDrawer from '../../../common/Drawer';
import MainMenu from '../MainMenu';
import { useTranslation } from 'react-i18next';
import User from '../User';
import type { MenuDrawerProps } from './type';
import styles from './styles.module.css';

const MenuDrawer = ({ open, onClose }: MenuDrawerProps) => {
  const { t } = useTranslation();

  return (
    <AppDrawer side="left" title="" open={open} onClose={onClose}>
      <MainMenu onClick={onClose} isDrawer />
      <div className={styles.drawerUser} onClick={onClose}>
        <User />
        <span className={styles.mobileUserText}>{t('contact.signIn')}</span>
      </div>
    </AppDrawer>
  );
};

export default MenuDrawer;
