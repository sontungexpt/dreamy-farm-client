import { useEffect, useState } from 'react';
import styles from './OrderItem.module.scss';
import { AngleUp, AngleDown } from '~/assets/images/icons/SvgIcons';

function OrderItem({
  orderName,
  orderDate,
  orderPrice,
  numberOfItem,
  orderState,
}) {
  const [orderExpand, setOrderExpland] = useState(false);
  const handleExpland = () => {
    setOrderExpland((prev) => !prev);
  };

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
      <div onClick={handleExpland} className={styles.moreInfoImage}>
        {orderExpand ? <AngleUp color="black" /> : <AngleDown color="black" />}
      </div>
    </div>
  );
}

export default OrderItem;
