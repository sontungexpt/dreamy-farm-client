import styles from './NewAddressCard.module.scss';
import { clsx } from 'clsx';
import Button from '~/components/Button';
import Input from '~/pages/UserInfos/Account/components/Input';
import { useTranslation } from 'react-i18next';
import { useCallback, useState, useRef } from 'react';
import { Modal } from '~/components/ModalButton';
import { Plus } from '~/assets/images/icons/SvgIcons';
import {
  NoFilledUser as NoFilledUserIcon,
  Phone as PhoneIcon,
  Location as LocationIcon,
} from '~/assets/images/icons/SvgIcons';

function NewAddressCard() {
  const { t } = useTranslation('translations');
  const modalRef = useRef(null);
  const handleModalClose = useCallback(() => {
    modalRef.current.close();
  }, []);
  return (
    <div>
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.newAddressCard}
        whiteText
        leftIcon={<Plus className={styles.plusIcon} />}
      >
        Add new address
      </Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <form>
          <div className={clsx(['grid', styles.wrapper])}>
            <div className={styles.header}>
              <h2>{t('Add new adress')}</h2>
            </div>
            <div className={clsx(['col l-12 m-12 c-12', styles.info])}>
              <Input
                labelIcon={<NoFilledUserIcon color="var(--blue-color)" />}
                className={styles.input}
                label={t('Name')}
                id="name"
                type="text"
                name="name"
              />
              <Input
                labelIcon={<PhoneIcon color="var(--yellow-color)" />}
                className={styles.input}
                label={t('Phone number')}
                id="phone"
                type="numeric"
                name="phone"
              />
              <Input
                labelIcon={<LocationIcon color="var(--green-color)" />}
                className={styles.input}
                label={t('Adress')}
                id="adress"
                type="text"
                name="adress"
              />
            </div>
            <div className={styles.saveButtonWrapper}>
              <Button
                className={styles.saveButton}
                onClick={() => modalRef.current.open()}
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
export default NewAddressCard;
