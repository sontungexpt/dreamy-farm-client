import styles from './AddressCard.module.scss';
import {
  Address as AddressIcon,
  Phone as PhoneIcon,
} from '~/assets/images/icons/SvgIcons';
import { clsx } from 'clsx';
import OptionCard from '~/pages/UserInfos/Address/OptionCard/OptionCard';
import PropTypes from 'prop-types';

function AddressCard({
  phone,
  address,
  onEdit,
  onDelete,
  onSelectPrimary,
  isDefault = false,
  className,
}) {
  return (
    <div
      className={clsx([
        'grid',
        styles.addressCard,
        {
          [className]: className,
        },
      ])}
    >
      <div className={styles.info}>
        <div className={styles.infoElement}>
          <PhoneIcon className={styles.icon} color="var(--red-color)" />
          <span>{phone}</span>
          {isDefault && <span className={styles.defaultMark}>Default</span>}
        </div>
        <div className={styles.infoElement}>
          <AddressIcon className={clsx([styles.icon, styles.addressIcon])} />
          <span>{address}</span>
        </div>
      </div>
      <div className={styles.threedots}>
        <OptionCard
          onDelete={onDelete}
          onEdit={onEdit}
          onSelectPrimary={onSelectPrimary}
          isDefault={isDefault}
        />
      </div>
    </div>
  );
}

AddressCard.propTypes = {
  phone: PropTypes.string,
  address: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSelectPrimary: PropTypes.func,
  isDefault: PropTypes.bool,
  className: PropTypes.string,
};

export default AddressCard;
