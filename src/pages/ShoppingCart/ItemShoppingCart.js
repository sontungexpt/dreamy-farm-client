import styles from './ItemShoppingCart.module.scss';
import Image from '~/components/Image';
import ToggleIcon from '~/components/ToggleIcon';
import ModalButton from '~/components/ModalButton';
import Button from '~/components/Button';

function ItemShoppingCart({
    name,
    price,
    image,
    quantity,
    onAdd,
  }) {
    function handleAdd(event) {
        event.stopPropagation();
        onAdd && onAdd();
      }
      return (
        <ModalButton
          closeBtn
          button={
            <div className={styles.wrapper}>
              <Image className={styles.image} src={image} alt="item" />
              <div className={styles.content}>
                <div>
                  <h3 className={styles.name}>{name}</h3>
                </div>
                <div>
                  <p className={styles.quantity}>{quantity ? quantity : '100 g'}</p>
                  <p className={styles.price}>{price} đ</p>
                </div>
                <Button onClick={handleAdd} className={styles.addBtn} primary>
                  Remove
                </Button>
              </div>
            </div>
          }
        ></ModalButton>
      );  
  }
  export default ItemShoppingCart;