import styles from './ItemShoppingCart.module.scss';
import Image from '~/components/Image';
import Counter from '~/components/Counter';
import { useState, useRef } from 'react';
import {Tag as PriceTag} from '~/assets/images/icons/SvgIcons';
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
        <div className='itemShoppingCart'>
          <Image className={styles.image} src={image} alt="item" />
          <div className='itemShppingCartInfo'>
            <h3 className='itemShoppingCartName'>{name}</h3>
            <Counter ref={counterRef} className={styles.quantity} />
            <PriceTag className={styles.image} src={priceTag} alt='priceTag'/>
            <h4 className='price'>{price}đ</h4>
          </div>
        </div>
        // <ModalButton
        //   closeBtn
        //   button={
        //     <div to="/" className={styles.wrapper}>
        //       <Image className={styles.image} src={image} alt="item" />
        //       <div className={styles.content}>
        //         <div>
        //           <h3 className={styles.name}>{name}</h3>
        //         </div>
        //         <div>
        //           <p className={styles.quantity}>{quantity ? quantity : '100 g'}</p>
        //           <p className={styles.price}>{price} đ</p>
        //         </div>
        //         <Button onClick={handleAdd} className={styles.addBtn} primary>
        //           Add
        //         </Button>
        //       </div>
        //     </div>
        //   }
        //   innerModal={
        //     <div className={styles.innerModal}>
        //       <Detail name={name} price={price} />
        //     </div>
        //   }
        // ></ModalButton>
      );
  }
  export default ItemShoppingCart;