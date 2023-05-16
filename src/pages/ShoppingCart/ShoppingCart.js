import ItemShoppingCart from './ItemShoppingCart.js';
import { useMemo, useEffect, useState } from 'react';
import { productsPageConfigs as configs } from '~/configs/pages';
import { clsx } from 'clsx';
import ReactPaginate from 'react-paginate';
import styles from './ShoppingCart.module.scss';

function ShoppingCart() {
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(2);
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(2);
  const [pageOffset, setPageOffset] = useState(0);
  const [products, setProducts] = useState([
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
    'fdaf',
    'fdafa',
    'afd',
  ]);

  const displayItems = useMemo(() => {
    const itemsVisited = pageOffset * configs.itemsPerPage;
    return products.slice(itemsVisited, itemsVisited + configs.itemsPerPage);
  }, [products, pageOffset]);

  useEffect(() => {
    const handlePageRangeResponsive = () => {
      if (window.innerWidth < 900) {
        setPageRangeDisplayed(1);
      } else {
        setPageRangeDisplayed(2);
      }
    };
    window.addEventListener('resize', handlePageRangeResponsive);
    return () => {
      window.removeEventListener('resize', handlePageRangeResponsive);
    };
  }, []);

  useEffect(() => {
    const handleMarginPagesResponsive = () => {
      if (window.innerWidth < 1000) {
        setMarginPagesDisplayed(1);
      } else {
        setMarginPagesDisplayed(2);
      }
    };
    window.addEventListener('resize', handleMarginPagesResponsive);
    return () => {
      window.removeEventListener('resize', handleMarginPagesResponsive);
    };
  }, []);

  return (
    // <div className={clsx(['grid', 'wide'])}>
      <div className={clsx([styles.wrapper])}>
     
       <nav className={clsx([styles.main])}>
          <h2 className={styles.title}>Shopping Cart</h2>
        </nav>
      
        <div className={clsx([ styles.main])}>
          <div className={clsx(['row', styles.container])}>
            {displayItems.map((item, index) => (
              <div key={index} className={clsx(['l-1', 'l-7', 'm-o-1', 'c-o-0'])}>
                <ItemShoppingCart price="100" name={item} />
              </div>
            ))}
          </div>
        </div>
        {/* </> */}
       </div>
    // </div>
  );
}

export default ShoppingCart;
