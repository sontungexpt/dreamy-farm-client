import ItemShoppingCart from './ItemShoppingCart.js';
import { useMemo, useEffect, useState } from 'react';
import { productsPageConfigs as configs } from '~/configs/pages';
import { clsx } from 'clsx';
import styles from './ShoppingCart.module.scss';

function ShoppingCart() {
  const [pageOffset, setPageOffset] = useState(0);
  const [products, setProducts] = useState([
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    'Product 6',
    'Product 7',
    'Product 8',
  ]);

  const itemsPerPage = 2;

  const displayProducts = useMemo(() => {
    const itemsVisited = pageOffset * itemsPerPage;
    return products.slice(0, itemsVisited + itemsPerPage);
  }, [products, pageOffset]);

  const handleLoadMore = () => {
    setPageOffset(prevOffset => prevOffset + 1);
  };

  const handleRemoveProduct = (index) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>Shopping Cart</h2>
        <h3 className={styles.subtitle}>{`${products.length} products in cart`}</h3>

        <div className={styles.wrapper}>
          <div
            className={clsx([
              styles.leftWrapper,
              'l-1',
              'l-7',
              'm-o-1',
              'c-o-0',
            ])}
          >
            {displayProducts.map((product, index) => (
              <ItemShoppingCart
                key={index}
                price="100"
                name={product}
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
            <h2>Total</h2>
            <h1>000đ</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
