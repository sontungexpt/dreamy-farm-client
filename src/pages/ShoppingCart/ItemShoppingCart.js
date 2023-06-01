import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import {
  increaseProductCount,
  decreaseProductCount,
} from '~/redux/slices/orderSlice';

import styles from './ItemShoppingCart.module.scss';

import Image from '~/components/Image';
import Counter from '~/components/Counter';
import Trans from '~/components/Trans';
import { Tag as PriceTag } from '~/assets/images/icons/SvgIcons';
import PropTypes from 'prop-types';

function ItemShoppingCart({
  id,
  type,
  name,
  price,
  image,
  onRemove,
  initialCount,
}) {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onRemove && onRemove();
  };

  const handleIncrease = () => {
    dispatch(increaseProductCount({ id, type }));
  };

  const handleDecrease = () => {
    dispatch(decreaseProductCount({ id, type }));
  };

  return (
    <div className={clsx(['grid', styles.wrapper])}>
      <div className="row">
        <div
          className={clsx(['col', 'l-2', 'm-2', 'c-3', styles.imageWrapper])}
        >
          <Image className={styles.image} src={image} alt={name || 'item'} />
        </div>
        <div className={clsx(['col', 'l-10', 'm-10', 'c-9'])}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h3 className={styles.name}>{name}</h3>
              <div className={styles.priceWrapper}>
                <PriceTag className={styles.icon} color="var(--red-color)" />
                <h4 className={styles.price}>{price}đ </h4>
              </div>
            </div>
            <div className={styles.removeWrapper}>
              <button className={styles.remove} onClick={handleRemove}>
                <Trans>Remove</Trans>
              </button>
            </div>
            <Counter
              minValue={0}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              className={styles.quantity}
              initialCount={initialCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ItemShoppingCart.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  onRemove: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string,
  initialCount: PropTypes.number,
};

export default ItemShoppingCart;
