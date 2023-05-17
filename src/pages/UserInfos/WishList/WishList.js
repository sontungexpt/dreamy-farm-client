import { clsx } from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './WishList.module.scss';

import PaginatePage from '~/components/PaginatePage';
import AddableItem from '~/components/AddableItem';

function WishList() {
  const { t } = useTranslation('translations');
  const [items, setItems] = useState([
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
  return (
    <div className={clsx(['grid', styles.wrapper])}>
      <div className={styles.header}>
        <h2>{t('Wishlist')}</h2>
        <div className={styles.wishListCount}>({items.length})</div>
      </div>

      <div className={styles.main}>
        <PaginatePage
          className={styles.container}
          data={items}
          renderItem={(item, index) => (
            <div key={index} className={clsx(['col', 'l-3', 'm-4', 'c-6'])}>
              <AddableItem price="100" name={item} />
            </div>
          )}
          itemsPerPage={8}
        />
      </div>
    </div>
  );
}

export default WishList;
