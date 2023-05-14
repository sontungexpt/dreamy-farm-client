import styles from './Item.module.scss';
import Image from '~/components/Image';
import ToggleIcon from '~/components/ToggleIcon';
import ModalButton from '~/components/ModalButton';
import Button from '~/components/Button';

function Item({
    name,
    price,
    image,
    quantity,
    onClick,
    onUnClick,
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
            <div to="/" className={styles.wrapper}>
              <Image className={styles.image} src={image} alt="item" />
              <div className={styles.content}>
                <div>
                  <h3 className={styles.name}>{name}</h3>
                  <ToggleIcon
                    className={styles.favorite}
                    onClick={onClick}
                    onUnClick={onUnClick}
                  />
                </div>
                <div>
                  <p className={styles.quantity}>{quantity ? quantity : '100 g'}</p>
                  <p className={styles.price}>{price} đ</p>
                </div>
                <Button onClick={handleAdd} className={styles.addBtn} primary>
                  Add
                </Button>
              </div>
            </div>
          }
        //   innerModal={
        //     <div className={styles.innerModal}>
        //       <Detail name={name} price={price} />
        //     </div>
        //   }
        ></ModalButton>
      );  
  }
  export default Item;