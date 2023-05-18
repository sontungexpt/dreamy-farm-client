import styles from './Address.module.scss';
import { useMemo, useState } from 'react';
import AddressCard from './AddressCard.js';
import { clsx } from 'clsx';
import React from 'react';
import PaginatePage from '~/components/PaginatePage';

function Address() {
  const [pageOffset, setPageOffset] = useState(0);
  const [addresses, setAddress] = useState([
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
  // const itemsPerPage = 3;

  // const displayAddress = useMemo(() => {
  //   const itemsVisited = pageOffset * itemsPerPage;
  //   return addresses.slice(itemsVisited, itemsVisited + itemsPerPage);
  // }, [addresses, pageOffset]);

  return (
    <div className={clsx(['grid', 'l-10', 'm-10', 'c-12'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <div className={clsx(['row'])}>
          <h2 className={styles.header}>Address</h2>
        </div>

        {/* <div className={styles.addressContainer}>
          {displayAddress.map((address, index) => (
            <div className={styles.addressRow} key={index}>
              <AddressCard
                city={address.city}
                name={address.name}
                phone={address.phone}
                address={address.address}
              />
            </div>
          ))} */}

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
              />
            </div>
          )}
          itemsPerPage={4}
        />
      </div>
    </div>
    // </div>
  );
}

export default Address;
