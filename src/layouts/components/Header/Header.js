// libabry
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

// configs
import styles from './Header.module.scss';
import { routes as routesConfig } from '~/configs';

//components
import SearchBar from '~/components/SearchBar';
import Product from '~/components/SearchBar/Product';
import Logo from '~/assets/images/icons/Logo';
import {
  EmptyHeart as EmptyHeartIcon,
  Cart as CartIcon,
  User as UserIcon,
} from '~/assets/images/icons/SvgIcons';

function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={clsx(['grid', 'wide', styles.navbar])}>
        <ul className={styles.navbarList}>
          <li>
            <Link to={routesConfig.root} className={styles.navbarLink}>
              <Logo />
            </Link>
          </li>
          <li>
            <Link to={routesConfig.products} className={styles.navbarLink}>
              Products
            </Link>
          </li>
          <li>
            <Link to={routesConfig.recipes} className={styles.navbarLink}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to={routesConfig.aboutUs} className={styles.navbarLink}>
              About us
            </Link>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li>
            <SearchBar
              data={[
                {
                  image:
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                  title: 'Apple',
                  price: 100,
                },
                {
                  image:
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                  title: 'Organge',
                  price: 400,
                },
                {
                  image:
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                  title: 'afda',
                  price: 300,
                },
              ]}
              mediumLength
              placeholder="Search products"
              floaterWrapperTitle="Products"
              searchValue={(item) => item.title}
              renderItem={(item, active) => (
                <Product
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  active={active}
                />
              )}
            />
          </li>

          <li>
            <Link to={routesConfig.wishList} className={styles.navbarLink}>
              <EmptyHeartIcon />
            </Link>
          </li>
          <li>
            <Link to={routesConfig.shoppingCart} className={styles.navbarLink}>
              <CartIcon />
            </Link>
          </li>
          <li>
            <Link to={routesConfig.login} className={styles.navbarLink}>
              <UserIcon style={{ marginTop: '7px' }} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
