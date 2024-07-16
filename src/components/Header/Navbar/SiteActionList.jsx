import styles from '../Header.module.scss';

import search from '../../../assets/icons/search.svg';
import cart from '../../../assets/icons/cart.svg';
import moon from '../../../assets/icons/moon.svg';

const iconImg = [
  {
    src: search,
    alt: 'searchIcon'
  },
  {
    src: cart,
    alt: 'cartIcon'
  },
  {
    src: moon,
    alt: 'moonIcon'
  }
]

function NavIcon({src, alt}) {
  return (
    <li className={styles.navItem}>
      <img className={`${styles.navIcon} cursor-point`} src={src} alt={alt} />
    </li>
  )
}

export default function SiteActionList() {
  return (
    <ul className={`${styles.navList} ${styles.SiteActionList}`} >
      {iconImg.map((icon, index) => (
        <NavIcon key={index} src={icon.src} alt={icon.alt} />
      ))}
    </ul>
  )
}