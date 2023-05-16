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

  const displayProducts = useMemo(() => {
    const itemsVisited = pageOffset * 4;
    return products.slice(itemsVisited, itemsVisited + 4);
  }, [products, pageOffset]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>Shopping Cart</h2>

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
              <ItemShoppingCart key={index} price="100" name={product} />
            ))}
          </div>
          <div className={styles.rightWrapper}>
            <h2>Some Text</h2>
            <p>This is the text content on the right side.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
