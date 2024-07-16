import styles from './Header.module.scss';

import SiteMenuList from './Navbar/SiteMenuList';
import SiteActionList from './Navbar/SiteActionList';

import toggle from '../../assets/icons/toggle.svg';
import logo from '../../assets/icons/logo.svg';

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerContainer} mx-auto`}>

        <input id={styles.navbarToggle} className="navbarToggle" type="checkbox" />
        <label htmlFor="navbarToggle" className={styles.burgerContainer}>
          <img className={`${styles.iconToggle} cursor-point`} src={toggle} alt="toggleIcon" />
        </label>

        <nav className={styles.navbarMenu}>
          <SiteMenuList />
          <SiteActionList />
        </nav>

        <div className={styles.headerLogoContainer} href="#">
          <img className={`${styles.navIcon} cursor-point`} src={logo} alt="logoIcon" />
        </div>
      </div>
    </header>
  )
}