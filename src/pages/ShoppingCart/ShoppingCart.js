import { clsx } from 'clsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ShoppingCart.module.scss';
import { routes as routesConfig } from '~/configs';

import Button from '~/components/Button';
import LoadMore from '~/components/LoadMore';
import Trans from '~/components/Trans';
import ItemShoppingCart from '~/components/ItemShoppingCart';

function ShoppingCart() {
  const navigate = useNavigate();
  const {
    products,
    count: productCount,
    totalPrice,
  } = useSelector((state) => state.order);

  const handleCheckout = () => {
    if (productCount === 0) {
      return;
    }
    navigate(routesConfig.checkout);
  };

  return (
    <div className={clsx(['grid', 'wide', styles.wrapper])}>
      <h2 className={styles.title}>
        <Trans>Shopping Cart</Trans>
      </h2>
      <h3 className={styles.subTitle}>
        <span>{productCount} </span>
        <Trans>products in cart</Trans>
      </h3>
      <div className={clsx(['row', styles.main])}>
        <div className="col l-9 m-8 c-12">
          <LoadMore
            data={products}
            loadMoreLabel={<Trans>Load More</Trans>}
            collapseLabel={<Trans>Collapse</Trans>}
            noDataLabel={<Trans>There is no data to load</Trans>}
            autoHidden={false}
            canCollapse={true}
            controlClassName={styles.control}
            noDataClassName={styles.noData}
            itemsPerLoad={3}
            renderItem={(item, index) => (
              <ItemShoppingCart
                key={index}
                price={item.type.price}
                name={item.name}
                initialCount={item.count}
                image={item.image}
                id={item.id}
                type={item.type}
              />
            )}
          />
        </div>
        <div className={clsx(['col', 'l-3', 'm-4', 'c-12', styles.col2])}>
          <div className={styles.totalWrapper}>
            <h2 className={styles.total}>
              <Trans>Total Price</Trans>
            </h2>
            <h1 className={styles.totalPrice}>{totalPrice} đ</h1>
            <Button
              onClick={handleCheckout}
              primary
              className={styles.checkoutBtn}
            >
              <Trans>Checkout</Trans>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
