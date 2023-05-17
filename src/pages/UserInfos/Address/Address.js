import styles from './Address.module.scss';
import { useMemo, useState } from 'react';

function Address() {
  const [pageOffset, setPageOffset] = useState(0);
  const [address, setAddress] = useState([
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
    return address.slice(itemsVisited, itemsVisited + itemsPerPage);
  }, [address, pageOffset]);

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
    <div className={styles.main}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <div>
        {displayAddress.map((address, index) => (
          <div key={index}>
            <p>{address.city}</p>
            <p>{address.phone}</p>
            <p>{address.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Address;
