import { clsx } from 'clsx';
import { useEffect } from 'react';
import styles from './WishList.module.scss';

import PaginatePage from '~/components/PaginatePage';
import AddableItem from '~/components/AddableItem';
import Trans from '~/components/Trans';
import { useSelector, useDispatch } from 'react-redux';
import { getWishList } from '~/redux/slices/userSlice';

function WishList() {
  const dispatch = useDispatch();
  const { wishList, email, favoriteProducts } = useSelector(
    (state) => state.user,
  );

  useEffect(() => {
    dispatch(getWishList(email));
  }, [favoriteProducts, dispatch, email]);

  return (
    <div className={clsx(['grid', styles.wrapper])}>
      <div className={styles.header}>
        <h2>
          <Trans>Wishlist</Trans>
        </h2>
        <div className={styles.wishListCount}>{wishList.length}</div>
      </div>

      <div className={styles.main}>
        <PaginatePage
          className={styles.container}
          data={wishList}
          renderItem={(item, index) => (
            <div key={index} className={clsx(['col', 'l-3', 'm-4', 'c-6'])}>
              <AddableItem
                isFavorite={true}
                id={item._id}
                name={item.name}
                image={item.image}
                type={item.types[0]}
                slug={item.slug}
              />
            </div>
          )}
          itemsPerPage={8}
        />
      </div>
    </div>
  );
}

export default WishList;
