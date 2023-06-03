import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Products.module.scss';
import { productsPageConfigs as configs } from '~/configs/pages';
import { getProductsAtCategory } from '~/apiServices/productServices';
import history from '~/utils/navigateSite';

import PaginatePage from '~/components/PaginatePage';
import AddableItem from '~/components/AddableItem';
import Selector from '~/components/Selector';
import Trans from '~/components/Trans';

function Products() {
  const [category, setCategory] = useState(configs.categories[0]);
  const { favoriteProducts } = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleGetProducts = async () => {
      const productsRes = await getProductsAtCategory(category.category);
      if (productsRes) {
        setProducts(productsRes);
      } else {
        history.navigate('/404', { replace: true });
      }
    };
    handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleIsFavorite = (id) => {
    if (favoriteProducts) {
      return favoriteProducts.includes(id);
    }
  };

  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <aside className={clsx(['col', 'l-2', 'm-3', 'c-0', styles.sidebar])}>
          <h2 className={styles.title}>
            <Trans>Products</Trans>
          </h2>
          <Selector
            className={styles.categories}
            data={configs.categories}
            itemClassName={styles.item}
            itemActiveClassName={styles.active}
            onInactiveItemClick={(item) => setCategory(item)}
            renderItem={(item) => <Trans>{item.title}</Trans>}
          />
        </aside>
        <div className={clsx(['col', 'l-10', 'm-9', 'c-12', styles.main])}>
          <h2 className={styles.title}>
            <Trans>{category.title}</Trans>
          </h2>
          <PaginatePage
            className={styles.container}
            data={products}
            renderItem={(item, index) => (
              <div key={index} className="col l-3 m-4 c-6">
                <AddableItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  type={item.types[0]}
                  slug={item.slug}
                  isFavorite={(() => handleIsFavorite(item._id))()}
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
