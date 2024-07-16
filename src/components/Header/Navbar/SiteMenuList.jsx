import styles from '../Header.module.scss';

const navItems = ['男款', '女款', '最新消息', '客製商品'];

function NavItem({ item }) {
  return (
    <li className={styles.navItem}>
      <div className={styles.navLink} href="#">{item}</div>
    </li>
  )
}

export default function SiteMenuList() {
  return (
    <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      )
      )}
    </ul>
  )
}