import styles from './OrderItem.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function OrderItem({
  orderName,
  orderDate,
  orderPrice,
  numberOfItem,
  orderState, // Complete, Pending, Cancel
  className,
}) {
  return (
    <div
      className={clsx([
        styles.border,
        {
          [className]: className,
        },
      ])}
    >
      <div className={styles.infoWrapper}>
        <h3>{orderName}</h3>
        <p className={styles.subtitle}>
          {orderDate} • Rp{orderPrice} • Item:{numberOfItem} products
        </p>
      </div>
      <div className={styles.currentState}>
        <span
          className={clsx([
            styles.stateColor,
            {
              [styles.stateColorComplete]: orderState === 'Complete',
            },
            {
              [styles.stateColorPending]: orderState === 'Pending',
            },
            {
              [styles.stateColorCancel]: orderState === 'Cancel',
            },
          ])}
        >
          •
        </span>
        {orderState}
      </div>
    </div>
  );
}

OrderItem.propTypes = {
  orderName: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderPrice: PropTypes.number.isRequired,
  numberOfItem: PropTypes.number.isRequired,
  orderState: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default OrderItem;
