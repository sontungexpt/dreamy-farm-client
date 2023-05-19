import styles from './Address.module.scss';
import { useMemo, useState } from 'react';
import AddressCard from './AddressCard.js';
import { clsx } from 'clsx';
import React from 'react';
import PaginatePage from '~/components/PaginatePage';
import { Plus } from '~/assets/images/icons/SvgIcons';
import NewAddressCard from './NewAddressCard';

function Address() {
  const [pageOffset, setPageOffset] = useState(0);
  const [addresses, setAddresses] = useState([
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Anaa',
      phone: '98765431',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
    {
      city: 'Ho Chi Minh',
      name: 'Agelia',
      phone: '0123456789',
      address: '86 Le Thanh Ton, Ben Nghe, District 1, Ho Chi Minh',
    },
  ]);

  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.splice(index, 1);
      return updatedAddresses;
    });
  };

  return (
    <div className={clsx(['grid', 'l-10', 'm-10', 'c-12'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <h2 className={styles.header}>Address</h2>
        <div className={styles.addButtonWrapper}>
          <button className={styles.addButton}>
            <Plus />
            <NewAddressCard className={styles.addNewAddressText} />
          </button>
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
