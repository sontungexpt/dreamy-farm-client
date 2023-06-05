import { useRef } from 'react';
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
        onChange={() => {}}
        onClick={() => modalRef.current.open()}
        // title={address || 'No address'}
        // icon={<AddressIcon color="var(--blue-color)" />}

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
        className={styles.card}
      />
      <Modal ref={modalRef} className={styles.innerModal}>
        <Selector
          data={addresses}
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
  addresses: PropTypes.array,
};

export default SelectOtherAddress;
