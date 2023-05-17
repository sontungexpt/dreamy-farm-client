import ItemShoppingCart from './ItemShoppingCart.js';
import { useMemo, useEffect, useState } from 'react';
import { productsPageConfigs as configs } from '~/configs/pages';
import { clsx } from 'clsx';
import styles from './ShoppingCart.module.scss';

function ShoppingCart() {
  const [pageOffset, setPageOffset] = useState(0);
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

  const itemsPerPage = 2;

  const displayProducts = useMemo(() => {
    const itemsVisited = pageOffset * itemsPerPage;
    return products.slice(0, itemsVisited + itemsPerPage);
  }, [products, pageOffset]);

  const handleLoadMore = () => {
    setPageOffset((prevOffset) => prevOffset + 1);
  };

  const handleRemoveProduct = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (accumulator, product) => accumulator + parseFloat(product.price),
      0,
    );
    return totalPrice;
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <h3
        className={styles.subtitle}
      >{`${products.length} products in cart`}</h3>

      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          {displayProducts.map((product, index) => (
            <ItemShoppingCart
              key={index}
              price={product.price}
              name={product.name}
              onRemove={() => handleRemoveProduct(index)}
            />
          ))}
          {displayProducts.length < products.length && (
            <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.total}>
            <h2>Total</h2>
          </div>
          <div className={styles.totalPrice}>
            <h1>{calculateTotalPrice()}đ</h1>
          </div>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
