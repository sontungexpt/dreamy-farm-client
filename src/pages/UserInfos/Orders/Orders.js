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
  ];

  return (
    <div>
      <h2>Orders</h2>
      <div style={{ marginTop: '20px' }}>
        {ordersData.map((order) => (
          <OrderItem
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
