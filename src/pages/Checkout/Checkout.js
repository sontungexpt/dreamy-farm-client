import styles from './Checkout.module.scss';
import BillingAddress from './BillingAddress/BillingAddress';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SelectOtherAddress from './BillingAddress/SelectAnother/SelectOtherAddress';

function Checkout() {
  const { t } = useTranslation('translations');
  const addresses = [
    {
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      name: 'John Doe',
      phone: '9876543210',
      address: '123 Main Street, Anytown, USA',
    },
  ];

  return (
    <div className={clsx(['grid', 'l-10', 'm-10', 'c-10', styles.wrapper])}>
      <div className={styles.header}>
        <h1>{t('Billing address')}</h1>
      </div>
      <div className={styles.addressArea}>
        <BillingAddress
          name={addresses[0].name}
          phone={addresses[0].phone}
          address={addresses[0].address}
        />
        <SelectOtherAddress />
      </div>
    </div>
  );
}

export default Checkout;
