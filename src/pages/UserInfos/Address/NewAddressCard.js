import styles from './NewAddressCard.module.scss';
import { clsx } from 'clsx';
import Button from '~/components/Button';
import Input from '~/pages/UserInfos/Account/components/Input';
import { useTranslation } from 'react-i18next';
import { useCallback, useState, useRef } from 'react';
import { Modal } from '~/components/ModalButton';

function NewAddressCard() {
  const { t } = useTranslation('translations');
  const modalRef = useRef(null);
  const handleModalClose = useCallback(() => {
    modalRef.current.close();
  }, []);
  return (
    <div className={styles.button}>
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.newAddressCard}
        childrenClassName={styles.addressCardText}
      ></Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <form>
          <div className={clsx(['grid', styles.wrapper])}>
            <div className={styles.header}>
              <h2>{t('Edit Address')}</h2>
            </div>
            <div className={clsx(['col l-8 m-8 c-12', styles.info])}>
              <Input
                // labelIcon={<NoFilledUserIcon color="var(--blue-color)" />}
                className={styles.input}
                label={t('Name')}
                id="name"
                type="text"
                name="name"
              />
              <Input
                // labelIcon={<MailIcon color="var(--red-color)" />}
                className={styles.input}
                label={t('Email')}
                id="email"
                type="email"
                name="email"
              />
              <Input
                // labelIcon={<PhoneIcon color="var(--yellow-color)" />}
                className={styles.input}
                label={t('Phone')}
                id="phone"
                type="text"
                name="phone"
              />
              <Input
                // labelIcon={<GenderIcon color="var(--green-color)" />}
                className={styles.input}
                label={t('Gender')}
                type="text"
                id="gender"
                name="gender"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
export default NewAddressCard;
