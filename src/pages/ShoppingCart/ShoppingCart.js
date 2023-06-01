import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import styles from './ShoppingCart.module.scss';
import { routes as routesConfig } from '~/configs';

import Button from '~/components/Button';
import LoadMore from '~/components/LoadMore';
import ItemShoppingCart from './ItemShoppingCart.js';

function ShoppingCart() {
  const { t } = useTranslation('translations');
  const {
    products,
    count: productCount,
    totalPrice,
  } = useSelector((state) => state.order);

  const handleRemoveProduct = (index) => {};

  const handleCheckout = () => {
    console.log(products);
  };

  return (
    <div className={clsx(['grid', 'wide', styles.wrapper])}>
      <h2 className={styles.title}>{t('Shopping Cart')}</h2>
      <h3 className={styles.subTitle}>
        {productCount} {t('products in cart')}
      </h3>
      <div className={clsx(['row', styles.main])}>
        <div className="col l-9 m-8 c-12">
          <LoadMore
            data={products}
            loadMoreLabel={t('Load More')}
            collapseLabel={t('Collapse')}
            noDataLabel={t('There is no data to load')}
            autoHidden={false}
            canCollapse={true}
            controlClassName={styles.control}
            noDataClassName={styles.noData}
            itemsPerLoad={3}
            renderItem={(item, index) => (
              <ItemShoppingCart
                key={index}
                price={item.price}
                name={item.name}
                initialCount={item.count}
                image={item.image}
                id={item.id}
                type={item.type}
                onRemove={handleRemoveProduct}
              />
            )}
          />
        </div>
        <div className={clsx(['col', 'l-3', 'm-4', 'c-12', styles.col2])}>
          <div className={styles.totalWrapper}>
            <h2 className={styles.total}>{t('Total Price')}</h2>
            <h1 className={styles.totalPrice}>{totalPrice}</h1>
            <Button
              // to={routesConfig.checkout}
              onClick={handleCheckout}
              primary
              className={styles.checkoutBtn}
            >
              {t('Checkout')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
