import { useRef } from 'react';
import { clsx } from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { setAddress } from '~/redux/slices/orderSlice';

import styles from './SelectOtherAddress.module.scss';

import Card from '~/pages/Checkout/Card';
import Trans from '~/components/Trans';
import Selector from '~/components/Selector';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { Address as AddressIcon } from '~/assets/images/icons/SvgIcons';

function SelectOtherAddress({ addresses }) {
  const modalRef = useRef(null);
  const selectorRef = useRef(null);
  const dispatch = useDispatch();
  const address = useSelector((state) => state.order.address);

  const handleSave = () => {
    dispatch(setAddress(selectorRef.current.activeItem));
    modalRef.current.close();
  };

  const handleCancel = () => {
    modalRef.current.close();
  };

  return (
    <>
      <Card
        name="address"
        checked={address !== ''}
        onClick={() => modalRef.current.open()}
        icon={<AddressIcon color="var(--blue-color)" />}
        title={address || 'No address'}
        className={styles.card}
      />
      <Modal ref={modalRef} className={styles.innerModal}>
        <Selector
          data={addresses}
          ref={selectorRef}
          className={styles.selector}
          initialIndex={0}
          itemClassName={clsx(['l-12 c-12 m-12', styles.item])}
          renderItem={(address, index, active, activeItem) => (
            <Card
              name="address"
              checked={active}
              key={index}
              title={address}
              icon={<AddressIcon color="var(--blue-color)" />}
              index={index}
            />
          )}
        />
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

export default SelectOtherAddress;
