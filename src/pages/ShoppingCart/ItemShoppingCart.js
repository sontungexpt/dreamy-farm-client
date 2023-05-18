import styles from './ItemShoppingCart.module.scss';
import Image from '~/components/Image';
import Counter from '~/components/Counter';
import { useState, useRef } from 'react';
import { Tag as PriceTag } from '~/assets/images/icons/SvgIcons';

function ItemShoppingCart({ name, price, image, priceTag, onRemove }) {
  const handleRemove = (event) => {
    event.stopPropagation();
    onRemove && onRemove();
  };
  const counterRef = useRef();
  return (
    <div className={styles.itemShoppingCart}>
      <Image className={styles.image} src={image} alt="item" />
      <div className={styles.itemShoppingCartInfo}>
        <h3 className={styles.itemShoppingCartName}>{name}</h3>
        <Counter ref={counterRef} className={styles.quantity} />
        <div className={styles.tagPriceWrapper}>
          <PriceTag className={styles.imageTag} src={priceTag} alt="priceTag" />
          <h4 className={styles.price}>{price}đ</h4>
        </div>

        <button className={styles.remove} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
export default ItemShoppingCart;
