import styles from './SelectOtherAddress.module.scss';
import BillingAddress from '../BillingAddress';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useRef } from 'react';
import { clsx } from 'clsx';
import { useState } from 'react';
function SelectOtherAddress({ addresses }) {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const modalRef = useRef(null);

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
  };

  return (
    <div
      className={clsx([
        'grid',
        styles.selectCard,
        selectedAddress !== null && styles.selected,
      ])}
    >
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.option}
        alignRight
      >
        <div className={styles.radioButton}>
          <input type="radio" checked={selectedAddress !== null} readOnly />
          <p
            className={clsx(
              styles.selectText,
              selectedAddress !== null && styles.selectedText,
            )}
          >
            {selectedAddress !== null ? (
              <>
                <p>
                  {addresses[selectedAddress].name} -{' '}
                  {addresses[selectedAddress].phone}
                </p>
                <p>{addresses[selectedAddress].address}</p>
              </>
            ) : (
              '+ Select another billing address'
            )}
          </p>
        </div>
      </Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <div className={styles.modalContent}>
          <div className={styles.addressList}>
            {addresses.map((address, index) => (
              <BillingAddress
                key={index}
                name={address.name}
                phone={address.phone}
                address={address.address}
                selected={selectedAddress === index}
                handleSelect={() => handleSelectAddress(index)}
              />
            ))}
          </div>
          <div className={styles.modalButtons}>
            <Button className={styles.cancelButton}>Cancel</Button>
            <Button className={styles.saveButton}>Save</Button>
          </div>
        </div>
      </Modal>
      {/* {selectedAddress !== null && (
        <div className={styles.selectedAddress}>
          <p>{addresses[selectedAddress].name} - {addresses[selectedAddress].phone}</p>
          <p>{addresses[selectedAddress].address}</p>
        </div>
      )} */}
    </div>
  );
}

export default SelectOtherAddress;
