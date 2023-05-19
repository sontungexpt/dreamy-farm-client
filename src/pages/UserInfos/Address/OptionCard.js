import styles from './OptionCard.module.scss';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useState, useRef } from 'react';
import { ThreeDots } from '~/assets/images/icons/SvgIcons';

function OptionCard({ onDelete, onEdit, onSelectPrimary }) {
  const modalRef = useRef(null);
  const handleModalClose = useCallback(() => {
    modalRef.current.close();
  }, []);

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
    handleModalClose();
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
    handleModalClose();
  };

  const handleSelectPrimary = () => {
    if (onSelectPrimary) {
      onSelectPrimary();
    }
    handleModalClose();
  };

  return (
    <div className={styles.button}>
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.option}
        alignRight
        rightIcon={<ThreeDots className={styles.threedots} />}
      ></Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <ol className={styles.optionList}>
          <li>
            <Button className={styles.button} onClick={handleEdit}>
              Edit
            </Button>
          </li>
          <li>
            <Button className={styles.button} onClick={handleDelete}>
              Delete
            </Button>
          </li>
          <li>
            <Button className={styles.button} onClick={handleSelectPrimary}>
              Select as primary address
            </Button>
          </li>
        </ol>
      </Modal>
    </div>
  );
}

export default OptionCard;
