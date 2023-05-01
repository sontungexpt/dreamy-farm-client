import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Logo from '~/components/Layout/components/Logo';
import icons from '~/assets/images/icons';
import { Floater } from '~/components/Floater';

function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li>
            <Link to="/" className={styles.navbarLink}>
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/products" className={styles.navbarLink}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/recipes" className={styles.navbarLink}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className={styles.navbarLink}>
              About us
            </Link>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li>
            <Floater
              anchor={
                <div className={styles.search}>
                  <input type="text" placeholder="Search products" />
                  <img src={icons.search} alt="search" />
                </div>
              }
              render={'tooltip'}
            />
          </li>

          <li>
            <Link to="/favorite" className={styles.navbarLink}>
              <img src={icons.favorite} alt="favorite" />
            </Link>
          </li>
          <li>
            <Link to="/shoppingCart" className={styles.navbarLink}>
              <img src={icons.cart} alt="cart" />
            </Link>
          </li>
          <li>
            <Link to="/accounts" className={styles.navbarLink}>
              <img style={{ marginTop: '8px' }} src={icons.user} alt="user" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
