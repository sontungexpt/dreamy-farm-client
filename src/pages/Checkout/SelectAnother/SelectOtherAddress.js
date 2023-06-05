import styles from './SelectOtherAddress.module.scss';
import BillingAddress from '../BillingAddress/BillingAddress';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useRef } from 'react';
import { clsx } from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function AddressListItem({ address, index, selected, handleSelect }) {
  return (
    <BillingAddress
      key={index}
      phone={address.phone}
      address={address.address}
      selected={selected}
      handleSelect={handleSelect}
    />
  );
}

function SelectOtherAddress({ addresses }) {
  const { t } = useTranslation('translations');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const modalRef = useRef(null);

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
  };

  const handleSave = () => {
    modalRef.current.close();
  };

  const handleCancel = () => {
    modalRef.current.close();
  };
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    phone: '',
    address: '',
  });
  const handleAddNewAddress = () => {
    setShowNewAddress(!showNewAddress);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the new address (e.g., save to state or send to server)
    console.log(newAddress);
    // Reset the form fields
    setNewAddress({
      phone: '',
      address: '',
    });
    // Hide the "Add new address" section
    setShowNewAddress(false);
  };

  return (
    <div className={clsx([styles.selectCard])}>
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.option}
        alignRight
      >
        <div className={styles.radioButton}>
          <input
            type="radio"
            checked={selectedAddress !== null}
            onChange={() => handleSelectAddress(selectedAddress)}
          />
          <p className={clsx(styles.selectText)}>
            {selectedAddress !== null ? (
              <>
                <p>
                  {addresses[selectedAddress].name} -{' '}
                  {addresses[selectedAddress].phone}
                </p>
                <p>{addresses[selectedAddress].address}</p>
              </>
            ) : (
              t('+ Select a billing address')
            )}
          </p>
        </div>
      </Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <div className={styles.modalContent}>
          <div className={styles.addressList}>
            {addresses.map((address, index) => (
              <AddressListItem
                key={index}
                address={address}
                index={index}
                selected={selectedAddress === index}
                handleSelect={() => handleSelectAddress(index)}
              />
            ))}
            {showNewAddress && (
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={newAddress.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={newAddress.address}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit">Save Address</button>
                </form>
              </div>
            )}

            {/* Add new address button */}
            <button onClick={handleAddNewAddress}>Add new address</button>
          </div>
          <div className={styles.modalButtons}>
            <Button className={styles.cancelButton} onClick={handleCancel}>
              {t('Cancel')}
            </Button>
            <Button className={styles.saveButton} onClick={handleSave}>
              {t('Save')}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SelectOtherAddress;
