// libabry
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

// configs
import styles from './Header.module.scss';
import { routes as routesConfig } from '~/configs';

//components
import SearchBar from '~/components/SearchBar';
import Product from '~/components/SearchBar/Product';
import Logo from '~/assets/images/icons/Logo';
import CartIcon from './CartIcon';
import Avatar from './Avatar';
import ToggleIcon from '~/components/ToggleIcon';
import LinkCondition from '~/components/LinkCondition';
import {
  EmptyHeart as EmptyHeartIcon,
  FilledHeart as FilledHeartIcon,
} from '~/assets/images/icons/SvgIcons';

function Header() {
  const { t } = useTranslation('translations');
  const { count } = useSelector((state) => state.order);

  return (
    <header className={styles.wrapper}>
      <nav className={clsx(['grid', 'wide', styles.navbar])}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link to={routesConfig.root} className={styles.navbarLink}>
              <Logo />
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to={routesConfig.products} className={styles.navbarLink}>
              {t('Products')}
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to={routesConfig.recipes} className={styles.navbarLink}>
              {t('Recipes')}
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to={routesConfig.aboutUs} className={styles.navbarLink}>
              {t('About Us')}
            </Link>
          </li>
        </ul>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <SearchBar
              inputClassName={styles.inputSearchBar}
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
              placeholder={t('Search products')}
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

          <li className={styles.navbarItem}>
            <Link
              to={routesConfig.userInfos.wishlist}
              className={styles.navbarLink}
            >
              <ToggleIcon
                activeIcon={<FilledHeartIcon />}
                unActiveIcon={<EmptyHeartIcon color="var(--red-color)" />}
                customEvent={() => {
                  if (1) return true;
                  else return false;
                }}
              />
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <LinkCondition
              isAllowed={count > 0}
              to={routesConfig.shoppingCart}
              className={styles.navbarLink}
              errorMessage={t('Your cart is empty')}
            >
              <CartIcon />
            </LinkCondition>
          </li>
          <li className={styles.navbarItem}>
            <Avatar />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
