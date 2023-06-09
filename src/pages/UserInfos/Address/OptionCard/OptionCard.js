import styles from './OptionCard.module.scss';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ThreeDots } from '~/assets/images/icons/SvgIcons';
import EditAddressCard from '~/pages/UserInfos/Address/EditAddress/EditAddressCard';

function OptionCard({ onDelete, onEdit, onSelectPrimary }) {
  const modalRef = useRef(null);
  const handleModalClose = useCallback(() => {
    modalRef.current.close();
  }, []);
  const { t } = useTranslation('translations');

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
    handleModalClose();
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
      handleModalClose();
    }
  };

  const handleSelectPrimary = () => {
    if (onSelectPrimary) {
      onSelectPrimary();
    }
    handleModalClose();
  };
  return (
    <div>
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
              <EditAddressCard />
            </Button>
          </li>
          <li>
            <Button className={styles.button} onClick={handleDelete}>
              {t('Delete')}
            </Button>
          </li>
          <li>
            <Button className={styles.button} onClick={handleSelectPrimary}>
              {t('Select as primary address')}
            </Button>
          </li>
        </ol>
      </Modal>
    </div>
  );
}

export default OptionCard;
