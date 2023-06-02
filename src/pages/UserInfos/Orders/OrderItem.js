import styles from './OrderItem.module.scss';
import moreInfo from '~/assets/images/jpgs/index';

function OrderItem({
  orderName,
  orderDate,
  orderPrice,
  numberOfItem,
  orderState,
}) {
  return (
    <div className={styles.border}>
      <div className={styles.textContent}>
        <p style={{ fontWeight: 'bold' }}>{orderName}</p>
        <p>
          {orderDate} • Rp{orderPrice} • Item:{numberOfItem} products
        </p>
      </div>
      <div className={styles.currentState}>
        <span
          className={styles.stateColor}
          style={{ color: orderState === 'Complete' ? 'green' : '#F2C94C' }}
        >
          •
        </span>
        <p className={styles.stateContent}>{orderState}</p>
      </div>
      <img
        src={moreInfo.moreInfo}
        alt="moreInfo"
        className={styles.moreInfoImage}
      />
    </div>
  );
}

export default OrderItem;
