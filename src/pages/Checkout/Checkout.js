import styles from './Checkout.module.scss';
import BillingAddress from './BillingAddress/BillingAddress';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
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

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
  };

  return (
    <div className={clsx(['grid', 'l-10', 'm-10', 'c-10', styles.wrapper])}>
      <div className={styles.header}>
        <h1>{t('Billing address')}</h1>
      </div>
      <div className={styles.addressArea}>
        <BillingAddress
          {...addresses[selectedAddress]}
          selected={true}
          handleSelect={() => {}}
        />
        <SelectOtherAddress addresses={addresses} />
      </div>
    </div>
  );
}

export default Checkout;
