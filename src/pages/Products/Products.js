import axios from 'axios';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import styles from './Products.module.scss';
import { productsPageConfigs as configs } from '~/configs/pages';
import { apiConfigs } from '~/configs';

import PaginatePage from '~/components/PaginatePage';
import AddableItem from '~/components/AddableItem';
import Selector from '~/components/Selector';

function Products() {
  const [categorySelected, setCategorySelected] = useState(
    configs.categories[0],
  );
  const { t } = useTranslation('translations');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(apiConfigs.products.category(categorySelected.category))
      .then((res) => {
        const { products: productsRes } = res.data;
        setProducts(productsRes);
      })
      .catch((error) => {
        toast.error(t('Something went wrong'));
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);

  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <aside className={clsx(['col', 'l-2', 'm-3', 'c-0', styles.sidebar])}>
          <h2 className={styles.title}>{t('Products')}</h2>
          <Selector
            className={styles.categories}
            data={configs.categories}
            itemClassName={styles.item}
            itemActiveClassName={styles.active}
            onInactiveItemClick={(item) => setCategorySelected(item)}
            renderItem={(item) => t(item.title)}
          />
        </aside>
        <div className={clsx(['col', 'l-10', 'm-9', 'c-12', styles.main])}>
          <h2 className={styles.title}>{t(categorySelected.title)}</h2>
          <PaginatePage
            className={styles.container}
            data={products}
            renderItem={(item, index) => (
              <div key={index} className="col l-3 m-4 c-6">
                <AddableItem
                  price="100"
                  description={item.description}
                  name={item.name}
                  image={item.image}
                  id={item._id}
                />
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
