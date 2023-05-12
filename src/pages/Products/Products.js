import { clsx } from 'clsx';
import { useMemo, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Products.module.scss';
import { productsPageConfigs as configs } from '~/configs/pages';

import AddableItem from '~/components/AddableItem';

function Products() {
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(2);
  const [pageOffset, setPageOffset] = useState(0);
  const [categoriesSelected, setCategoriesSelected] = useState(
    configs.categories[0],
  );
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

  const pageCount = Math.ceil(products.length / configs.itemsPerPage);
  useEffect(() => {
    // fetch(categoriesSelected.api)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });
  }, [categoriesSelected]);

  useEffect(() => {
    const handlePageRangeResponsive = () => {
      if (window.innerWidth < 900) {
        setPageRangeDisplayed(2);
      } else if (window.innerWidth < 1400) {
        setPageRangeDisplayed(3);
      } else {
        setPageRangeDisplayed(5);
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
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <nav className={clsx(['col', 'l-2', 'm-3', 'c-0', styles.sidebar])}>
          <h2 className={styles.title}>Products</h2>
          <ul className={styles.list}>
            {configs.categories.map((category, index) => (
              <li
                key={index}
                className={clsx([
                  styles.item,
                  {
                    [styles.active]:
                      category.title === categoriesSelected.title,
                  },
                ])}
                onClick={() => {
                  setCategoriesSelected(category);
                }}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className={clsx(['col', 'l-10', 'm-9', 'c-12', styles.main])}>
          <h2 className={styles.title}>{categoriesSelected.title}</h2>
          <div className={clsx(['row', styles.container])}>
            {displayItems.map((item, index) => (
              <div key={index} className={clsx(['col', 'l-3', 'm-4', 'c-6'])}>
                <AddableItem price="100" name={item} />
              </div>
            ))}
          </div>
          <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={marginPagesDisplayed}
            pageRangeDisplayed={pageRangeDisplayed}
            breakLabel="..."
            nextLabel="Next"
            onPageChange={({ selected }) => {
              setPageOffset(selected);
            }}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            className={styles.pagination}
            pageLinkClassName={styles.page}
            activeLinkClassName={styles.active}
            previousLinkClassName={styles.control}
            nextLinkClassName={styles.control}
            disabledLinkClassName={styles.disabledControl}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
