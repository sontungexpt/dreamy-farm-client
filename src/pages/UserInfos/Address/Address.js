import styles from './Address.module.scss';
import { useMemo, useState } from 'react';
import AddressCard from './AddressCard/AddressCard.js';
import { clsx } from 'clsx';
import React from 'react';
import PaginatePage from '~/components/PaginatePage';
import NewAddressCard from './NewAddressCard/NewAddressCard';

function Address() {
  // const [pageOffset, setPageOffset] = useState(0);
  const [addresses, setAddresses] = useState([
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Stella',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',

      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Katina',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Anaa',
      phone: '98765431',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
      isDefault: false,
    },
  ]);

  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.splice(index, 1);
      return updatedAddresses;
    });
  };
  const handleSelectPrimary = (index) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.forEach((address, i) => {
        address.isDefault = i === index;
      });
      return updatedAddresses;
    });
  };

  return (
    <div className={clsx(['grid', 'l-10', 'm-10', 'c-12'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <h2 className={styles.header}>Address</h2>
        <div className={styles.addButtonWrapper}>
          <div className={styles.addButton}>
            <NewAddressCard />
          </div>
        </div>

        <PaginatePage
          className={clsx(['l-12', 'm-12', 'c-12', styles.addressContainer])}
          data={addresses}
          renderItem={(address, index) => (
            <div key={index} className={styles.addressRow}>
              <AddressCard
                city={address.city}
                name={address.name}
                phone={address.phone}
                address={address.address}
                onDelete={() => handleDeleteAddress(index)}
                onSelectPrimary={() => handleSelectPrimary(index)}
                isDefault={address.isDefault}
              />
            </div>
          )}
          itemsPerPage={4}
        />
      </div>
    </div>
  );
}

export default Address;
