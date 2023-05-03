import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Logo from '~/components/Layout/components/Logo';
import icons from '~/assets/images/icons';
import SearchBar from '~/components/SearchBar';
import Product from '~/components/SearchBar/Product';

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
            <SearchBar
              onEnter={() => console.log('onKeyDown')}
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
