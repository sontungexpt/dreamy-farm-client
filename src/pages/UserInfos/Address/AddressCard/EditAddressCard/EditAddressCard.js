import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './EditAddressCard.module.scss';
import Button from '~/components/Button';
import Input from '~/components/Input/Input';
import {
  Phone as PhoneIcon,
  Location as LocationIcon,
} from '~/assets/images/icons/SvgIcons';

function EditAddressCard({
  onSave,
  close,

  initialAddress,
  initialPhoneNumber,
}) {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || '');
  const [address, setAddress] = useState(initialAddress || '');
  const { t } = useTranslation('translations');

  const handleSave = () => {
    onSave && onSave(phoneNumber, address);
    close();
  };

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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          labelIcon={<LocationIcon color="var(--green-color)" />}
          className={styles.input}
          label={t('Address')}
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button blackOutline onClick={() => close()} className={styles.button}>
          {t('Cancel')}
        </Button>
        <Button primary onClick={handleSave} className={styles.button}>
          {t('Save')}
        </Button>
      </div>
    </div>
  );
}

EditAddressCard.propTypes = {
  onSave: PropTypes.func,
  close: PropTypes.func.isRequired,

  initialAddress: PropTypes.string,
  initialPhoneNumber: PropTypes.string,
};

export default EditAddressCard;
