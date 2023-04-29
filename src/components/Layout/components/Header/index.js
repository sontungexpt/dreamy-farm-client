import { clsx } from 'clsx';
import styles from './Header.module.scss';
import Logo from '~/components/Layout/components/Logo';
import icons from '~/assets/images/icons';

function Header() {
  return (
    <header className={clsx([styles.wrapper])}>
      <nav className={clsx([styles.navbar])}>
        <ul className={clsx([styles.navbarList])}>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              <Logo />
            </a>
          </li>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              Products
            </a>
          </li>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              Recipes
            </a>
          </li>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              About us
            </a>
          </li>
        </ul>
        <ul className={clsx([styles.navbarList])}>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              <img src={icons.search} alt="search" />
            </a>
          </li>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              <img src={icons.favorite} alt="favorite" />
            </a>
          </li>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              <img src={icons.cart} alt="cart" />
            </a>
          </li>
          <li>
            <a href="/" className={clsx([styles.navbarLink])}>
              <img style={{ marginTop: '8px' }} src={icons.user} alt="user" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
