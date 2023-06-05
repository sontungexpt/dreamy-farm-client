import { useEffect, useState } from 'react';
import clsx from 'clsx';

import CustomerDetails from './customerDetails';
import OrderItems from './OrderItems';
import OrderTracking from './OrderTracking';
import styles from './OrderDetails.module.scss';

import { getOrderInformation } from '~/apiServices/orderServices';

function OrderDetails() {
  const [orderInfomation, setOrderInfomation] = useState([]);
  useEffect(() => {
    const handleGetRecipes = async () => {
      const orderInformationRes = await getOrderInformation();
      setOrderInfomation(orderInformationRes);
    };
    handleGetRecipes();
  });

  return (
    <div className={clsx([styles.container, 'grid', 'wide'])}>
      <h1 className={styles.header}>Order</h1>
      <div className={clsx(['row'])}>
        {/* <OrderItems className={clsx(['l-8'])} items={orderInfomation.items} /> */}
        <OrderTracking className={clsx(['l-3'])} />
        <CustomerDetails
          className={clsx(['l-8'])}
          userName={orderInfomation.userName}
          userMail={orderInfomation.userMail}
          tel={orderInfomation.tel}
          payMethod={orderInfomation.payMethod}
          address={orderInfomation.address}
        />
      </div>
    </div>
  );
}

export default OrderDetails;
