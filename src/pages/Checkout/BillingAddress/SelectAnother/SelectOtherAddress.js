import styles from './SelectOtherAddress.module.scss';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useRef } from 'react';
import { clsx } from 'clsx';
function SelectOtherAddress({ selected, handleSelect }) {
  const modalRef = useRef(null);

  return (
    <div
      className={clsx(['grid', styles.selectCard, selected && styles.selected])}
    >
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.option}
        alignRight
      >
        <div className={styles.radioButton}>
          <input type="radio" checked={selected} readOnly />
          <p className={styles.selectText}>+ Select another billing address</p>
        </div>
      </Button>
      <Modal ref={modalRef} className={styles.innerModal}></Modal>
    </div>
  );
}

export default SelectOtherAddress;
