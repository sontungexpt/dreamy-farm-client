import styles from './Checkout.module.scss';
import { Wallet, CreditCard } from '~/assets/images/icons/SvgIcons';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import SelectOtherAddress from './SelectAnother/SelectOtherAddress';
import LoadMore from '~/components/LoadMore';
import Item from './Item/Item';

function Checkout() {
  const { t } = useTranslation('translations');
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
      name: 'Katina',
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
    },
    {
      name: 'Anaa',
      phone: '98765431',
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
    {
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
  ];
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 100, quantity: 2 },
    { name: 'Product 2', price: 200, quantity: 2 },
    { name: 'Product 3', price: 300, quantity: 1 },
    { name: 'Product 4', price: 400, quantity: 1 },
    { name: 'Product 5', price: 100, quantity: 2 },
    { name: 'Product 6', price: 100, quantity: 3 },
    { name: 'Product 7', price: 100, quantity: 3 },
    { name: 'Product 8', price: 100, quantity: 1 },
    { name: 'Product 9', price: 100, quantity: 1 },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
  };

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className={clsx(['grid', 'l-10', 'm-10', 'c-10', styles.wrapper])}>
      <div className={styles.header}>
        <h1>{t('Billing address')}</h1>
      </div>
      <div className={styles.addressArea}>
        <SelectOtherAddress addresses={addresses} />
      </div>
      <div className={styles.header}>
        <h1>{t('Payment method')}</h1>
      </div>
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
            <Wallet className={styles.cashOnDelivery} />
            <span>{t('Cash on delivery')}</span>
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
            <CreditCard className={styles.creditCard} />
            <span>{t('Credit card')}</span>
          </div>
        </div>
      </div>
      <div className={styles.orderDetail}>
        <div className={styles.header}>
          <h1>{t('Order detail')}</h1>
        </div>
        <h3 className={styles.subTitle}>
          {`${products.length} products in cart`}
        </h3>
        <div className={clsx(['row', styles.main])}>
          <div className="col l-9 m-8 c-12">
            <LoadMore
              data={products}
              loadMoreLabel="Load More"
              collapseLabel="Collapse"
              noDataLabel="There is no data to load"
              autoHidden={false}
              canCollapse={true}
              controlClassName={styles.control}
              noDataClassName={styles.noData}
              itemsPerLoad={3}
              renderItem={(item, index) => (
                <Item
                  key={index}
                  price={item.price}
                  name={item.name}
                  quantity={item.quantity}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
