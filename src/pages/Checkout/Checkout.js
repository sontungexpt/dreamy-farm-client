import { useSelector, useDispatch } from 'react-redux';
import { setPaymentMethod } from '~/redux/slices/orderSlice';
import { clsx } from 'clsx';

import styles from './Checkout.module.scss';
import { routes as routesConfig } from '~/configs';
import { checkoutConfigs as configs } from '~/configs/pages';

import SelectOtherAddress from './SelectOtherAddress';
import SelectOtherPhoneNumber from './SelectOtherPhoneNumber';
import Selector from '~/components/Selector';
import LoadMore from '~/components/LoadMore';
import Button from '~/components/Button';
import ItemShoppingCart from '~/components/ItemShoppingCart';
import Trans from '~/components/Trans';
import Card from './Card';

function Checkout() {
  const dispatch = useDispatch();
  const addresses = [
    '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
  ];
  const {
    products,
    totalPrice,
    paymentMethod,
    count: productCount,
  } = useSelector((state) => state.order);

  const handlPaymentMethodChange = (method) => {
    dispatch(setPaymentMethod(method));
  };

  return (
    <div className={styles.page}>
      <div className={clsx([styles.wrapper])}>
        <section className={styles.section}>
          <h1 className={styles.header}>
            <Trans>Billing address</Trans>
          </h1>
          <SelectOtherAddress addresses={addresses} />
        </section>
        <section className={styles.section}>
          <h1 className={styles.header}>
            <Trans>Phone number</Trans>
          </h1>
          <SelectOtherPhoneNumber />
        </section>
        <section className={styles.section}>
          <h1 className={styles.header}>
            <Trans>Payment method</Trans>
          </h1>
          <Selector
            data={configs.payments}
            itemClassName={clsx([styles.card, 'l-12 m-12 c-12'])}
            onInactiveItemClick={(item) =>
              handlPaymentMethodChange(item.method)
            }
            renderItem={(item) => (
              <Card
                name="payment-method"
                value={item.method}
                onChange={() => {}}
                hoverEffect
                checked={paymentMethod === item.method}
                title={item.title}
                icon={item.icon}
              />
            )}
          />
        </section>
        <section className={styles.section}>
          <h1 className={clsx([styles.header, styles.orderHeader])}>
            <Trans>Order detail</Trans>
          </h1>

          <h3 className={styles.subTitle}>
            {productCount} <Trans>products in cart</Trans>
          </h3>
          <LoadMore
            data={products}
            loadMoreLabel={<Trans>Load More</Trans>}
            collapseLabel={<Trans>Collapse</Trans>}
            noDataLabel={<Trans>There is no data to load</Trans>}
            autoHidden={false}
            canCollapse={true}
            controlClassName={styles.control}
            noDataClassName={styles.noData}
            itemsPerLoad={3}
            renderItem={(item, index) => (
              <ItemShoppingCart
                key={index}
                price={item.type.price}
                name={item.name}
                initialCount={item.count}
                image={item.image}
                id={item.id}
                type={item.type}
                hasCounter={false}
                hasBtnRemove={false}
              />
            )}
          />
        </section>
        <section className={styles.section}>
          <div className={styles.totalWrapper}>
            <h2 className={styles.total}>
              <Trans>Total</Trans>
            </h2>
            <h1 className={styles.price}>{totalPrice}đ</h1>
            <Button
              to={routesConfig.orderConfirm}
              primary
              className={clsx([styles.completeBtn])}
            >
              <Trans>Complete Checkout</Trans>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Checkout;
