import { useState } from 'react';
import styles from './OrderTracking.module.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';
import {
  OrderPlaced,
  OrderConfirmed,
  OrderPending,
  Delivered,
  PackagePicked,
  PackageShipped,
  GreenTick,
} from '~/assets/images/icons/SvgIcons';

function OrderTracking() {
  const [currentTask, setCurrentTask] = useState(2);
  const handleAccept = () => {
    setCurrentTask(3);
  };
  return (
    <div className={styles.container}>
      <div className={styles.confirmRequest}>
        <h2 className={styles.header}>Pending Order</h2>
        <Button
          children="Confirm"
          className={styles.confirmButton}
          hoverZoom
          onClick={handleAccept}
        />
        <Button
          children="Decline"
          blackOutline
          className={styles.declineButton}
          hoverZoom
        />
      </div>
      <div className={styles.tracking}>
        <h2 className={styles.header}>Order History</h2>
        <ul>
          <li className={styles.task}>
            <OrderPlaced />
            Order placed
            {currentTask >= 1 ? <GreenTick className={styles.workDone} /> : ''}
          </li>
          <li className={styles.task}>
            <OrderPending />
            Order pending
            {currentTask >= 2 ? <GreenTick className={styles.workDone} /> : ''}
          </li>
          <li className={styles.task}>
            <OrderConfirmed />
            Order confirmed
            {currentTask >= 3 ? <GreenTick className={styles.workDone} /> : ''}
          </li>
          <li className={styles.task}>
            <PackagePicked />
            Package Picked
            {currentTask >= 4 ? <GreenTick className={styles.workDone} /> : ''}
          </li>
          <li className={styles.task}>
            <PackageShipped />
            Package Shipped
            {currentTask >= 5 ? <GreenTick className={styles.workDone} /> : ''}
          </li>
          <li className={styles.task}>
            <Delivered />
            Delivered
            {currentTask >= 6 ? <GreenTick className={styles.workDone} /> : ''}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrderTracking;
