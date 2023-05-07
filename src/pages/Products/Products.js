import { clsx } from 'clsx';

import styles from './Products.module.scss';
import Item from './Item';

function Products() {
  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <nav className={clsx(['col', 'l-2', 'm-3', 'c-0', styles.sidebar])}>
          <h2 className={styles.title}>Products</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/products" className={styles.link}>
                <span className={styles.text}>trang chu </span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/products" className={styles.link}>
                <span className={styles.text}>trang chu </span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/products" className={styles.link}>
                <span className={styles.text}>trang chu </span>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/products" className={styles.link}>
                <span className={styles.text}>trang chu </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={clsx(['col', 'l-10', 'm-9', 'c-12', styles.main])}>
          <h2 className={styles.title}>Products</h2>
          <div className={clsx(['row', styles.container])}>
            <div className={clsx(['col', 'l-3', 'm-4', 'c-6'])}>
              <Item price="100" name="apple" />
            </div>
            <div className={clsx(['col', 'l-3', 'm-4', 'c-6'])}>
              <Item price="100" name="apple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
