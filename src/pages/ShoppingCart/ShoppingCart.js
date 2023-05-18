import ItemShoppingCart from './ItemShoppingCart.js';
import { useMemo, useState } from 'react';
import { clsx } from 'clsx';

import styles from './ShoppingCart.module.scss';
import { routes as routesConfig } from '~/configs';
import Button from '~/components/Button';
import LoadMore from '~/components/LoadMore';

function ShoppingCart() {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 },
    { name: 'Product 4', price: 400 },
    { name: 'Product 5', price: 100 },
    { name: 'Product 6', price: 100 },
    { name: 'Product 7', price: 100 },
    { name: 'Product 8', price: 100 },
    { name: 'Product 9', price: 100 },
  ]);

  const handleRemoveProduct = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };

  const totalPrice = useMemo(() => {
    const totalPrice = products.reduce(
      (accumulator, product) => accumulator + parseFloat(product.price),
      0,
    );
    return totalPrice;
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <h3 className={styles.subTitle}>
        {`${products.length} products in cart`}
      </h3>

      <div className={styles.main}>
        <LoadMore
          data={products}
          className={clsx([styles.leftWrapper])}
          autoHidden={false}
          canCollapse={true}
          controlClassName={styles.control}
          renderItem={(item, index) => (
            <ItemShoppingCart
              key={index}
              price={item.price}
              name={item.name}
              onRemove={() => handleRemoveProduct(index)}
            />
          )}
        />
        <div className={styles.rightWrapper}>
          <div className={styles.total}>
            <h2>Total Price</h2>
          </div>
          <div className={styles.totalPrice}>
            <h1>{totalPrice}đ</h1>
          </div>
          <Button
            to={routesConfig.checkout}
            primary
            className={styles.checkoutBtn}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
