import styles from './ItemShoppingCart.module.scss';
import { clsx } from 'clsx';
import Image from '~/components/Image';
import Counter from '~/components/Counter';
import { useRef } from 'react';
import { Tag as PriceTag } from '~/assets/images/icons/SvgIcons';

function ItemShoppingCart({ name, price, image, onRemove }) {
  const handleRemove = (event) => {
    event.stopPropagation();
    onRemove && onRemove();
  };

  const counterRef = useRef();

  return (
    <div className={clsx(['grid', styles.wrapper])}>
      <div className="row">
        <div className={clsx(['col', 'l-3', 'm-3', 'c-3'])}>
          <Image className={styles.image} src={image} alt="item" />
        </div>
        <div className={clsx(['col', 'l-9', 'm-9', 'c-9'])}>
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
                Remove
              </button>
            </div>
            <Counter ref={counterRef} className={styles.quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemShoppingCart;
