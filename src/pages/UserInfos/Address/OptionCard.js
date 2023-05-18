import styles from './OptionCard.module.scss';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useState, useRef } from 'react';
import { ThreeDots } from '~/assets/images/icons/SvgIcons';

function OptionCard() {
  const modalRef = useRef(null);
  const handleModalClose = useCallback(() => {
    modalRef.current.close();
  }, []);

  return (
    <div className={styles.button}>
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.option}
        childrenClassName={styles.optionText}
        alignLeft
        blackOutline
        leftIcon={<ThreeDots className={styles.threedots} />}
      ></Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <ol style={{ listStyleType: 'decimal' }}>
          <li>
            <Button className={styles.button}>Edit</Button>
          </li>
          <li>
            <Button className={styles.button}>Delete</Button>
          </li>
          <li>
            <Button className={styles.button}>Select as primary address</Button>
          </li>
        </ol>
      </Modal>
    </div>
  );
}
export default OptionCard;
