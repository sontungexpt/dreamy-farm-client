import styles from './EditAddressCard.module.scss';
import { clsx } from 'clsx';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Modal } from '~/components/ModalButton';
import {
  NoFilledUser as NoFilledUserIcon,
  Phone as PhoneIcon,
  Location as LocationIcon,
} from '~/assets/images/icons/SvgIcons';

function EditAddressCard() {
  const { t } = useTranslation('translations');
  const modalRef = useRef(null);

  return (
    <div>
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.editAddressCard}
      >
        {t('Edit')}
      </Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <form>
          <div className={clsx(['grid', styles.wrapper])}>
            <div className={styles.header}>
              <h2>{t('Edit address')}</h2>
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
                label={t('Address')}
                id="address"
                type="text"
                name="address"
              />
            </div>
            <div className={clsx(['grid', 'l-o-6', styles.buttonWrapper])}>
              <Button
                className={clsx([styles.cancelButton])}
                onClick={() => modalRef.current.open()}
              >
                {t('Cancel')}
              </Button>
              <Button
                className={clsx([styles.saveButton])}
                onClick={() => modalRef.current.open()}
              >
                {t('Save')}
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
export default EditAddressCard;
