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
  const { favoriteProducts } = useSelector((state) => state.user);

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
                  title: 'Apple',
                  price: 100,
                },
                {
                  title: 'Organge',
                  price: 400,
                },
                {
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
                customEvent={() => favoriteProducts.length > 0}
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
