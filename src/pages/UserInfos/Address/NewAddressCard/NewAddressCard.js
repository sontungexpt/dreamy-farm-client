import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAddress } from '~/redux/slices/userSlice';

import styles from './NewAddressCard.module.scss';

import Trans from '~/components/Trans';
import Button from '~/components/Button';
import Input from '~/components/Input/Input';
import { Modal } from '~/components/ModalButton';
import {
  Phone as PhoneIcon,
  Location as LocationIcon,
  Plus as PlusIcon,
} from '~/assets/images/icons/SvgIcons';

function NewAddressCard() {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { email } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const modalRef = useRef(null);
  const handleAddNewAddress = () => {
    dispatch(addUserAddress({ address, phoneNumber, email }));
    setAddress('');
    setPhoneNumber('');
    modalRef.current.close();
  };

  return (
    <div>
      <Button
        primary
        className={styles.button}
        onClick={() => modalRef.current.open()}
        whiteText
        leftIcon={<PlusIcon className={styles.plusIcon} />}
      >
        <Trans>Add new address</Trans>
      </Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <div className="grid">
          <div className={styles.header}>
            <h2>
              <Trans>Add new address</Trans>
            </h2>
          </div>
          <div className={clsx(['col l-12 m-12 c-12', styles.info])}>
            <Input
              labelIcon={<PhoneIcon color="var(--yellow-color)" />}
              className={styles.input}
              label={<Trans>Phone number</Trans>}
              id="phone"
              type="text"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              labelIcon={<LocationIcon color="var(--green-color)" />}
              className={styles.input}
              label={<Trans>Address</Trans>}
              id="address"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              blackOutline
              className={styles.controlButton}
              onClick={() => modalRef.current.close()}
            >
              <Trans>Cancel</Trans>
            </Button>
            <Button
              primary
              className={styles.controlButton}
              onClick={handleAddNewAddress}
            >
              <Trans>Save</Trans>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default NewAddressCard;
