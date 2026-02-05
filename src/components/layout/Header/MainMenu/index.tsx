import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MENU_ITEMS } from './const';
import type { MainMenuProps } from './types';
import styles from './styles.module.css';

const MainMenu = ({ onClick, isDrawer = false }: MainMenuProps) => {
  const { t } = useTranslation();

  return (
    <nav className={`${styles.nav} ${isDrawer ? styles.drawerNav : ''}`}>
      <ul className={`${styles.navList} ${isDrawer ? styles.drawerList : ''}`}>
        {MENU_ITEMS.map(item => (
          <li key={item.label} className={styles.navItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `${isActive ? styles.active : ''} underlineEffect`}
              onClick={onClick}
            >
              {t(`${item.label}.title`)}
              <span className={styles.underline}></span>
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  );
};

export default MainMenu;
