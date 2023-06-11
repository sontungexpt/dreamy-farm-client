import OrderItem from './OrderItem';
import { useState, useEffect } from 'react';
import styles from './Orders.module.scss';

function Orders() {
  const [orders, setOrders] = useState([
    {
      orderDate: '10/10/2021',
      orderName: 'Order 1',
      orderPrice: 700000,
      numberOfItem: 5,
      orderState: 'Pending',
    },
    {
      orderDate: '10/10/2021',
      orderName: 'Order 2',
      orderPrice: 800000,
      numberOfItem: 3,
      orderState: 'Complete',
    },
  ]); // [OrderItem, OrderItem, OrderItem

  useEffect(() => {
    // call api
    // setOrders();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>Orders</h2>
      <div className={styles.content}>
        {orders.map((order, index) => (
          <OrderItem
            key={index}
            className={styles.orderItem}
            orderDate={order.orderDate}
            orderName={order.orderName}
            orderPrice={order.orderPrice}
            orderState={order.orderState}
            numberOfItem={order.numberOfItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
