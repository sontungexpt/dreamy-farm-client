import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import styles from './Products.module.scss';
import { productsPageConfigs as configs } from '~/configs/pages';

import PaginatePage from '~/components/PaginatePage';
import AddableItem from '~/components/AddableItem';
import Selector from '~/components/Selector';

function Products() {
  const [categorySelected, setCategorySelected] = useState(
    configs.categories[0].title,
  );

  const [products, setProducts] = useState([
    'Apple',
    'Noodle',
    'Fish',
    'French fries',
    'Water',
    'Organe',
    'Tomato',
    'Kiwi',
    'Banana',
    'Potato',
    'Milk',
    'Bread',
    'Rice',
    'Sugar',
    'Salt',
    'Pepper',
  ]);

  useEffect(() => {
    // fetch(categoriesSelected.api)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });
  }, [categorySelected]);

  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <aside className={clsx(['col', 'l-2', 'm-3', 'c-0', styles.sidebar])}>
          <h2 className={styles.title}>Products</h2>
          <Selector
            className={styles.categories}
            data={configs.categories}
            itemClassName={styles.item}
            itemActiveClassName={styles.active}
            onItemClick={(item) => setCategorySelected(item.title)}
            renderItem={(item) => item.title}
          />
        </aside>
        <div className={clsx(['col', 'l-10', 'm-9', 'c-12', styles.main])}>
          <h2 className={styles.title}>{categorySelected}</h2>
          <PaginatePage
            className={styles.container}
            data={products}
            renderItem={(item, index) => (
              <div key={index} className="col l-3 m-4 c-6">
                <AddableItem price="100" name={item} />
              </div>
            )}
            itemsPerPage={configs.itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
