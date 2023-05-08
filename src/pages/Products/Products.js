import { clsx } from 'clsx';
import { useMemo, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Products.module.scss';
import { productsPageConfigs as configs } from '~/configs/pages';

import Item from './Item';

function Products() {
  const [products, setProducts] = useState([
    'fdaf',
    'fdafa',
    'afd',
    'fdaf',
    'fdafa',
    'afd',
    'fdaf',
    'fdafa',
    'afd',
    'fdaf',
    'fdafa',
    'afd',
    'fdaf',
    'fdafa',
    'afd',
  ]);
  const [pageOffset, setPageOffset] = useState(0);

  const displayItems = useMemo(() => {
    const itemsVisited = pageOffset * configs.itemsPerPage;
    return products.slice(itemsVisited, itemsVisited + configs.itemsPerPage);
  }, [products, pageOffset]);

  const pageCount = Math.ceil(products.length / configs.itemsPerPage);

  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <nav className={clsx(['col', 'l-2', 'm-3', 'c-0', styles.sidebar])}>
          <h2 className={styles.title}>Products</h2>
          <ul className={styles.list}>
            {configs.categories.map((category, index) => (
              <li key={index} className={styles.item}>
                <a href="/products" className={styles.link}>
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={clsx(['col', 'l-10', 'm-9', 'c-12', styles.main])}>
          <h2 className={styles.title}>Products</h2>
          <div className={clsx(['row', styles.container])}>
            {displayItems.map((item, index) => (
              <div key={index} className={clsx(['col', 'l-3', 'm-4', 'c-6'])}>
                <Item price="100" name={item} />
              </div>
            ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={({ selected }) => {
              setPageOffset(selected);
            }}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            breakClassName={styles.breakClassName}
            breakLinkClassName={styles.breakLinkClassName}
            containerClassName
            pageClassName
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
