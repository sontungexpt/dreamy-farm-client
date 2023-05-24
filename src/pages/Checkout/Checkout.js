import styles from './Checkout.module.scss';
import { Wallet, CreditCard } from '~/assets/images/icons/SvgIcons';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import SelectOtherAddress from './SelectAnother/SelectOtherAddress';

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
      <div className={styles.header}>
        <h1>{t('Order detail')}</h1>
      </div>
    </div>
  );
}

export default Checkout;
