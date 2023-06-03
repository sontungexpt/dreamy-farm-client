import OrderItem from './OrderItem';
import styles from './Orders.module.scss';

function Orders() {
  const ordersData = [
    {
      orderDate: '10/10/2021',
      orderName: 'Order 1',
      orderPrice: 700000,
      numberOfItem: 5,
      orderState: 'In transmit',
    },
    {
      orderDate: '10/10/2021',
      orderName: 'Order 2',
      orderPrice: 800000,
      numberOfItem: 3,
      orderState: 'Complete',
    },
    {
      orderDate: '10/10/2021',
      orderName: 'Order 3',
      orderPrice: 600000,
      numberOfItem: 2,
      orderState: 'Complete',
    },
    {
      orderDate: '10/10/2021',
      orderName: 'Order 4',
      orderPrice: 900000,
      numberOfItem: 4,
      orderState: 'Complete',
    },
    {
      orderDate: '10/10/2021',
      orderName: 'Order 5',
      orderPrice: 1000000,
      numberOfItem: 6,
      orderState: 'Complete',
    },
  ];

  const orderItems = ordersData.map((order) => (
    <OrderItem
      orderDate={order.orderDate}
      orderName={order.orderName}
      orderPrice={order.orderPrice}
      orderState={order.orderState}
      numberOfItem={order.numberOfItem}
    />
  ));

  return (
    <div>
      <h2>Orders</h2>
      <div style={{ marginTop: '20px' }}>{orderItems}</div>
    </div>
  );
}

export default Orders;
