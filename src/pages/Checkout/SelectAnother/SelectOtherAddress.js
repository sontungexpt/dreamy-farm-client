import styles from './SelectOtherAddress.module.scss';
import BillingAddress from '../BillingAddress/BillingAddress';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useRef } from 'react';
import { clsx } from 'clsx';
import { useState } from 'react';
function SelectOtherAddress({
  addresses,
  selectedAddressIndex,
  handleSelectAddress,
}) {
  const [selectedAddress, setSelectedAddress] = useState(selectedAddressIndex);
  const modalRef = useRef(null);

  const handleSelect = (index) => {
    setSelectedAddress(index);
    handleSelectAddress(index);
  };

  return (
    <div
      className={clsx([
        'grid',
        styles.selectCard,
        selectedAddress !== null && styles.selected,
      ])}
    >
      <div className={styles.option}>
        <div className={styles.radioButton}>
          <input
            type="radio"
            id="selectOtherAddress"
            name="addressOption"
            checked={selectedAddressIndex === null}
            onChange={() => handleSelect(null)}
          />
          <span
            className={clsx(
              styles.selectText,
              selectedAddressIndex === null && styles.selectedText,
            )}
          >
            + Select another billing address
          </span>
        </div>
      </div>
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
                handleSelect={() => handleSelect(index)}
              />
            ))}
          </div>
          <div className={styles.modalButtons}>
            <Button className={styles.cancelButton}>Cancel</Button>
            <Button className={styles.saveButton}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default SelectOtherAddress;
