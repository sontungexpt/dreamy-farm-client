import styles from './EditAddressCard.module.scss';
import { clsx } from 'clsx';
import Button from '~/components/Button';
import Input from '~/components/Input/Input';
import { useTranslation } from 'react-i18next';
import {
  Phone as PhoneIcon,
  Location as LocationIcon,
} from '~/assets/images/icons/SvgIcons';

function EditAddressCard({ close }) {
  const { t } = useTranslation('translations');

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{t('Edit address')}</h2>
      </div>
      <div className={clsx(['col l-12 m-12 c-12', styles.info])}>
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
        <Button onClick={() => close()} className={clsx([styles.cancelButton])}>
          {t('Cancel')}
        </Button>
        <Button onClick={() => close()} className={clsx([styles.saveButton])}>
          {t('Save')}
        </Button>
      </div>
    </div>
  );
}
export default EditAddressCard;
