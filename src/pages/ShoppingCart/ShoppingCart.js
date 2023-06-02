import { clsx } from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseProductCount,
  decreaseProductCount,
  removeProduct,
} from '~/redux/slices/orderSlice';

import styles from './ShoppingCart.module.scss';
import { routes as routesConfig } from '~/configs';

import Button from '~/components/Button';
import LoadMore from '~/components/LoadMore';
import Trans from '~/components/Trans';
import ItemShoppingCart from '~/components/ItemShoppingCart';

function ShoppingCart() {
  const dispatch = useDispatch();
  const {
    products,
    count: productCount,
    totalPrice,
  } = useSelector((state) => state.order);

  const handleRemove = (id, type) => {
    dispatch(removeProduct({ id, type }));
  };

  const handleIncrease = (id, type) => {
    dispatch(increaseProductCount({ id, type }));
  };

  const handleDecrease = (id, type) => {
    dispatch(decreaseProductCount({ id, type }));
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
            renderItem={(item) => (
              <ItemShoppingCart
                key={item.id}
                id={item.id}
                price={item.type.price}
                name={item.name}
                initialCount={item.count}
                image={item.image}
                type={item.type}
                onIncrease={() => handleIncrease(item.id, item.type)}
                onDecrease={() => handleDecrease(item.id, item.type)}
                onRemove={() => handleRemove(item.id, item.type)}
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
              to={routesConfig.checkout}
              isAllowed={productCount > 0}
              errorMessage={'You have no product in cart'}
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
