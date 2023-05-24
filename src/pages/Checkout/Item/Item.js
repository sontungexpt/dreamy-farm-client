import styles from './Item.module.scss';
import { useRef } from 'react';
import { clsx } from 'clsx';

import Image from '~/components/Image';
import { Tag as PriceTag } from '~/assets/images/icons/SvgIcons';

function Item({ name, price, image, quantity }) {
  return (
    <div className={clsx(['grid', styles.wrapper])}>
      <div className="row">
        <div
          className={clsx(['col', 'l-2', 'm-2', 'c-3', styles.imageWrapper])}
        >
          <Image className={styles.image} src={image} alt="item" />
        </div>
        <div className={clsx(['col', 'l-10', 'm-10', 'c-9'])}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h3 className={styles.name}>{name}</h3>
              <div className={styles.rightWrapper}>
                <div className={styles.priceWrapper}>
                  <PriceTag className={styles.icon} color="var(--red-color)" />
                  <h4 className={styles.price}>{price}đ</h4>
                </div>
                <div className={styles.quantityWrapper}>
                  <p>Q{quantity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
