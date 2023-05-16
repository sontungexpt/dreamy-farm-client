import styles from './ItemShoppingCart.module.scss';
import Image from '~/components/Image';
import Counter from '~/components/Counter';
import { useState, useRef } from 'react';
import { Tag as PriceTag } from '~/assets/images/icons/SvgIcons';
import ToggleIcon from '~/components/ToggleIcon';
import ModalButton from '~/components/ModalButton';
import Button from '~/components/Button';
import Detail from '~/pages/Products/Item/Detail';

function ItemShoppingCart({
  name,
  price,
  image,
  priceTag,
  quantity,
  onRemove,
}) {
  function handleRemove(event) {
    event.stopPropagation();
    onRemove && onRemove();
  }
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

        <div>
          <button className="remove">Remove</button>
        </div>
      </div>
    </div>
  );
}
export default ItemShoppingCart;
