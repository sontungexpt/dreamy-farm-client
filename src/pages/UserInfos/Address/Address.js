import styles from './Address.module.scss';
import { useMemo, useState } from 'react';
import AddressCard from './AddressCard.js';
import { clsx } from 'clsx';
import React from 'react';

function Address() {
  const [pageOffset, setPageOffset] = useState(0);
  const [addresses, setAddress] = useState([
    {
      city: 'Hồ Chí Minh',
      phone: '0123456789',
      address: '86 Lê Thánh Tôn, Bến Nghé, District 1, Hồ Chí Minh',
    },
    {
      city: 'Hồ Chí Minh',
      phone: '0123456789',
      address: '86 Lê Thánh Tôn, Bến Nghé, District 1, Hồ Chí Minh',
    },
    {
      city: 'Hồ Chí Minh',
      phone: '0123456789',
      address: '86 Lê Thánh Tôn, Bến Nghé, District 1, Hồ Chí Minh',
    },
    {
      city: 'Hồ Chí Minh',
      phone: '0123456789',
      address: '86 Lê Thánh Tôn, Bến Nghé, District 1, Hồ Chí Minh',
    },
    {
      city: 'Hồ Chí Minh',
      phone: '0123456789',
      address: '86 Lê Thánh Tôn, Bến Nghé, District 1, Hồ Chí Minh',
    },
    {
      city: 'Hồ Chí Minh',
      phone: '0123456789',
      address: '86 Lê Thánh Tôn, Bến Nghé, District 1, Hồ Chí Minh',
    },
    {
      city: 'Hồ Chí Minh',
      phone: '0123456789',
      address: '86 Lê Thánh Tôn, Bến Nghé, District 1, Hồ Chí Minh',
    },
  ]);
  const itemsPerPage = 3;

  const displayAddress = useMemo(() => {
    const itemsVisited = pageOffset * itemsPerPage;
    return addresses.slice(itemsVisited, itemsVisited + itemsPerPage);
  }, [addresses, pageOffset]);

  // const handleLoadMore = () => {
  //   setPageOffset((prevOffset) => prevOffset + 1);
  // };
  // const handleRemoveProduct = (index) => {
  //   setProducts((prevProducts) => {
  //     const updatedProducts = [...prevProducts];
  //     updatedProducts.splice(index, 1);
  //     return updatedProducts;
  //   });
  // };

  // const calculateTotalPrice = () => {
  //   const totalPrice = products.reduce(
  //     (accumulator, product) => accumulator + parseFloat(product.price),
  //     0,
  //   );
  //   return totalPrice;
  // };

  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx(['row', styles.wrapper])}>
        <h2 className={styles.title}>Address</h2>
        <div>
          {displayAddress.map((address, index) => (
            <div className={styles.addressRow} key={index}>
              <AddressCard
                city={address.city}
                phone={address.phone}
                address={address.address}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Address;
