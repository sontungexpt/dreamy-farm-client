import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { setAddress } from '~/redux/slices/orderSlice';
import PropTypes from 'prop-types';

import styles from './SelectOtherAddress.module.scss';

import Card from '~/pages/Checkout/Card';
import Trans from '~/components/Trans';
import Selector from '~/components/Selector';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import {
  Address as AddressIcon,
  Phone as PhoneIcon,
} from '~/assets/images/icons/SvgIcons';

function SelectOtherAddress({ addreses }) {
  const modalRef = useRef(null);
  const selectorRef = useRef(null);
  const dispatch = useDispatch();
  const { address: orderAdress } = useSelector((state) => state.order);
  const { addressActive } = useSelector((state) => state.user);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const handleSave = () => {
    dispatch(setAddress(selectorRef.current.activeItem));
    modalRef.current.close();
  };

  const handleCancel = () => {
    modalRef.current.close();
  };
  const handleAddNewAddress = () => {
    setShowNewAddressForm(true);
  };
  const handleSaveNewAddress = () => {
    setShowNewAddressForm(false);
  };

  return (
    <>
      <Card
        name="address"
        checked={addressActive?.address && addressActive?.phoneNumber}
        onChange={() => {}}
        onClick={() => modalRef.current.open()}
        titles={[
          {
            title: addressActive?.address || 'Select other address',
            icon: <AddressIcon color="var(--blue-color)" />,
          },
          {
            title: addressActive?.phoneNumber || 'Select other phone number',
            icon: <PhoneIcon color="var(--green-color)" />,
          },
        ]}
        className={styles.card}
      />
      <Modal ref={modalRef} className={styles.innerModal}>
        <Selector
          data={addreses}
          ref={selectorRef}
          className="row"
          initialActiveIndex={0}
          itemClassName={clsx(['col l-12 c-12 m-12', styles.item])}
          renderItem={(address, index, active) => (
            <Card
              name="address"
              checked={active}
              onChange={() => {}}
              key={index}
              // title={address}
              // icon={<AddressIcon color="var(--blue-color)" />}
              //
              titles={[
                {
                  title: address,
                  icon: <AddressIcon color="var(--blue-color)" />,
                },
                {
                  title: '0392211343',
                  icon: <PhoneIcon color="var(--green-color)" />,
                },
              ]}
              index={index}
            />
          )}
        />
        <Button className={styles.addNewAddress} onClick={handleAddNewAddress}>
          +Add New Address
        </Button>
        {showNewAddressForm && (
          <div className={styles.newAddressForm}>
            <div className={styles.addressLabel}>
              <p className={styles.newAddress}>Address: </p>
              <input type="text" id="newAddress" />
            </div>
            <div className={styles.phoneLabel}>
              <p className={styles.newPhoneNumber}>Phone Number: </p>
              <input type="text" id="newPhoneNumber" />
            </div>
            <div className={styles.saveAddressButton}>
              <Button
                className={styles.saveAddressButton}
                onClick={handleSaveNewAddress}
              >
                Save New Address
              </Button>
            </div>
          </div>
        )}

        <div className={styles.footer}>
          <Button className={styles.control} onClick={handleCancel}>
            <Trans>Cancel</Trans>
          </Button>
          <Button primary className={styles.control} onClick={handleSave}>
            <Trans>Save</Trans>
          </Button>
        </div>
      </Modal>
    </>
  );
}

SelectOtherAddress.propTypes = {
  addreses: PropTypes.array,
};

export default SelectOtherAddress;
