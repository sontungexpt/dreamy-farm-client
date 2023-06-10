import styles from './Address.module.scss';
import { useSelector } from 'react-redux';

import AddressCard from './AddressCard/AddressCard.js';
import Trans from '~/components/Trans';
import PaginatePage from '~/components/PaginatePage';
import NewAddressCard from './NewAddressCard';

function Address() {
  const { addreses } = useSelector((state) => state.user);
  const handleDeleteAddress = (index) => {
    // setAddresses((prevAddresses) => {
    //   const updatedAddresses = [...prevAddresses];
    //   updatedAddresses.splice(index, 1);
    //   return updatedAddresses;
    // });
  };

  const handleSelectPrimary = (index) => {
    // setAddresses((prevAddresses) => {
    //   const updatedAddresses = [...prevAddresses];
    //   updatedAddresses.forEach((address, i) => {
    //     address.isDefault = i === index;
    //   });
    //   return updatedAddresses;
    // });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Trans>Address</Trans>
        </h2>
        <NewAddressCard />
      </div>

      <PaginatePage
        className={styles.addresses}
        renderSpacingClassName={styles.renderSpacing}
        paginationClassName={styles.pagination}
        itemsPerPage={6}
        data={addreses}
        renderItem={(address, index) => (
          <div key={index} className="col l-6 m-12 c-12">
            <AddressCard
              className={styles.addressCard}
              phone={address.phoneNumber}
              address={address.address}
              onDelete={() => handleDeleteAddress(index)}
              onSelectPrimary={() => handleSelectPrimary(index)}
              isDefault={address.active}
            />
          </div>
        )}
      />
    </div>
  );
}

export default Address;
