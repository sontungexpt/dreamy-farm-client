import styles from './OrderItem.module.scss';
import Image from '~/components/Image/Image';
import clsx from 'clsx';

function OrderItems({ items }) {
  const orderPrice = items.reduce((total, item) => {
    return (total =
      total + parseFloat(item.price) * parseFloat(item.numberOfItem));
  }, 0);
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Ordered Items</h2>
      <div className={styles.itemPart}>
        {items.map((item) => {
          return (
            <div className={clsx([styles.itemContainer, 'custom-scrollbar'])}>
              <Image
                src={item.image}
                alt="orderItem"
                className={styles.imgItem}
              />
              <div className={styles.textContainer}>
                <p className={styles.orderInfo}>
                  {item.itemName} <br /> {item.itemId}
                </p>
                <p className={styles.orderInfo}>
                  {item.price}đ x {item.numberOfItem}
                </p>
                <p className={styles.orderInfo}>
                  {parseFloat(item.price) * parseFloat(item.numberOfItem)}đ
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pricing}>
        <div className={styles.pricingItem}>
          Subtotal: <span>{orderPrice}</span>
        </div>
        <div className={styles.pricingItem}>
          Shipping: <span>{items.shippingPrice}</span>
        </div>
        <div className={styles.pricingItem}>
          Total: <span>{orderPrice + items.shippingPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderItems;
