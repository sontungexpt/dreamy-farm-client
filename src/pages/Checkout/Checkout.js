import { useSelector } from 'react-redux';
import { clsx } from 'clsx';
import styles from './Checkout.module.scss';
import { routes as routesConfig } from '~/configs';
import React, { useState, useMemo } from 'react';
import SelectOtherAddress from './SelectAnother/SelectOtherAddress';
import LoadMore from '~/components/LoadMore';
import Button from '~/components/Button';
import ItemShoppingCart from '~/components/ItemShoppingCart';
import Trans from '~/components/Trans';
import {
  Wallet as WalletIcon,
  CreditCard as CreditCardIcon,
} from '~/assets/images/icons/SvgIcons';

function Checkout() {
  const addresses = [
    {
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      name: 'Stella',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
  ];
  const products = useSelector((state) => state.order.products);

  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
    // Reset the selected payment method when a new address is selected
    setSelectedPaymentMethod(null);
  };

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };
  const totalPrice = useMemo(() => {
    const totalPrice = products.reduce(
      (accumulator, product) => accumulator + parseFloat(product.price),
      0,
    );
    return totalPrice;
  }, [products]);
  const totalQuantity = useMemo(() => {
    const totalQuantity = products.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0,
    );
    return totalQuantity;
  }, [products]);
  return (
    <div className={clsx([styles.wrapper])}>
      <h1 className={styles.header}>
        <Trans>Billing address</Trans>
      </h1>
      <SelectOtherAddress addresses={addresses} />
      <h1 className={styles.header}>
        <Trans>Payment method</Trans>
      </h1>
      <div className={styles.paymentMethods}>
        <div className={styles.paymentWrapper}>
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={selectedPaymentMethod === 'cod'}
            onChange={() => handleSelectPaymentMethod('cod')}
          />
          <div className={styles.methodContainer}>
            <WalletIcon className={styles.cashOnDelivery} />
            <span>
              <Trans>'Cash on delivery</Trans>
            </span>
          </div>
        </div>
        <div className={styles.paymentWrapper}>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={selectedPaymentMethod === 'creditCard'}
            onChange={() => handleSelectPaymentMethod('creditCard')}
          />
          <div className={styles.methodContainer}>
            <CreditCardIcon className={styles.creditCard} />
            <span>
              <Trans>Credit card</Trans>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.orderDetail}>
        <div className={clsx([styles.header])}>
          <h1>
            <Trans>Order detail</Trans>
          </h1>

          <h3 className={clsx([styles.subTitle])}>
            {totalQuantity} <Trans>products in cart</Trans>
          </h3>
        </div>
        <div className={clsx([styles.main])}>
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
        </div>
        <div className={styles.totalWrapper}>
          <h2 className={styles.total}>
            <Trans>Total</Trans>
          </h2>
          <h1 className={styles.totalPrice}>{totalPrice}đ</h1>
        </div>
      </div>
      <Button
        to={routesConfig.orderConfirm}
        primary
        className={clsx([styles.completeBtn])}
      >
        <Trans>Complete Checkout</Trans>
      </Button>
    </div>
  );
}

export default Checkout;
